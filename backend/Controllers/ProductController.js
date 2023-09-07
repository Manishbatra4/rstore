const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/all", (req, res, next) => {
  prisma.product
    .findMany({})
    .then((response) => {
      res.send({
        status: 1,
        products: response,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({
        status: 0,
        error: err,
      });
    });
});

router.post("/new", (req, res, next) => {
  let { name, description, sku, quantity, price } = req.body;
  quantity = parseInt(quantity);
  price = parseInt(price);
  prisma.product
    .create({ data: { name, description, sku, quantity, price } })
    .then((response) => {
      res.send({
        status: 1,
        product: response,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({
        status: 0,
        error: err,
      });
    });
});

router.get("/s/:id", (req, res, next) => {
  const id = req.params.id;
  prisma.product
    .findUnique({ where: { id } })
    .then((response) => {
      res.send({
        status: 1,
        product: response,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({
        status: 0,
        error: err,
      });
    });
});

router.post("/delete/:id", (req, res, next) => {
  const id = req.params.id;
  prisma.product
    .delete({ where: { id } })
    .then((response) => {
      console.log("response delete", response);
      res.send({
        status: 1,
        products: response,
      });
    })
    .catch((err) => {
      console.log("error delete", err);
      res.send({
        status: 0,
        error: err,
      });
    });
});

router.post("/update/:id", (req, res, next) => {
  const id = req.params.id;
  console.log("body data", req.body);
  prisma.product
    .update({ where: { id }, data: { ...req.body } })
    .then((response) => {
      res.send({
        status: 1,
        products: response,
      });
    })
    .catch((err) => {
      console.log("error update", err);
      res.send({
        status: 0,
        error: err,
      });
    });
});

module.exports = router;
