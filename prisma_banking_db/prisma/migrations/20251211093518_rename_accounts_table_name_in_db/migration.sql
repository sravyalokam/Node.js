-- AlterTable
ALTER TABLE "accounts_new" RENAME CONSTRAINT "accounts_pkey" TO "accounts_new_pkey";

-- RenameForeignKey
ALTER TABLE "accounts_new" RENAME CONSTRAINT "accounts_branch_id_fkey" TO "accounts_new_branch_id_fkey";

-- RenameForeignKey
ALTER TABLE "accounts_new" RENAME CONSTRAINT "accounts_customer_id_fkey" TO "accounts_new_customer_id_fkey";
