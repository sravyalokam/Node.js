/*
  Warnings:

  - You are about to drop the column `name` on the `employees` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name1]` on the table `employees` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name1` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employees" DROP COLUMN "name",
ADD COLUMN     "name1" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "employees_name1_key" ON "employees"("name1");
