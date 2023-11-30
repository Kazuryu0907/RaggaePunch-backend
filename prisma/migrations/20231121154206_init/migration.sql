/*
  Warnings:

  - You are about to drop the column `content` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `task` table. All the data in the column will be lost.
  - Added the required column `adults` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `childrens` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "task" DROP COLUMN "content",
DROP COLUMN "title",
ADD COLUMN     "adults" INTEGER NOT NULL,
ADD COLUMN     "checked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "childrens" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "time" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
