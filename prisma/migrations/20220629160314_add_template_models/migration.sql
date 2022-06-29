-- CreateTable
CREATE TABLE "Template" (
    "id" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL,
    "classNames" TEXT,
    "templateId" TEXT,
    "position" INTEGER NOT NULL,
    "bgImage" TEXT,
    "image" TEXT,
    "imageClassNames" TEXT,
    "buttonDivClassNames" TEXT,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Button" (
    "id" TEXT NOT NULL,
    "sectionId" TEXT,
    "classNames" TEXT,
    "text" TEXT,

    CONSTRAINT "Button_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Input" (
    "id" TEXT NOT NULL,
    "label" TEXT,
    "type" TEXT,
    "classNames" TEXT,
    "sectionId" TEXT,

    CONSTRAINT "Input_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TextBox" (
    "id" TEXT NOT NULL,
    "sectionId" TEXT,
    "classNames" TEXT,
    "title" TEXT,
    "titleClassNames" TEXT,
    "content" TEXT,
    "contentClassNames" TEXT,
    "image" TEXT,
    "imageClassNames" TEXT,
    "icon" TEXT,
    "iconClassNames" TEXT,

    CONSTRAINT "TextBox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Section_templateId_idx" ON "Section"("templateId");

-- CreateIndex
CREATE INDEX "Button_sectionId_idx" ON "Button"("sectionId");

-- CreateIndex
CREATE INDEX "Input_sectionId_idx" ON "Input"("sectionId");

-- CreateIndex
CREATE INDEX "TextBox_sectionId_idx" ON "TextBox"("sectionId");

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Button" ADD CONSTRAINT "Button_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Input" ADD CONSTRAINT "Input_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TextBox" ADD CONSTRAINT "TextBox_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE SET NULL ON UPDATE CASCADE;
