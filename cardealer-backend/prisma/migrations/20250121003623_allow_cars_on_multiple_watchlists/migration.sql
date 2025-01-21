/*
  Warnings:

  - You are about to drop the column `watchlistID` on the `CarsOnLot` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CarsOnLot" DROP CONSTRAINT "CarsOnLot_watchlistID_fkey";

-- AlterTable
ALTER TABLE "CarsOnLot" DROP COLUMN "watchlistID";

-- CreateTable
CREATE TABLE "WatchlistCarsOnLot" (
    "watchlistID" INTEGER NOT NULL,
    "carsOnLotID" INTEGER NOT NULL,

    CONSTRAINT "WatchlistCarsOnLot_pkey" PRIMARY KEY ("watchlistID","carsOnLotID")
);

-- AddForeignKey
ALTER TABLE "WatchlistCarsOnLot" ADD CONSTRAINT "WatchlistCarsOnLot_watchlistID_fkey" FOREIGN KEY ("watchlistID") REFERENCES "Watchlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchlistCarsOnLot" ADD CONSTRAINT "WatchlistCarsOnLot_carsOnLotID_fkey" FOREIGN KEY ("carsOnLotID") REFERENCES "CarsOnLot"("id") ON DELETE CASCADE ON UPDATE CASCADE;
