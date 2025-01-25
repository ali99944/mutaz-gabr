/*
  Warnings:

  - You are about to drop the column `joined_at` on the `Client` table. All the data in the column will be lost.
  - Added the required column `message` to the `ContactMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sent_at` to the `ContactMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "joined_at";

-- AlterTable
ALTER TABLE "ContactMessage" ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "sent_at" TEXT NOT NULL;
