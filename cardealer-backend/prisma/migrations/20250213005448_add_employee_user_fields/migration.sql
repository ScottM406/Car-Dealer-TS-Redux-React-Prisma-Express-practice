/*
  Warnings:

  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShowingRequest" ADD COLUMN     "userID" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "employeeAddress" TEXT,
ADD COLUMN     "employeeHireDate" INTEGER,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "isEmployee" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" INTEGER;

-- AddForeignKey
ALTER TABLE "ShowingRequest" ADD CONSTRAINT "ShowingRequest_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
