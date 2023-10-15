/*
  Warnings:

  - Made the column `imageId` on table `Category` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_imageId_fkey";

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "imageId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "ratingsCount" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
