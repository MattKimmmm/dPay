import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var allowedOrigins = ["http://localhost:19000", "http://localhost:19006"];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.post("/registration", cors(), async (req, res) => {
  const { username, password, email, deviceId } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        username: username,
        password: password,
        email: email,
        deviceId: deviceId,
        // deviceID: deviceID
      },
    });
    return res.json(user);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login", cors(), async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        username_password: {
          username: username,
          password: password,
        },
      },
    });
    
    if (user == null) {
      return res.status(500).json({ error: "Invalid username or password" });
    }
    return res.json(user);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// getTransactions
app.post("/transactiong", cors(), async (req, res) => {
  const { id } = req.body;
  console.log('index.js'+id);
  try {
    const transaction = await prisma.transaction.findMany({
      where: { 
        id: id
      },
    });
    
    console.log(transaction);
    return res.json(transaction);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// create a new transaction
app.post("/transactionc", cors(), async (req, res) => {
  const { amount, tf, shop, selectedPeople } = req.body;
  try {
    const transaction = await prisma.transaction.create({
      data: {
        amount: amount,
        remainder: amount,
        isCompleted: tf,
        name: shop,
        restaurantName:shop.name,
        people: selectedPeople
      },
    });

    console.log(transaction);
    return res.json(transaction);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Internal server error" });
  }
});



// amount, tf, shop, selectedPeople

app.get("/users", cors(), async (req, res) => {
  res.json("hello");
});

app.get("/nearme", cors(), async (req, res) => {
  try { 
    const users = await prisma.user.findMany();

    return res.json(users);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Internal server error" });
  }
});

const server = app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

