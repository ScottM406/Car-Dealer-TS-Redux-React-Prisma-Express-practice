/*
  Warnings:

  - You are about to drop the column `factoryIncentive` on the `Model` table. All the data in the column will be lost.
  - Added the required column `isSuperUser` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Model" DROP COLUMN "factoryIncentive";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isSuperUser" BOOLEAN NOT NULL;
