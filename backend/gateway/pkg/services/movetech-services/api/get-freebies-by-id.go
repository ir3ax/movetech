package api

import (
	"gateway/pkg/services/movetech-services/pb"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetAllFreebiesById(c *gin.Context, s pb.MoveTechAdminProtoServiceClient) {
	// Extract the FreebiesId parameter from the request
	freebiesId := c.Param("freebiesId")

	// Call the company service
	freebies, err := s.GetAllFreebiesById(c, &pb.GetAllFreebiesRequestById{
		FreebiesId: freebiesId,
	})

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, freebies.FreebiesData)
}
