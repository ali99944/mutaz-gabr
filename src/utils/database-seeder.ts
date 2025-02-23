import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  await prisma.manager.create({
    data: {
      email: "moataz@gmail.com",
      password: "moataz",
      role: "admin",
      name: "Moataz",
      created_at: (new Date()).toISOString(),
    },
  });

  await prisma.achievment.createMany({
    data: [
      {
        id: 1,
        name: "First Achievement",
        value: "200",
      },
      {
        id: 2,
        name: "Second Achievement",
        value: "40",
      },
      {
        id: 3,
        name: "Third Achievement",
        value: "100",
      },
      {
        id: 4,
        name: "Fourth Achievement",
        value: "50",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
