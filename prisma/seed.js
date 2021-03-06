const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const prisma = new PrismaClient();

const faqCategories = ["general", "template", "operation", "etc"];

async function createFaqs() {
  [...Array(20)].map(async (x, i) => {
    const faqData = {
      category: faqCategories[Math.floor(Math.random() * faqCategories.length)],
      question: faker.lorem.sentence(),
      answer: faker.lorem.sentences(3),
    };
    const result = await prisma.faq.create({ data: faqData });
  });
}

async function createNotices() {
  [...Array(20)].map(async (x, i) => {
    const notice = await prisma.notice.create({
      data: {
        title: faker.lorem.sentence(),
        body: faker.lorem.sentences(3),
      },
    });
  });
}

async function main() {
  await createNotices();
  await createFaqs();
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
