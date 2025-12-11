/*
  Warnings:

  - You are about to drop the `accounts_new` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `branches_new` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `customers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employees2` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `loan_payments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `loans` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `transactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "accounts_new" DROP CONSTRAINT "accounts_new_branch_id_fkey";

-- DropForeignKey
ALTER TABLE "accounts_new" DROP CONSTRAINT "accounts_new_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "loan_payments" DROP CONSTRAINT "loan_payments_loan_id_fkey";

-- DropForeignKey
ALTER TABLE "loans" DROP CONSTRAINT "loans_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_account_id_fkey";

-- DropTable
DROP TABLE "accounts_new";

-- DropTable
DROP TABLE "branches_new";

-- DropTable
DROP TABLE "customers";

-- DropTable
DROP TABLE "employees2";

-- DropTable
DROP TABLE "loan_payments";

-- DropTable
DROP TABLE "loans";

-- DropTable
DROP TABLE "transactions";

-- CreateTable
CREATE TABLE "customer_schema.customers" (
    "customer_id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,

    CONSTRAINT "customer_schema.customers_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "branch_schema.branches_new" (
    "branch_id" SERIAL NOT NULL,
    "branch_name" TEXT,
    "city" TEXT,

    CONSTRAINT "branch_schema.branches_new_pkey" PRIMARY KEY ("branch_id")
);

-- CreateTable
CREATE TABLE "account_schema.accounts_new" (
    "account_id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "account_type" TEXT,
    "balance" DECIMAL(65,30) NOT NULL DEFAULT 0.00,

    CONSTRAINT "account_schema.accounts_new_pkey" PRIMARY KEY ("account_id")
);

-- CreateTable
CREATE TABLE "transaction_schema.transactions" (
    "transaction_id" SERIAL NOT NULL,
    "account_id" INTEGER NOT NULL,
    "amount" DECIMAL(65,30),
    "transaction_type" TEXT,
    "transaction_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transaction_schema.transactions_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateTable
CREATE TABLE "loan_schema.loans" (
    "loan_id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "loan_type" TEXT,
    "amount" DECIMAL(65,30),
    "interest_rate" DECIMAL(65,30),

    CONSTRAINT "loan_schema.loans_pkey" PRIMARY KEY ("loan_id")
);

-- CreateTable
CREATE TABLE "loan_payment_schema.loan_payments" (
    "payment_id" SERIAL NOT NULL,
    "loan_id" INTEGER NOT NULL,
    "amount" DECIMAL(65,30),
    "payment_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "loan_payment_schema.loan_payments_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "employee_schema.employees2" (
    "id" SERIAL NOT NULL,
    "name1" TEXT NOT NULL,

    CONSTRAINT "employee_schema.employees2_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_schema.employees2_name1_key" ON "employee_schema.employees2"("name1");

-- AddForeignKey
ALTER TABLE "account_schema.accounts_new" ADD CONSTRAINT "account_schema.accounts_new_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer_schema.customers"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_schema.accounts_new" ADD CONSTRAINT "account_schema.accounts_new_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "branch_schema.branches_new"("branch_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_schema.transactions" ADD CONSTRAINT "transaction_schema.transactions_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "account_schema.accounts_new"("account_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loan_schema.loans" ADD CONSTRAINT "loan_schema.loans_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer_schema.customers"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loan_payment_schema.loan_payments" ADD CONSTRAINT "loan_payment_schema.loan_payments_loan_id_fkey" FOREIGN KEY ("loan_id") REFERENCES "loan_schema.loans"("loan_id") ON DELETE RESTRICT ON UPDATE CASCADE;
