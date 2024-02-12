-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "position" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "fulltime" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "duties" TEXT NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
