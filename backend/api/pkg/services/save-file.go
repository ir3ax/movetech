package services

import (
	"api/pkg/models"
	"api/pkg/pb"
	"context"
	"encoding/json"
	"log"

	"gorm.io/gorm"
)

type MoveTechAdminService struct {
	pb.UnimplementedMoveTechAdminProtoServiceServer
	DB *gorm.DB
}

func InitPDFExtractorService(db *gorm.DB) *MoveTechAdminService {
	return &MoveTechAdminService{DB: db}
}

func (s *MoveTechAdminService) SaveProduct(ctx context.Context, req *pb.SaveProductRequest) (*pb.SaveProductResponse, error) {
	// Decode the CSV file content from the request
	img, err := json.Marshal(req.Img)
	if err != nil {
		log.Printf("Error marshaling img: %v", err)
		return nil, err
	}

	descrip2, err := json.Marshal(req.Description2)
	if err != nil {
		log.Printf("Error marshaling descrip2: %v", err)
		return nil, err
	}

	productFreebies, err := json.Marshal(req.ProductFreebies)
	if err != nil {
		log.Printf("Error marshaling productFreebies: %v", err)
		return nil, err
	}

	// Create a new PDFExtractorData instance
	productData := models.ProductData{
		ImgName:          req.ImgName,
		Img:              json.RawMessage(img),
		Discount:         req.Discount,
		OriginalPrice:    req.OriginalPrice,
		DiscountedPrice:  req.DiscountedPrice,
		Description1:     req.Description1,
		Description2:     json.RawMessage(descrip2),
		OriginalQuantity: req.OriginalQuantity,
		CurrentQuantity:  req.CurrentQuantity,
		ProductStatus:    req.ProductStatus,
		ProductSold:      req.ProductSold,
		ProductFreebies:  json.RawMessage(productFreebies),
	}

	// Save the data to the database using GORM
	if err := s.DB.Create(&productData).Error; err != nil {
		log.Printf("Error saving PDF data: %v", err)
		return nil, err
	}

	// Create and return the response
	response := &pb.SaveProductResponse{
		ProductData: &pb.ProductData{
			ImgName:          productData.ImgName,
			Img:              string(productData.Img),
			Discount:         productData.Discount,
			OriginalPrice:    productData.OriginalPrice,
			DiscountedPrice:  productData.DiscountedPrice,
			Description1:     productData.Description1,
			Description2:     string(productData.Description2),
			OriginalQuantity: productData.OriginalQuantity,
			CurrentQuantity:  productData.CurrentQuantity,
			ProductStatus:    productData.ProductStatus,
			ProductSold:      productData.ProductSold,
			ProductFreebies:  string(productData.ProductFreebies),
			CreatedBy:        productData.CreatedBy.String(),
			CreatedAt:        productData.CreatedAt.Unix(),
			UpdatedBy:        productData.UpdatedBy.String(),
			UpdatedAt:        productData.UpdatedAt.Unix(),
		},
	}

	return response, nil
}

// func (s *MoveTechAdminService) GetPDFDataByStatus(ctx context.Context, request *pb.GetPDFDataByStatusRequest) (*pb.GetPDFDataByStatusResponse, error) {
// 	var pdfDataList []models.PDFExtractorData

// 	// Start building the query
// 	query := s.DB.Where("csv_status = ?", request.CsvStatus)

// 	if request.SearchQuery != "" {
// 		searchCondition := "csv_name LIKE ? OR csv_status LIKE ?"
// 		searchParam := "%" + request.SearchQuery + "%"
// 		query = query.Where(searchCondition, searchParam, searchParam)
// 	}

// 	// Apply sorting by CsvName (ascending/descending)
// 	if request.SortByCsvName {
// 		order := "asc"
// 		if request.SortDescCsvName {
// 			order = "desc"
// 		}
// 		query = query.Order("csv_name " + order)
// 	}

// 	// Apply sorting by CreatedAt (ascending/descending)
// 	if request.SortByCreatedAt {
// 		order := "asc"
// 		if request.SortDescCreatedAt {
// 			order = "desc"
// 		}
// 		query = query.Order("created_at " + order)
// 	}

// 	// Fetch PDFExtractorData based on the constructed query
// 	result := query.Find(&pdfDataList)
// 	if result.Error != nil {
// 		return nil, result.Error
// 	}

