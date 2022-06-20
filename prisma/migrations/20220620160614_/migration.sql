/*
  Warnings:

  - The values [HEAD_ADMIN,BRANCH_ADMIN] on the enum `UserType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `branchOfficeId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `headOfficeId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `BranchOffice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HeadOffice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserType_new" AS ENUM ('USER', 'MASTER', 'ADMIN');
ALTER TABLE "User" ALTER COLUMN "userType" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "userType" TYPE "UserType_new" USING ("userType"::text::"UserType_new");
ALTER TYPE "UserType" RENAME TO "UserType_old";
ALTER TYPE "UserType_new" RENAME TO "UserType";
DROP TYPE "UserType_old";
ALTER TABLE "User" ALTER COLUMN "userType" SET DEFAULT 'USER';
COMMIT;

-- DropForeignKey
ALTER TABLE "BranchOffice" DROP CONSTRAINT "BranchOffice_headOfficeId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_branchOfficeId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_branchOfficeId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_headOfficeId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "branchOfficeId",
DROP COLUMN "headOfficeId";

-- DropTable
DROP TABLE "BranchOffice";

-- DropTable
DROP TABLE "HeadOffice";

-- DropTable
DROP TABLE "Payment";

-- DropEnum
DROP TYPE "PaymentStatus";

-- CreateTable
CREATE TABLE "Faq" (
    "id" TEXT NOT NULL,
    "question" TEXT,
    "answer" TEXT,
    "category" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notice" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "body" TEXT,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notice_pkey" PRIMARY KEY ("id")
);
