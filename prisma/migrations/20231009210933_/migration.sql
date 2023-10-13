/*
  Warnings:

  - Made the column `email` on table `Rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `Rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userName` on table `Rating` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Rating" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "userName" SET NOT NULL;
