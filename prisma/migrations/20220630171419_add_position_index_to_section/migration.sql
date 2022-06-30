-- DropIndex
DROP INDEX "Section_templateId_idx";

-- CreateIndex
CREATE INDEX "Section_templateId_position_idx" ON "Section"("templateId", "position");
