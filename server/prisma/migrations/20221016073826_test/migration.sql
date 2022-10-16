/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[location]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `restaurantName` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Transaction` ADD COLUMN `restaurantName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Restaurant_name_key` ON `Restaurant`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Restaurant_location_key` ON `Restaurant`(`location`);

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_restaurantName_fkey` FOREIGN KEY (`restaurantName`) REFERENCES `Restaurant`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
