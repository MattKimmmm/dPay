import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from "cors"
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const prisma = new PrismaClient()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
  "",
  createProxyMiddleware({
    target: "http://localhost:16009/", //original url
    changeOrigin: true,
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers["Access-Control-Allow-Origin"] = "*";
    },
  })
);
app.post('/registration', async (req, res) => {
    
    const { username, password, email } = req.body;
    const user = await prisma.user.create({
        data: {
            username: username,
            password: password,
            email: email,
            // deviceID: deviceID
        }
    });

    // console.log(req.body);  
    // res.status(201).send('created user');
    res.json(user);
})

app.get('/users', async (req, res) => {
    res.json("hello");
})

const server = app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
});