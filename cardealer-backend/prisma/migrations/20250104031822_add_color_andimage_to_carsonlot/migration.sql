/*
  Warnings:

  - Added the required column `color` to the `CarsOnLot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `CarsOnLot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarsOnLot" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;
