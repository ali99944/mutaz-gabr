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

  await prisma.achievement.createMany({
    data: [
      {
        name: "First Achievement",
        value: "First Achievement",
      },
      {
        name: "Second Achievement",
        value: "Second Achievement",
      },
      {
        name: "Third Achievement",
        value: "Third Achievement",
      },
      {
        name: "Fourth Achievement",
        value: "Fourth Achievement",
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
