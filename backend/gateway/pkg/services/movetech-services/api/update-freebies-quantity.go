package api

import (
	"gateway/pkg/services/movetech-services/binding"
	"gateway/pkg/services/movetech-services/pb"
	"net/http"

	"github.com/gin-gonic/gin"
)

func UpdateFreebiesQuantity(c *gin.Context, s pb.MoveTechAdminProtoServiceClient) {
	freebiesDetails := c.MustGet(gin.BindKey).(*binding.UpdateFreebiesQuantityRequest)

	freebiesDetailsRes, err := s.UpdateFreebiesQuantity(c, &pb.UpdateFreebiesQuantityRequest{
		FreebiesId:               freebiesDetails.FreebiesId,
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
