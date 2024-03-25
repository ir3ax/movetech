package api

import (
	"gateway/pkg/services/movetech-services/binding"
	"gateway/pkg/services/movetech-services/pb"
	"net/http"

	"github.com/gin-gonic/gin"
)

func UpdateFreebies(c *gin.Context, s pb.MoveTechAdminProtoServiceClient) {
	freebiesDetails := c.MustGet(gin.BindKey).(*binding.UpdateFreebiesRequest)

	freebiesDetailsRes, err := s.UpdateFreebies(c, &pb.UpdateFreebiesRequest{
		FreebiesId:         freebiesDetails.FreebiesId,
		FreebiesName:       freebiesDetails.FreebiesName,
		FreebiesImg:        freebiesDetails.FreebiesImg,
		FreebiesStorePrice: freebiesDetails.FreebiesStorePrice,
	})

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, freebiesDetailsRes)
}
