const router = require("express").Router();
const key = require("../Config/keys");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");

const {
  accessTokenSecret,
  refreshTokenSecret,
  accessTokenLife,
  refreshTokenLife,
} = key.jwt;

const prisma = new PrismaClient();

const generateAccessToken = (payload) => {
  return jwt.sign(payload, accessTokenSecret, {
    expiresIn: accessTokenLife,
  });
};

const generateRefreshToken = (payload) => {
  return jwt.sign(payload, refreshTokenSecret, {
    expiresIn: refreshTokenLife,
  });
};

router.post("/signin", async (req, res, next) => {
  try {
    let { email, password } = await req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    //check if user exist or not
    if (user === null) {
      throw new Error(`${email} does not exist please signup instead`);
    }

    //check is password valid or not
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error(`Incorrect Password`);
    }

    //create payload for token
    const payload = await {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    //generating Tokens
    const accessToken = await generateAccessToken(payload);
    const refreshToken = await generateRefreshToken(payload);

    //storing access token in database
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken,
      },
    });

    res.cookie("token", refreshToken, {
      httpOnly: true,
      maxAge: 365 * 24 * 60 * 60 * 100,
      sameSite: "none",
      secure: true,
    });

    res.json({
      accessToken,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    let { name, email, password } = await req.body;

    const isUser = await prisma.user.findUnique({ where: { email } });

    //check if user exist or not
    if (isUser !== null) {
      throw new Error(`${email} does exist please login instead`);
    }

    //check is password valid or not
    password = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    console.log(user);

    if (!user) {
      return 0;
    }

    //create payload for token
    const payload = await {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    //generating Tokens
    const accessToken = await generateAccessToken(payload);
    const refreshToken = await generateRefreshToken(payload);

    //storing access token in database
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken,
      },
    });

    res.cookie("token", refreshToken, {
      httpOnly: true,
      maxAge: 365 * 24 * 60 * 60 * 100,
      sameSite: "none",
      secure: true,
    });

    res.json({
      accessToken,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/refresh", async (req, res, next) => {
  try {
    console.log("refresh working....");
    const cookies = req.cookies;

    if (!cookies?.token) return res.sendStatus(401);

    const refreshToken = cookies.token;

    const user = await prisma.user.findUnique({
      where: { refreshToken },
    });

    //check if user exist or not
    if (!user) return res.sendStatus(403);

    jwt.verify(refreshToken, refreshTokenSecret, (err, decoded) => {
      if (err || decoded.id !== user.id) return res.sendStatus(403);

      //create payload for token
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      //generating Tokens
      const accessToken = generateAccessToken(payload);

      res.json({ accessToken });
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/signout", async (req, res, next) => {
  console.log("working....");
  try {
    const cookies = req.cookies;
    if (!cookies?.token) return res.sendStatus(204);

    const refreshToken = cookies.token;

    const user = await prisma.user.findUnique({
      where: { refreshToken },
    });

    //check if user exist or not
    if (!user) {
      res.clearCookie("token", {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      return res.sendStatus(204);
    }

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken: "",
      },
    });

    await res.clearCookie("token", {
      httpOnly: true,
    });
    return await res.sendStatus(204);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
