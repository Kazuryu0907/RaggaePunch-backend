/*
  Warnings:

  - The primary key for the `time` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "time" DROP CONSTRAINT "time_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "time_pkey" PRIMARY KEY ("id");
