/*
  Warnings:

  - You are about to drop the `Job` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Job";

-- CreateTable
CREATE TABLE "Jobs" (
    "id" SERIAL NOT NULL,
    "position" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "fulltime" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "duties" TEXT NOT NULL,
    "company" TEXT NOT NULL DEFAULT 'awesome company',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);
