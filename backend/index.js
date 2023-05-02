const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Course = require("./db/Course");

const Jwt = require("jsonwebtoken");
const jwtKey = "e-comm";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  Jwt.sign({ user }, jwtKey, (err, token) => {
    if (err) {
      resp.send({
        result: "Somthing went wrong, Please try after sometime",
      });
    }
    resp.send({ result, auth: token });
  });
});

app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtKey, (err, token) => {
        if (err) {
          resp.send({
            result: "Somthing went wrong, Please try after sometime",
          });
        }
        resp.send({ user, auth: token });
      });
    } else {
      resp.send({ result: "No User Found" });
    }
  } else {
    resp.send({ result: "No User Found" });
  }
});

app.post("/add-course", verifyToken, async (req, resp) => {
  let course = new Course(req.body);
  let result = await course.save();
  resp.send(result);
});

app.get("/courses", verifyToken, async (req, resp) => {
  let products = await Course.find();
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({ result: "no Products found" });
  }
});

app.delete("/course/:id", verifyToken, async (req, resp) => {
  const result = await Course.deleteOne({ _id: req.params.id });
  resp.send(result);
});

app.get("/course/:id", verifyToken, async (req, resp) => {
  let result = await Course.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No Record Found." });
  }
});

app.put("/course/:id", verifyToken, async (req, resp) => {
  let result = await Course.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});

app.get("/search/:key", verifyToken, async (req, resp) => {
  let result = await Course.find({
    $or: [
      { name: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
});

function verifyToken(req, resp, next) {
  let token = req.headers["authorization"];
  if (token) {
    token = token.split(" ")[1];
    Jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        resp.status(401).send({ result: "Please prvide valid token" });
      } else {
        next();
      }
    });
  } else {
    resp.status(403).send({ result: "Please add token with header" });
  }
}
app.listen(5000);
