-- AlterTable
ALTER TABLE "CarsOnLot" ADD COLUMN     "makeName" TEXT;

-- AddForeignKey
ALTER TABLE "CarsOnLot" ADD CONSTRAINT "CarsOnLot_makeName_fkey" FOREIGN KEY ("makeName") REFERENCES "Make"("name") ON DELETE SET NULL ON UPDATE CASCADE;
