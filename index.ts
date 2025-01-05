import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // // Create users
    // const user = await prisma.user.create({
    //     data: {
    //         name: "John Doe",
    //         email: "john@gmail.com",
    //     }
    // })

    // Get all users
    // const users = await prisma.user.findMany();

    // Create an article and associate it with user
    // const article = await prisma.article.create({
    //     data: {
    //         title: "John's first article",
    //         body: "This is John's first article",
    //         author: {
    //             connect: {
    //                 id: 1
    //             }
    //         }
    //     }
    // })

    
    // Get all articles
    const articles = await prisma.user.findMany();
    console.log(articles);
}


// Run main and do error handling
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })