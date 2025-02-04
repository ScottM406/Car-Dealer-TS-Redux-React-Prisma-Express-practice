/*
  Warnings:

  - You are about to drop the column `image` on the `CarsOnLot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CarsOnLot" DROP COLUMN "image",
ADD COLUMN     "images" TEXT[];
