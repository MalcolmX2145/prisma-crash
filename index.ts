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
    const users = await prisma.user.findMany({
        include: {
            articles: true
        }
    });
    // console.log(users)

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

    // Create another article
        // const article = await prisma.article.create({
        //     data: {
        //         title: "Sample Article",
        //         body: "This is a sample article",
        //         author: {
        //             connect : {
        //                 id: 2,
        //             }
        //         }
        //     }
        // })

        // Create another article
        // const article = await prisma.article.create({
        //     data: {
        //         title: "Lewis Mercedes Article",
        //         body: "This is a AMG Petronas article",
        //         author: {
        //             connect : {
        //                 id: 2,
        //             }
        //         }
        //     }
        // })
    
    // Get all articles
    const articles = await prisma.article.findMany();
    console.log(articles);


    // Loop over Lewis articles
    // users.forEach((user) => {
    //     console.log(`User: ${user.name}, Email: ${user.email}`);
    //     console.log("Articles:");
    //     user.articles.forEach((article) => {
    //         console.log(`- Title: ${article.title}, Body: ${article.body}`)
    //     })
    //     console.log("\n");
    // })

    // Update data
    // const user = await prisma.user.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         name: "Charles Leclerc",
    //         email: "leclerc@gmail.com"
    //     }
    // })
    // console.log(user);

    // const article = await prisma.article.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         title: "Leclerc's first article",
    //         body: "This is Leclerc's first article"
    //     }
    // });
    // console.log(article);

    // Remove data
    // const article = await prisma.article.delete({
    //     where: {
    //         id: 2
    //     }
    // });
     
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
