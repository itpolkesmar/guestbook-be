/*
  Warnings:

  - You are about to drop the column `ingroup` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `visitors` on the `Guest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Guest" DROP COLUMN "ingroup",
DROP COLUMN "visitors";
