-- CreateTable
CREATE TABLE "ShowingRequest" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "desiredTime" TEXT NOT NULL,
    "actualTime" TEXT,
    "testDriveRequested" BOOLEAN NOT NULL,

    CONSTRAINT "ShowingRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShowingRequestCarsOnLot" (
    "showingRequestID" INTEGER NOT NULL,
    "carsOnLotID" INTEGER NOT NULL,

    CONSTRAINT "ShowingRequestCarsOnLot_pkey" PRIMARY KEY ("showingRequestID","carsOnLotID")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShowingRequestCarsOnLot_showingRequestID_key" ON "ShowingRequestCarsOnLot"("showingRequestID");

-- AddForeignKey
ALTER TABLE "ShowingRequestCarsOnLot" ADD CONSTRAINT "ShowingRequestCarsOnLot_showingRequestID_fkey" FOREIGN KEY ("showingRequestID") REFERENCES "ShowingRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowingRequestCarsOnLot" ADD CONSTRAINT "ShowingRequestCarsOnLot_carsOnLotID_fkey" FOREIGN KEY ("carsOnLotID") REFERENCES "CarsOnLot"("id") ON DELETE CASCADE ON UPDATE CASCADE;
