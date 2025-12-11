/*
  Warnings:

  - You are about to drop the `employees` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "employees";

-- CreateTable
CREATE TABLE "employees1" (
    "id" SERIAL NOT NULL,
    "name1" TEXT NOT NULL,

    CONSTRAINT "employees1_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employees1_name1_key" ON "employees1"("name1");
