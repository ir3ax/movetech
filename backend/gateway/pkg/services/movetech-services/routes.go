package movetechAdmin

import (
	"gateway/pkg/services/movetech-services/api"
	"gateway/pkg/services/movetech-services/binding"

	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

func RegisterRoutes(r *gin.Engine, vi *viper.Viper) *MoveTechAdminProtoService {
	svc := &MoveTechAdminProtoService{InitMoveTechAdminService(vi)}

	movetechAdmin := r.Group("/admin")
	movetechAdmin.POST("/freebies", gin.Bind(binding.SaveFreebiesRequest{}), svc.SaveFreebies)
	movetechAdmin.GET("/freebies/:freebiesId", svc.GetAllFreebiesById)
	movetechAdmin.GET("/freebies-sort/:sort", svc.GetAllFreebies)

	return svc
}

func (svc *MoveTechAdminProtoService) SaveFreebies(c *gin.Context) {
	api.SaveFreebies(c, svc.MoveTechAdminProtoServiceClient)
}

func (svc *MoveTechAdminProtoService) GetAllFreebies(c *gin.Context) {
	api.GetAllFreebies(c, svc.MoveTechAdminProtoServiceClient)
}

func (svc *MoveTechAdminProtoService) GetAllFreebiesById(c *gin.Context) {
	api.GetAllFreebiesById(c, svc.MoveTechAdminProtoServiceClient)
}
