-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nip" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gedung" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
