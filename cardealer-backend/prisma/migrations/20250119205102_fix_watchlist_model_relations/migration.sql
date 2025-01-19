/*
  Warnings:

  - You are about to drop the column `userId` on the `CarsOnLot` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CarsOnLot" DROP CONSTRAINT "CarsOnLot_userId_fkey";

-- AlterTable
ALTER TABLE "CarsOnLot" DROP COLUMN "userId",
ADD COLUMN     "watchlistID" INTEGER;

-- CreateTable
CREATE TABLE "Watchlist" (
    "id" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "Watchlist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Watchlist_userID_key" ON "Watchlist"("userID");

-- AddForeignKey
ALTER TABLE "Watchlist" ADD CONSTRAINT "Watchlist_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarsOnLot" ADD CONSTRAINT "CarsOnLot_watchlistID_fkey" FOREIGN KEY ("watchlistID") REFERENCES "Watchlist"("id") ON DELETE SET NULL ON UPDATE CASCADE;
