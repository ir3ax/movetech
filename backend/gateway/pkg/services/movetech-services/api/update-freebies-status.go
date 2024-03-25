package api

import (
	"gateway/pkg/services/movetech-services/binding"
	"gateway/pkg/services/movetech-services/pb"
	"net/http"

	"github.com/gin-gonic/gin"
)

func UpdateFreebiesStatus(c *gin.Context, s pb.MoveTechAdminProtoServiceClient) {
	freebiesDetails := c.MustGet(gin.BindKey).(*binding.UpdateFreebiesStatusRequest)

	freebiesDetailsRes, err := s.UpdateFreebiesStatus(c, &pb.UpdateFreebiesStatusRequest{
		FreebiesId:     freebiesDetails.FreebiesId,
		FreebiesStatus: freebiesDetails.FreebiesStatus,
	})

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, freebiesDetailsRes)
}
