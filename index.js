const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
const Usermodel = require("./models/user");


app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
  let { serviceName, description, price } = req.body;
  const createdUser = await Usermodel.create({
    serviceName,
    description,
    price,
  });
  res.redirect("/show");
});

app.get("/show", async (req, res) => {
  const allUsers = await Usermodel.find();
  res.render("show", { users: allUsers });
});

app.get("/delete/:id", async (req, res) => {
  let users = await Usermodel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/show");
});
app.get("/edit/:userid", async (req, res) => {
  let allusers = await Usermodel.findOne({ _id: req.params.userid });
  res.render("update", { user: allusers });
});

app.post("/update/:userid", async (req, res) => {
  let { serviceName, description,price } = req.body;
  let user = await Usermodel.findOneAndUpdate(
    { _id: req.params.userid },
    { serviceName, description, price },
    { new: true }
  );
  res.redirect("/show");
});
app.listen(3000);
