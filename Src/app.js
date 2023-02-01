const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
require("./db/connetion");
const Register = require("./modals/contectdb");
const port = process.env.PORT || 3000;




const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // written to read data from registration form

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set('views', views_path);
hbs.registerPartials(partials_path);


app.get("/", (req, res) => {
    res.render("home");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/art", (req, res) => {
    res.render("art");
})
app.get("/img1", (req, res) => {
    res.render("img1");
})
app.get("/img2", (req, res) => {
    res.render("img2");
})
app.get("/img3", (req, res) => {
    res.render("img3");
})
app.get("/img4", (req, res) => {
    res.render("img4");
})
app.get("/img5", (req, res) => {
    res.render("img5");
})
app.get("/img6", (req, res) => {
    res.render("img6");
})
app.get("/img7", (req, res) => {
    res.render("img7");
})
app.get("/img8", (req, res) => {
    res.render("img8");
})

app.get("/blog", (req, res) => {
    res.render("blog");
})
app.get("/contact", (req, res) => {
    res.render("contact");
})



// create a new user in our database 
app.post("/contact", async(req, res) => {

    try {
        const email = req.body.email;
        const phone = req.body.phone;
        const city = req.body.city;
        const registerUser = new Register({
            yourname: req.body.yourname,
            email: req.body.email,
            phone: req.body.phone,
            city: req.body.city,
            check1: req.body.check1,
            check2: req.body.check2
        })

        const savedEmail = await Register.findOne({ email: email });
        const savedPhone = await Register.findOne({ phone: phone });
        if (savedPhone) {
            res.send("This phone number already exist....");
        } else if (savedEmail) {
            res.send("email already exist....");
        } else if (!city) {
            res.send("City is required");

        } else {


            const regisered = await registerUser.save();
            res.status(201).render("home");
        }
    } catch (e) {
        res.status(400).send(e);
    }
})


app.listen(port, () => {
    console.log(`server is running at port number ${port}`);
})