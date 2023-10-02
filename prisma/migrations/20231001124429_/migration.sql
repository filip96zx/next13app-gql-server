/*
  Warnings:

  - You are about to drop the column `value` on the `Variant` table. All the data in the column will be lost.
  - Added the required column `variantName` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "variantName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Variant" DROP COLUMN "value";
