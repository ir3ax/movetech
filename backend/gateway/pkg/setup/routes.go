package setup

import (
	movetechAdmin "gateway/pkg/services/movetech-services"

	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

func InitServiceRoutes(router *gin.Engine, vi *viper.Viper) {
	movetechAdmin.RegisterRoutes(router, vi)
}
