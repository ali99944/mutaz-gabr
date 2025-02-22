import Dao from "@/lib/prisma";


async function main() {
  await Dao.instance.manager.create({
    data: {
      email: "moataz@gmail.com",
      password: "moataz",
      role: "admin",
      name: "Moataz",
      created_at: (new Date()).toISOString(),
    },
  });

  await Dao.instance.achievement.createMany({
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
    await Dao.instance.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await Dao.instance.$disconnect();
    process.exit(1);
  });
