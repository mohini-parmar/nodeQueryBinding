const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require("./routers")
const app = express();
var CORSOptions = {
    origin: "http://localhost:3000"
}

app.use(bodyParser.json());
app.use(cors(CORSOptions));
app.use(
    bodyParser.urlencoded({
        extended : true
    })
)
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

app.use('/api',userRoute);

const port = 3000;
app.listen(port, ()=>{
    console.log(`App running on port ${port}.`);
})