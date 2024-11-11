import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";

//Way to get environment variable in hono via generics
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  };
}>();

app.route('/api/v1/user', userRouter);
app.route('api/v1/blog', blogRouter);
// Middlewares
// app.use('/api/v1/blog/*', async (c, next) => {
//   // get the header
//   // verify the header
//   // if the header is correct, we can procced
//   // if not, we return the user a 403 status code
//   const header = c.req.header("authorization") || "";

//   // if we have bearer before a token then
//   // Bearer token => ["Bearer", "token"] 
  
//   // const token = header.split(" ")[1];

  
//   const response = await verify(header, c.env.JWT_SECRET)
//   // console.log(response)
//   if (response.id) {
//     next();
//   } else {
//     c.status(403)
//     return c.json({ error: "unauthorized"})
//   }
  
// })

// c = context [req, res, header , body etc..]





export default app;
