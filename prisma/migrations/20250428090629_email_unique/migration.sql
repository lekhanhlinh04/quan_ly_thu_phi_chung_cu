/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Resident` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Resident` ADD COLUMN `refreshToken` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Resident_email_key` ON `Resident`(`email`);
