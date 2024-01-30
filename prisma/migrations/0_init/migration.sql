-- CreateTable
CREATE TABLE "public"."Guest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "instansi" TEXT NOT NULL,
    "ingroup" INTEGER NOT NULL,
    "visitors" INTEGER NOT NULL,
    "purpose" TEXT NOT NULL,
    "to_meet" TEXT NOT NULL,
    "scheduled" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

