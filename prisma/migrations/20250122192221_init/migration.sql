-- CreateEnum
CREATE TYPE "ConsultationStatus" AS ENUM ('closed', 'pending');

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "joined_at" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactMessage" (
    "id" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,

    CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceImage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "is_main_image" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TEXT NOT NULL,
    "service_id" INTEGER NOT NULL,

    CONSTRAINT "ServiceImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceWorkingStep" (
    "id" SERIAL NOT NULL,
    "service_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ServiceWorkingStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceFeature" (
    "id" SERIAL NOT NULL,
    "service_id" INTEGER NOT NULL,

    CONSTRAINT "ServiceFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceRate" (
    "id" SERIAL NOT NULL,
    "service_id" INTEGER NOT NULL,
    "client_id" INTEGER NOT NULL,

    CONSTRAINT "ServiceRate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectSpecification" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "ProjectSpecification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectImage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "is_main_image" BOOLEAN NOT NULL DEFAULT false,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "ProjectImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectDesignModel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ProjectDesignModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectExecutionSteps" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "ProjectExecutionSteps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientProjectRate" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "ClientProjectRate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "execution_date" TEXT NOT NULL,
    "execution_duration" INTEGER NOT NULL,
    "space_in_m2" INTEGER NOT NULL,
    "design_model_id" INTEGER NOT NULL,
    "client_project_rate_id" INTEGER,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gallery" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FreeConsultation" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "status" "ConsultationStatus" NOT NULL DEFAULT 'pending',
    "requested_at" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "FreeConsultation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectToProjectSpecification" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjectToProjectSpecification_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_client_project_rate_id_key" ON "Project"("client_project_rate_id");

-- CreateIndex
CREATE INDEX "_ProjectToProjectSpecification_B_index" ON "_ProjectToProjectSpecification"("B");

-- AddForeignKey
ALTER TABLE "ContactMessage" ADD CONSTRAINT "ContactMessage_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceImage" ADD CONSTRAINT "ServiceImage_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceWorkingStep" ADD CONSTRAINT "ServiceWorkingStep_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceFeature" ADD CONSTRAINT "ServiceFeature_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceRate" ADD CONSTRAINT "ServiceRate_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceRate" ADD CONSTRAINT "ServiceRate_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectImage" ADD CONSTRAINT "ProjectImage_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectExecutionSteps" ADD CONSTRAINT "ProjectExecutionSteps_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_design_model_id_fkey" FOREIGN KEY ("design_model_id") REFERENCES "ProjectDesignModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_client_project_rate_id_fkey" FOREIGN KEY ("client_project_rate_id") REFERENCES "ClientProjectRate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FreeConsultation" ADD CONSTRAINT "FreeConsultation_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToProjectSpecification" ADD CONSTRAINT "_ProjectToProjectSpecification_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToProjectSpecification" ADD CONSTRAINT "_ProjectToProjectSpecification_B_fkey" FOREIGN KEY ("B") REFERENCES "ProjectSpecification"("id") ON DELETE CASCADE ON UPDATE CASCADE;
