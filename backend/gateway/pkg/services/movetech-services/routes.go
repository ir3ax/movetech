package movetechAdmin

import (
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

func RegisterRoutes(r *gin.Engine, vi *viper.Viper) *MoveTechAdminProtoService {
	svc := &MoveTechAdminProtoService{InitMoveTechAdminService(vi)}

	// movetechAdmin := r.Group("/admin")

	// pdfExtractor.POST("", gin.Bind(binding.CreatePdfExtractorRequest{}), svc.SavePdfFile)
	// pdfExtractor.GET("/:csvStatus", svc.GetPDFDataByStatus)
	// pdfExtractor.PUT("/edit", gin.Bind(binding.UpdateSaveFileByIDRequest{}), svc.UpdateSaveFileByID)
	// pdfExtractor.PUT("/edit-status", gin.Bind(binding.UpdateSaveFileStatusRequest{}), svc.UpdateSaveFileStatus)
	// pdfExtractor.POST("/history", gin.Bind(binding.ChangeHistoryRequest{}), svc.SaveChangeHistory)
	// pdfExtractor.GET("/history/:csvFilesId", svc.GetChangeHistory)
	// pdfExtractor.PUT("/history-edit", gin.Bind(binding.UpdateChangeHistoryByIDRequest{}), svc.UpdateChangeHistoryByID)
	return svc
}

// func (svc *PDFExtractorProtoServiceClient) SavePdfFile(c *gin.Context) {
// 	api.SavePdfFile(c, svc.PDFExtractorProtoServiceClient)
// }

// func (svc *PDFExtractorProtoServiceClient) GetPDFDataByStatus(c *gin.Context) {
// 	api.GetPDFDataByStatus(c, svc.PDFExtractorProtoServiceClient)
// }

// func (svc *PDFExtractorProtoServiceClient) UpdateSaveFileByID(c *gin.Context) {
// 	api.UpdateSaveFileByID(c, svc.PDFExtractorProtoServiceClient)
// }

// func (svc *PDFExtractorProtoServiceClient) UpdateSaveFileStatus(c *gin.Context) {
// 	api.UpdateSaveFileStatus(c, svc.PDFExtractorProtoServiceClient)
// }

// func (svc *PDFExtractorProtoServiceClient) SaveChangeHistory(c *gin.Context) {
// 	api.SaveChangeHistory(c, svc.PDFExtractorProtoServiceClient)
// }

// func (svc *PDFExtractorProtoServiceClient) GetChangeHistory(c *gin.Context) {
// 	api.GetChangeHistory(c, svc.PDFExtractorProtoServiceClient)
// }

// func (svc *PDFExtractorProtoServiceClient) UpdateChangeHistoryByID(c *gin.Context) {
// 	api.UpdateChangeHistoryByID(c, svc.PDFExtractorProtoServiceClient)
// }
