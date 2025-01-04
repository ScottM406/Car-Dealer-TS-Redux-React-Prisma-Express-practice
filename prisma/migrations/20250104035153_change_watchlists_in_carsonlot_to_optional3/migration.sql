-- DropForeignKey
ALTER TABLE "CarsOnLot" DROP CONSTRAINT "CarsOnLot_userId_fkey";

-- AlterTable
ALTER TABLE "CarsOnLot" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "CarsOnLot" ADD CONSTRAINT "CarsOnLot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
