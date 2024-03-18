package main

import (
	"api/pkg/config"
	"api/pkg/pb"
	"api/pkg/services"
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"
	"syscall"

	"github.com/spf13/viper"
	"google.golang.org/grpc"
	"gorm.io/gorm"
)

func main() {
	env := config.InitEnv()
	port := getPort(env)
	database, err := getDatabase(env)

	if err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}

	MovetechSvc := services.InitMoveTechService(database)

	grpcServer, listener, err := startServer(MovetechSvc, port)

	if err != nil {
		log.Fatalf("Failed to start gRPC server: %v", err)
	}

	log.Printf("Server is now listening on port %s", port)

	// Handle graceful shutdown
	shutdownChannel := make(chan os.Signal, 1)
	signal.Notify(shutdownChannel, syscall.SIGINT, syscall.SIGTERM)

	// Run the gRPC server in a separate goroutine
	go func() {
		if err := grpcServer.Serve(listener); err != nil {
			log.Fatalf("Failed to serve: %v", err)
		}
	}()

	// Wait for termination signal
	<-shutdownChannel

	// Graceful shutdown
	grpcServer.GracefulStop()

	log.Println("Server has shut down gracefully")
}

func getDatabase(env *viper.Viper) (*gorm.DB, error) {
	database, err := config.InitDatabase(env)

	if err != nil {
		return nil, fmt.Errorf("Database failed to initialize: %v", err)
	}

	return database, nil
}

func getPort(env *viper.Viper) string {
	return env.GetString("PORT")
}

func startServer(MovetechSvc *services.MoveTechAdminService, port string) (*grpc.Server, net.Listener, error) {
	listener, err := net.Listen("tcp", ":"+port)

	if err != nil {
		return nil, nil, fmt.Errorf("failed to listen: %v", err)
	}

	grpcServer := grpc.NewServer()

	pb.RegisterMoveTechAdminProtoServiceServer(grpcServer, MovetechSvc)

	return grpcServer, listener, nil
}
