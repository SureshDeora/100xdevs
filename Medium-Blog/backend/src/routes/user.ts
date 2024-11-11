import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL : string;
        JWT_SECRET : string;
    }
}>();

userRouter.post("/signup", async (c) => {
    const prisma = new PrismaClient({
      // if we want to ignore nextline for type check in ts file we use " // @ts-ignore "before the line via comment
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json(); // getting body in hono
  
    // user sign up and gets user id after user inserted into db
    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          name: body.name,
        },
      });
      
      // console.log(user);
      // after sign in we provide user JWT token for authorization
      const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    
      return c.json({
        jwt: token,
      });
       
    } catch (error) {
      c.status(403);
      console.log(error);
      return c.text('User already exists with this username');
    }
  });
  
  
  userRouter.post("/signin", async(c) => {
    // again initialize the prisma
   const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
   }).$extends(withAccelerate()); // prisma's accelerate extension
  //  get back the body
   const body = await c.req.json();
  //  matching if a user exist or not 
  try {
    const user = await prisma.user.findFirst({
     where: {
       email: body.email,
       password: body.password,
     }
    });
    // checking if user is not exist then return with error
    if(!user) {
     c.status(403);
     return c.json({ error: "Incorrect cred"});
    }
    // otherwise we return the jwt token to the user
    const jwt = await sign({id: user.id}, c.env.JWT_SECRET);
    return c.json({jwt})
    
  } catch (error) {
    c.status(411);
    c.text("Invalid")
  }
  });
  