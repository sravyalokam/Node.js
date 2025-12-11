/*
  Warnings:

  - You are about to drop the `employees1` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "employees1";

-- CreateTable
CREATE TABLE "employees2" (
    "id" SERIAL NOT NULL,
    "name1" TEXT NOT NULL,

    CONSTRAINT "employees2_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employees2_name1_key" ON "employees2"("name1");
