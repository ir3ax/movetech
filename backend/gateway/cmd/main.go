package main

import (
	"gateway/pkg/config"
	"gateway/pkg/setup"
)

func main() {
	vi := config.InitEnv()
	//router
	r := config.InitRouter()
	//routes
	setup.InitServiceRoutes(r, vi)
	//run server
	r.Run(":" + vi.GetString("PORT"))
}
