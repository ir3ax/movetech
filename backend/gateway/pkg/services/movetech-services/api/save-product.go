package api

import (
	"gateway/pkg/services/movetech-services/binding"
	"gateway/pkg/services/movetech-services/pb"
	"net/http"

	"github.com/gin-gonic/gin"
)

func SaveProduct(c *gin.Context, s pb.MoveTechAdminProtoServiceClient) {
	productDetails := c.MustGet(gin.BindKey).(*binding.SaveProductRequest)

	productDetailsRes, err := s.SaveProduct(c, &pb.SaveProductRequest{
		ProductName:      productDetails.ProductName,
		Img:              productDetails.Img,
		Discount:         productDetails.Discount,
		SupplierPrice:    productDetails.SupplierPrice,
		OriginalPrice:    productDetails.OriginalPrice,
		DiscountedPrice:  productDetails.DiscountedPrice,
		Description1:     productDetails.Description1,
		Description2:     string(productDetails.Description2),
		OriginalQuantity: productDetails.OriginalQuantity,
		CurrentQuantity:  productDetails.CurrentQuantity,
		ProductStatus:    "ACT",
		ProductSold:      productDetails.ProductSold,
		ProductFreebies:  string(productDetails.ProductFreebies),
	})

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, productDetailsRes)
}
