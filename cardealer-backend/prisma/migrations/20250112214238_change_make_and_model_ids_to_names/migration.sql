/*
  Warnings:

  - You are about to drop the column `modelId` on the `CarsOnLot` table. All the data in the column will be lost.
  - The primary key for the `Make` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Model` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `makeId` on the `Model` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CarsOnLot" DROP CONSTRAINT "CarsOnLot_modelId_fkey";

-- DropForeignKey
ALTER TABLE "Model" DROP CONSTRAINT "Model_makeId_fkey";

-- AlterTable
ALTER TABLE "CarsOnLot" DROP COLUMN "modelId",
ADD COLUMN     "modelName" TEXT;

-- AlterTable
ALTER TABLE "Make" DROP CONSTRAINT "Make_pkey",
ADD CONSTRAINT "Make_pkey" PRIMARY KEY ("name");

-- AlterTable
ALTER TABLE "Model" DROP CONSTRAINT "Model_pkey",
DROP COLUMN "makeId",
ADD COLUMN     "makeName" TEXT,
ADD CONSTRAINT "Model_pkey" PRIMARY KEY ("name");

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_makeName_fkey" FOREIGN KEY ("makeName") REFERENCES "Make"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarsOnLot" ADD CONSTRAINT "CarsOnLot_modelName_fkey" FOREIGN KEY ("modelName") REFERENCES "Model"("name") ON DELETE SET NULL ON UPDATE CASCADE;
