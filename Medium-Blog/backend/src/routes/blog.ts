import {  PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    // c.set variable's types need to be assigned here
    Variables: {
        userId: string;
    }
}>();

//before any user go to these routes we will authenticate user via middleware

blogRouter.use('/*', async (c, next) => {
    // to get the jwt token extract user and pass it to any route we will use (c) context 
    // it has set and get properties 
    // first extract the token from header
    const authHeader = c.req.header("authorization") || "";
    //now verify it and get the user details
    const user = await verify(authHeader, c.env.JWT_SECRET);
    try {
        
        if (user) {
            c.set("userId", user.id)
           await next();
        } else {
            c.status(403);
            return c.json({
                message: "You're not logged in"
            })
        }
    } catch (error) {
        c.status(403);
        return c.json({
            message: "You're not authorized"
        })
    }
    //if the user exist then set the value to variable and pass it 
})

// Creating a blog post
blogRouter.post("/", async (c) => {
    // getting header/body
    const body = await c.req.json();
    const authorId =  c.get("userId"); 
    // console.log(authorId);
    //  initialize prisma
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,

    }).$extends(withAccelerate());
    //creating a blog 
    
    // console.log(prisma);
    
   const blog = await prisma.blog.create({
    data: {
        title: body.title,
        content: body.content,
        authorId: authorId
    }
   })
    
    return c.json({
        id: blog.id,
    })
});

// updating blog post
blogRouter.put("/", async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());


    const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })

    return c.json({
        id: blog.id
    })
});

// showing all the blogs , we can add pagination to show few blogs on the page
blogRouter.get('/bulk', async (c) => {
   
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const blog = await prisma.blog.findMany({})
    return c.json(blog);
})

// user fetching blog post
blogRouter.get("/:id", async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {

        const blog = await prisma.blog.findUnique({
            where: {
                id: id,
            },

        })
        return c.json({
            blog
        })
    } catch (error) {
        c.status(411);
        c.json({
            message: "Error while fetching blog post"
        });
    }
    
    
});