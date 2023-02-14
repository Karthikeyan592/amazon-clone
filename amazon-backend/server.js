const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51MZfL1SFs4aiNAvZUtgIMq8YN0JvjBJ0MYZKex6z01MAUVJ0cmAcdjGk4mzyeRQtD76r7ryiY7twdyGxu7fZhcrl00uTf47Q9Y"
);
const mongoose = require("mongoose");
const Products = require("./Products");


const app = express();
const port = 8000;

//middlewares
app.use(express.json());
app.use(cors());

//connectionurl

const connection_url = "mongodb+srv://kartraco:AdmiN123@cluster0.6dnlkid.mongodb.net/cluster0?retryWrites=true&w=majority"
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


// API


app.get("/", (req, res) => res.status(200).send("Welcome Pagee..."));

app.post("/products/add", (req,res) => {
    const productDetail = req.body;

    console.log("Product Detail >>>>", productDetail);

    Products.create(productDetail, (err, data) => {
        if (err) {
          res.status(500).send(err.message);
          console.log(err);
        } else {
          res.status(201).send(data);
        }
      });
})

app.get("/products/get", (req, res) => {
    Products.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });
  
app.post("/payment/create", async (req, res) => {
    const total = req.body.amount;
    console.log("Payment Request recieved for this ruppess", total);

    const payment = await stripe.paymentIntents.create({
        amount: total * 100,
        currency: "inr",
    });
    res.status(201).send({
        clientSecret: payment.client_secret,
    });
}); 
  //API FOR PAYMENT



app.listen(port , ()=> console.log("listening on port",port));

// API




