import pkg from '@prisma/client';
const { PrismaClient } = pkg;

// Pass an empty object {} to satisfy Prisma 7
const prisma = new PrismaClient({});

async function main() {
  const newUser = await prisma.user.create({
    data: { name: "Alice", email: "alice@example.com" },
  });
  console.log("Created user:", newUser);

  const users = await prisma.user.findMany();
  console.log("All users:", users);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
