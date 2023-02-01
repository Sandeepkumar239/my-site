const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/My_website_Data_Base", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true

}).then(() => {
    console.log("connection succusful...");
}).catch((e) => {

    console.log(`connection failed : ${e}`);

})