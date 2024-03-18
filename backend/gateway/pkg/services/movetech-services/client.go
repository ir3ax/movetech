package movetechAdmin

import (
	"fmt"

	"gateway/pkg/services/movetech-services/pb"

	"github.com/spf13/viper"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

type MoveTechAdminProtoService struct {
	pb.MoveTechAdminProtoServiceClient
}

func InitMoveTechAdminService(vi *viper.Viper) pb.MoveTechAdminProtoServiceClient {
	companyUrl := vi.GetString("MOVETECH_SVC_URL")

	// using WithInsecure() because no SSL running
	cc, err := grpc.Dial(companyUrl, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		fmt.Println("[ERROR] Failed to connect with raffle Service: ", err)
	}

	return pb.NewMoveTechAdminProtoServiceClient(cc)

}
