package services

import (
	"api/pkg/models"
	"api/pkg/pb"
	"context"
	"errors"
	"fmt"
	"log"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"gorm.io/gorm"
	// "github.com/aws/aws-sdk-go-v2/config"
	// "github.com/aws/aws-sdk-go-v2/feature/s3/manager"
	// "github.com/aws/aws-sdk-go-v2/service/s3"
	// "github.com/aws/aws-sdk-go/aws"
)

func (s *MoveTechAdminService) SaveFreebies(ctx context.Context, req *pb.SaveFreebiesRequest) (*pb.SaveFreebiesResponse, error) {

	// Decode base64 image data
	// imgData, err := base64.StdEncoding.DecodeString(req.FreebiesImg)
	// if err != nil {
	// 	log.Printf("Error decoding base64 image: %v", err)
	// 	return nil, err
	// }

	// // Create a temporary file to write the decoded image data
	// tempFile, err := ioutil.TempFile("", "image")
	// if err != nil {
	// 	log.Printf("Error creating temporary file: %v", err)
	// 	return nil, err
	// }
	// defer tempFile.Close()

	// // Write the decoded image data to the temporary file
	// if _, err := tempFile.Write(imgData); err != nil {
	// 	log.Printf("Error writing to temporary file: %v", err)
	// 	return nil, err
	// }

	// // cfg, err := config.LoadDefaultConfig(context.TODO())
	// // if err != nil {
	// // 	log.Printf("error: %v", err)
	// // 	return nil, err
	// // }

	// // Load AWS credentials from environment variables
	// awsCfg, err := external.LoadDefaultAWSConfig()
	// if err != nil {
	// 	log.Printf("error loading AWS config: %v", err)
	// 	return nil, err
	// }

	// // Explicitly set the AWS region
	// awsCfg.Region = "your-aws-region"

	// // Disable EC2 IMDS endpoint
	// awsCfg.DisableIMDSEndpoint = true

	// cfg, err := config.LoadDefaultConfig(context.TODO(),
	// 	config.WithCredentialsProvider(awsCfg.Credentials),
	// 	config.WithRegion(awsCfg.Region),
	// )
	// if err != nil {
	// 	log.Printf("error: %v", err)
	// 	return nil, err
	// }

	// client := s3.NewFromConfig(cfg)
	// uploader := manager.NewUploader(client)

	// // Upload the temporary file to S3
	// result, err := uploader.Upload(context.TODO(), &s3.PutObjectInput{
	// 	Bucket: aws.String("movetech-freebies"),
	// 	Key:    aws.String("unique_image_key"), // Provide a unique key for the image
	// 	Body:   tempFile,
	// 	ACL:    "public-read",
	// })
	// if err != nil {
	// 	log.Printf("Error uploading image to S3: %v", err)
	// 	return nil, err
	// }

	// // Construct S3 URL
	// s3URL := "https://movetech-freebies.s3.amazonaws.com/" + *result.Key

	// Create a new FreebiesData instance
	freebiesData := models.FreebiesData{
		FreebiesName:             req.FreebiesName,
		FreebiesImg:              req.FreebiesImg,
		FreebiesStorePrice:       req.FreebiesStorePrice,
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
			FreebiesStorePrice:       freebiesData.FreebiesStorePrice,
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

func (s *MoveTechAdminService) GetAllFreebies(ctx context.Context, req *pb.GetAllFreebiesRequest) (*pb.GetAllFreebiesResponse, error) {
	response := &pb.GetAllFreebiesResponse{
		FreebiesData: []*pb.FreebiesData{},
	}

	// Build your query based on the request parameters
	query := s.DB.Model(&models.FreebiesData{})

	// Handle sorting
	switch req.SortOption {
	case pb.SortOption_ATOZ:
		query = query.Order("freebies_name ASC")
	case pb.SortOption_ZTOA:
		query = query.Order("freebies_name DESC")
	case pb.SortOption_PRICE_HIGH_TO_LOW:
		query = query.Order("freebies_store_price DESC")
	case pb.SortOption_PRICE_LOW_TO_HIGH:
		query = query.Order("freebies_store_price ASC")
	case pb.SortOption_QUANTITY_HIGH_TO_LOW:
		query = query.Order("freebies_current_quantity DESC")
	case pb.SortOption_QUANTITY_LOW_TO_HIGH:
		query = query.Order("freebies_current_quantity ASC")
	}

	// Handle searching
	if req.Search != "" {
		query = query.Where("freebies_name LIKE ?", "%"+req.Search+"%")
	}

	// Execute the query
	var freebiesDataValue []models.FreebiesData
	if err := query.Find(&freebiesDataValue).Error; err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to fetch freebies data: %v", err))
	}

	// Map the retrieved data to protobuf message
	for _, data := range freebiesDataValue {
		response.FreebiesData = append(response.FreebiesData, &pb.FreebiesData{
			FreebiesId:               data.FreebiesId.String(),
			FreebiesName:             data.FreebiesName,
			FreebiesImg:              data.FreebiesImg,
			FreebiesStorePrice:       data.FreebiesStorePrice,
			FreebiesOriginalQuantity: data.FreebiesOriginalQuantity,
			FreebiesCurrentQuantity:  data.FreebiesCurrentQuantity,
			CreatedBy:                data.CreatedBy.String(),
			CreatedAt:                data.CreatedAt.Unix(),
			UpdatedBy:                data.UpdatedBy.String(),
			UpdatedAt:                data.UpdatedAt.Unix(),
		})
	}

	return response, nil
}

func (s *MoveTechAdminService) GetAllFreebiesById(ctx context.Context, req *pb.GetAllFreebiesRequestById) (*pb.GetAllFreebiesResponseById, error) {
	response := &pb.GetAllFreebiesResponseById{
		FreebiesData: []*pb.FreebiesData{},
	}

	// Fetch the freebie by its ID
	var freebie models.FreebiesData
	if err := s.DB.Where("freebies_id = ?", req.FreebiesId).First(&freebie).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, status.Error(codes.NotFound, fmt.Sprintf("Freebies with ID %s not found", req.FreebiesId))
		}
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to fetch freebies data: %v", err))
	}

	// Map the fetched freebie to protobuf message
	response.FreebiesData = append(response.FreebiesData, &pb.FreebiesData{
		FreebiesId:               freebie.FreebiesId.String(),
		FreebiesName:             freebie.FreebiesName,
		FreebiesImg:              freebie.FreebiesImg,
		FreebiesStorePrice:       freebie.FreebiesStorePrice,
		FreebiesOriginalQuantity: freebie.FreebiesOriginalQuantity,
		FreebiesCurrentQuantity:  freebie.FreebiesCurrentQuantity,
		CreatedBy:                freebie.CreatedBy.String(),
		CreatedAt:                freebie.CreatedAt.Unix(),
		UpdatedBy:                freebie.UpdatedBy.String(),
		UpdatedAt:                freebie.UpdatedAt.Unix(),
	})

	return response, nil
}
