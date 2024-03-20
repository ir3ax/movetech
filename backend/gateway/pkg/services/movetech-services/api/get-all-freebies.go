package api

import (
	"gateway/pkg/services/movetech-services/pb"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetAllFreebies(c *gin.Context, s pb.MoveTechAdminProtoServiceClient) {

	sort := c.Param("sort")
	search := c.Query("search")

	freebiesDetailsRes, err := s.GetAllFreebies(c, &pb.GetAllFreebiesRequest{
		Search:     search,
		SortOption: sort,
	})

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, freebiesDetailsRes)
}
