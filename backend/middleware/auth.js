const jwt = require("jsonwebtoken");
const key = require("../Config/keys");
const { accessTokenSecret } = key.jwt;

const authVerify = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, accessTokenSecret, (err, decoded) => {
      if (err) {
        res.clearCookie("token");
        return res.json({
          error: "Invalid Token Access Forbidden",
        });
      }
      req.user = decoded;
      next();
    });
  }
};

module.exports = {
  authVerify,
};
