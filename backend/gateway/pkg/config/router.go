package config

import (
	"gateway/pkg/middleware"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {
	router := gin.Default()

	//cors settings
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AddAllowMethods("OPTIONS")
	config.AllowHeaders = []string{
		"Origin",
		"Content-Length",
		"Content-Type",
		"Authorization",
	}

	router.Use(cors.New(config))
	router.Use(middleware.Errors())

	return router
}
