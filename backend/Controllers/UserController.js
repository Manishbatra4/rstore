const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/s", (req, res, next) => {
  const id = req.user.id;
  prisma.user
    .findUnique({ where: { id } })
    .then((response) => {
      res.send({
        status: 1,
        user: response,
      });
    })
    .catch((err) =>
      res.send({
        status: 0,
        error: err,
      })
    );
});

module.exports = router;
