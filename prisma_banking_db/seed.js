import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding Database...\n");

  // ============================
  // 1️⃣ Seed Branches (10)
  // ============================
  console.log("➡ Seeding branches...");
  for (let i = 1; i <= 10; i++) {
    await prisma.branches.create({
      data: {
        branch_name: `Branch ${i}`,
        city: `City ${i}`,
      },
    });
  }

  // ============================
  // 2️⃣ Seed Customers (200)
  // ============================
  console.log("➡ Seeding customers...");
  for (let i = 1; i <= 200; i++) {
    await prisma.customers.create({
      data: {
        name: `Customer ${i}`,
        email: `customer${i}@gmail.com`,
        phone: `99999000${i % 100}`,
      },
    });
  }

  // ============================
  // 3️⃣ Seed Accounts (each customer gets 1)
  // ============================
  console.log("➡ Seeding accounts...");

  for (let i = 1; i <= 200; i++) {
    await prisma.accounts.create({
      data: {
        customer_id: i,
        branch_id: (i % 10) + 1,
        account_type: i % 2 === 0 ? "Savings" : "Current",
        balance: parseFloat((Math.random() * 50000).toFixed(2)),
      },
    });
  }

  // ============================
  // 4️⃣ Seed Transactions (1000 random)
  // ============================
  console.log("➡ Seeding transactions...");

  for (let i = 1; i <= 1000; i++) {
    await prisma.transactions.create({
      data: {
        account_id: (i % 200) + 1,
        amount: parseFloat((Math.random() * 5000).toFixed(2)),
        transaction_type: i % 2 === 0 ? "Credit" : "Debit",
      },
    });
  }

  // ============================
  // 5️⃣ Seed Loans (100 loans)
  // ============================
  console.log("➡ Seeding loans...");

  for (let i = 1; i <= 100; i++) {
    await prisma.loans.create({
      data: {
        customer_id: (i % 200) + 1,
        loan_type: i % 2 === 0 ? "Home Loan" : "Car Loan",
        amount: parseFloat((Math.random() * 200000).toFixed(2)),
        interest_rate: parseFloat((Math.random() * 10).toFixed(2)),
      },
    });
  }

  // ============================
  // 6️⃣ Seed Loan Payments (200 random)
  // ============================
  console.log("➡ Seeding loan payments...");

  for (let i = 1; i <= 200; i++) {
    await prisma.loan_payments.create({
      data: {
        loan_id: (i % 100) + 1,
        amount: parseFloat((Math.random() * 5000).toFixed(2)),
      },
    });
  }

  // ============================
  // 7️⃣ Seed Employees (20)
  // ============================
  console.log("➡ Seeding employees...");

  for (let i = 1; i <= 20; i++) {
    await prisma.employees2.create({
      data: {
        name1: `Employee_${i}`,
      },
    });
  }

  console.log("\n🌱 Seeding Completed Successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
