package api

import (
	"gateway/pkg/services/movetech-services/pb"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetAllFreebies(c *gin.Context, s pb.MoveTechAdminProtoServiceClient) {
	// Call the company service
	freebies, err := s.GetAllFreebies(c, &pb.GetAllFreebiesRequest{})

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, freebies.FreebiesData)
}
