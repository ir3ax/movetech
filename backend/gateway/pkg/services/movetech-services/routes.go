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
	movetechAdmin.POST("/product", gin.Bind(binding.SaveProductRequest{}), svc.SaveProduct)
	movetechAdmin.POST("/freebies", gin.Bind(binding.SaveFreebiesRequest{}), svc.SaveFreebies)
	movetechAdmin.GET("/freebies/:freebiesId", svc.GetAllFreebiesById)
	movetechAdmin.GET("/freebies-sort/:sort", svc.GetAllFreebies)
	movetechAdmin.PUT("/freebies-update", gin.Bind(binding.UpdateFreebiesRequest{}), svc.UpdateFreebies)
	movetechAdmin.PUT("/freebies-update-quantity", gin.Bind(binding.UpdateFreebiesQuantityRequest{}), svc.UpdateFreebiesQuantity)
	movetechAdmin.PUT("/freebies-update-status", gin.Bind(binding.UpdateFreebiesStatusRequest{}), svc.UpdateFreebiesStatus)

	return svc
}

func (svc *MoveTechAdminProtoService) SaveProduct(c *gin.Context) {
	api.SaveProduct(c, svc.MoveTechAdminProtoServiceClient)
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

func (svc *MoveTechAdminProtoService) UpdateFreebies(c *gin.Context) {
	api.UpdateFreebies(c, svc.MoveTechAdminProtoServiceClient)
}

func (svc *MoveTechAdminProtoService) UpdateFreebiesQuantity(c *gin.Context) {
	api.UpdateFreebiesQuantity(c, svc.MoveTechAdminProtoServiceClient)
}

func (svc *MoveTechAdminProtoService) UpdateFreebiesStatus(c *gin.Context) {
	api.UpdateFreebiesStatus(c, svc.MoveTechAdminProtoServiceClient)
}