// 	// Convert the result to proto message
// 	var protoPdfDataList []*pb.PdfExtractorData
// 	for _, pdfData := range pdfDataList {
// 		protoPdfDataList = append(protoPdfDataList, &pb.PdfExtractorData{
// 			CsvFilesId:  pdfData.CsvFilesID.String(),
// 			CsvName:     pdfData.CsvName,
// 			CsvFileJson: string(pdfData.CsvFile),
// 			CsvPdfPath:  pdfData.CsvPdfPath,
// 			CsvStatus:   pdfData.CsvStatus,
// 			CreatedAt:   pdfData.CreatedAt.Unix(),
// 			// Add other fields as needed
// 		})
// 	}

// 	response := &pb.GetPDFDataByStatusResponse{
// 		PdfDataList: protoPdfDataList,
// 	}

// 	return response, nil
// }

// func (s *MoveTechAdminService) UpdateSaveFileByID(ctx context.Context, req *pb.UpdateSaveFileByIDRequest) (*pb.CreatePdfExtractorResponse, error) {
// 	var pdfExtractor models.PDFExtractorData

// 	if err := s.DB.Where("csv_files_id = ?", req.GetCsvFilesId()).First(&pdfExtractor).Error; err != nil {
// 		return nil, status.Errorf(codes.Internal, "failed to query database: %v", err)
// 	}

// 	// Update the CsvFileJson field
// 	pdfExtractor.CsvFile = json.RawMessage(req.GetCsvFileJson())

// 	copier.CopyWithOption(&pdfExtractor, req, copier.Option{IgnoreEmpty: true, DeepCopy: true})

// 	if err := s.DB.Save(&pdfExtractor).Error; err != nil {
// 		return nil, status.Errorf(codes.Internal, "failed to save to database: %v", err)
// 	}

// 	// Create and return the response
// 	response := &pb.CreatePdfExtractorResponse{
// 		PdfExtractorData: &pb.PdfExtractorData{
// 			CsvFilesId:  pdfExtractor.GetCsvFilesID().String(),
// 			CsvName:     pdfExtractor.GetCsvName(),
// 			CsvFileJson: string(pdfExtractor.GetCsvFile()),
// 			CsvPdfPath:  pdfExtractor.CsvPdfPath,
// 			CsvStatus:   pdfExtractor.GetCsvStatus(),
// 			CreatedBy:   pdfExtractor.GetCreatedBy().String(),
// 			CreatedAt:   pdfExtractor.GetCreatedAt().Unix(),
// 			UpdatedBy:   pdfExtractor.GetUpdatedBy().String(),
// 			UpdatedAt:   pdfExtractor.GetUpdatedAt().Unix(),
// 		},
// 	}

// 	return response, nil
// }

// func (s *MoveTechAdminService) UpdateSaveFileStatus(ctx context.Context, req *pb.UpdateSaveFileStatusRequest) (*pb.CreatePdfExtractorResponse, error) {
// 	var pdfExtractor models.PDFExtractorData

// 	if err := s.DB.Where("csv_files_id = ?", req.GetCsvFilesId()).First(&pdfExtractor).Error; err != nil {
// 		return nil, status.Errorf(codes.Internal, "failed to query database: %v", err)
// 	}

// 	copier.CopyWithOption(&pdfExtractor, req, copier.Option{IgnoreEmpty: true, DeepCopy: true})

// 	if err := s.DB.Save(&pdfExtractor).Error; err != nil {
// 		return nil, status.Errorf(codes.Internal, "failed to save to database: %v", err)
// 	}

// 	// Create and return the response
// 	response := &pb.CreatePdfExtractorResponse{
// 		PdfExtractorData: &pb.PdfExtractorData{
// 			CsvFilesId:  pdfExtractor.GetCsvFilesID().String(),
// 			CsvName:     pdfExtractor.GetCsvName(),
// 			CsvFileJson: string(pdfExtractor.GetCsvFile()),
// 			CsvPdfPath:  pdfExtractor.CsvPdfPath,
// 			CsvStatus:   pdfExtractor.GetCsvStatus(),
// 			CreatedBy:   pdfExtractor.GetCreatedBy().String(),
// 			CreatedAt:   pdfExtractor.GetCreatedAt().Unix(),
// 			UpdatedBy:   pdfExtractor.GetUpdatedBy().String(),
// 			UpdatedAt:   pdfExtractor.GetUpdatedAt().Unix(),
// 		},
// 	}

// 	return response, nil
// }
