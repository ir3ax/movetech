package api

import (
	"gateway/pkg/services/movetech-services/binding"
	"gateway/pkg/services/movetech-services/pb"
	"net/http"

	"github.com/gin-gonic/gin"
)

func SaveFreebies(c *gin.Context, s pb.MoveTechAdminProtoServiceClient) {
	freebiesDetails := c.MustGet(gin.BindKey).(*binding.SaveFreebiesRequest)

	freebiesDetailsRes, err := s.SaveFreebies(c, &pb.SaveFreebiesRequest{
		FreebiesName:             freebiesDetails.FreebiesName,
		FreebiesImg:              freebiesDetails.FreebiesImg,
		FreebiesStorePrice:       freebiesDetails.FreebiesStorePrice,
		FreebiesOriginalQuantity: freebiesDetails.FreebiesOriginalQuantity,
		FreebiesCurrentQuantity:  freebiesDetails.FreebiesCurrentQuantity,
	})

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, freebiesDetailsRes)
}
