/*
  Warnings:

  - Added the required column `year` to the `CarsOnLot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarsOnLot" ADD COLUMN     "year" INTEGER NOT NULL;
