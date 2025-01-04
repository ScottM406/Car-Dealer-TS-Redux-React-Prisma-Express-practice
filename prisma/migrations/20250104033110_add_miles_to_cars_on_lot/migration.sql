/*
  Warnings:

  - Added the required column `miles` to the `CarsOnLot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarsOnLot" ADD COLUMN     "miles" INTEGER NOT NULL;
