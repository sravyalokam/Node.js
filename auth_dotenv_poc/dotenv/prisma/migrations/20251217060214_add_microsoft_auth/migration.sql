-- CreateTable
CREATE TABLE "microsoftUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "microsoftId" TEXT,
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "microsoftUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "microsoftUser_email_key" ON "microsoftUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "microsoftUser_microsoftId_key" ON "microsoftUser"("microsoftId");
