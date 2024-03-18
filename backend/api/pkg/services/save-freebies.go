package services

import (
	"api/pkg/models"
	"api/pkg/pb"
	"context"
	"encoding/base64"
	"io/ioutil"
	"log"
)

func (s *MoveTechAdminService) SaveFreebies(ctx context.Context, req *pb.SaveFreebiesRequest) (*pb.SaveFreebiesResponse, error) {
	// Decode base64 image data
	imgData, err := base64.StdEncoding.DecodeString(req.FreebiesImg)
	if err != nil {
		log.Printf("Error decoding base64 image: %v", err)
		return nil, err
	}

	// Save image to file
	imgPath := "path/to/save/image.png" // Change this to the desired path and file name
	if err := ioutil.WriteFile(imgPath, imgData, 0644); err != nil {
		log.Printf("Error saving image file: %v", err)
		return nil, err
	}

	// Create a new FreebiesData instance
	freebiesData := models.FreebiesData{
		FreebiesName:             req.FreebiesName,
		FreebiesImg:              imgPath, // Save file path to database instead of image data
		FreebiesOriginalQuantity: req.FreebiesOriginalQuantity,
		FreebiesCurrentQuantity:  req.FreebiesCurrentQuantity,
	}

	// Save the data to the database using GORM
	if err := s.DB.Create(&freebiesData).Error; err != nil {
		log.Printf("Error saving Freebies data: %v", err)
		return nil, err
	}

	// Create and return the response
	response := &pb.SaveFreebiesResponse{
		FreebiesData: &pb.FreebiesData{
			FreebiesName:             freebiesData.FreebiesName,
			FreebiesImg:              freebiesData.FreebiesImg,
			FreebiesOriginalQuantity: freebiesData.FreebiesOriginalQuantity,
			FreebiesCurrentQuantity:  freebiesData.FreebiesCurrentQuantity,
			CreatedBy:                freebiesData.CreatedBy.String(),
			CreatedAt:                freebiesData.CreatedAt.Unix(),
			UpdatedBy:                freebiesData.UpdatedBy.String(),
			UpdatedAt:                freebiesData.UpdatedAt.Unix(),
		},
	}

	return response, nil
}
