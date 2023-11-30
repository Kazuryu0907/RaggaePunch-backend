/*
  Warnings:

  - You are about to drop the `task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "task";

-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "childrens" INTEGER NOT NULL,
    "adults" INTEGER NOT NULL,
    "checked" BOOLEAN NOT NULL DEFAULT false,
    "time" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);
