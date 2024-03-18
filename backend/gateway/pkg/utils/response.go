package utils

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func ErrorMessage(msg string) interface{} {
	return gin.H{
		"error": map[string]interface{}{
			"message": msg,
		},
	}
}

type ErrorResponse struct {
	Code    int                  `json:"code,omitempty"`
	Message string               `json:"message,omitempty"`
	Errors  []ErrorResponseError `json:"errors,omitempty"`
}

type ErrorResponseError struct {
	Code    int    `json:"code,omitempty"`
	Message string `json:"message,omitempty"`
	Reason  string `json:"reason,omitempty"`
}

func GenerateErrorResponse(e ErrorResponse) interface{} {
	return map[string]interface{}{
		"error": e,
	}
}

func GenerateGinErrorResponse(ctx *gin.Context, e error) {
	er := GetErrorRespose(e)
	ctx.AbortWithStatusJSON(er.Code, GenerateErrorResponse(er))
}

func GenerateGinErrorResponseWithValidationErrors(ctx *gin.Context, e validator.ValidationErrors) {
	var errors []ErrorResponseError
	for _, err := range e {
		errors = append(errors, ErrorResponseError{
			Message: fmt.Sprintf("Invalid input [%s]", err.Field()),
			Reason:  err.Tag(),
		})
	}

	// Make sure we maintain the preset response status
	status := http.StatusBadRequest
	if ctx.Writer.Status() != http.StatusOK {
		status = ctx.Writer.Status()
	}

	ctx.Writer.Header().Set("Content-Type", "application/json")
	ctx.AbortWithStatusJSON(status, GenerateErrorResponse(ErrorResponse{
		Code:    status,
		Message: "Invalid input",
		Errors:  errors,
	}))
}

func GetErrorRespose(e error) ErrorResponse {
	var er ErrorResponse
	er.Code = 400
	er.Message = e.Error()

	if s, ok := status.FromError(e); ok {
		switch s.Code() {
		case codes.InvalidArgument:
			er.Code = http.StatusBadRequest
		case codes.AlreadyExists:
			er.Code = http.StatusConflict
		case codes.Internal:
			er.Code = http.StatusInternalServerError
		case codes.Unauthenticated:
			er.Code = http.StatusUnauthorized
		case codes.NotFound:
			er.Code = http.StatusNotFound
		default:
			er.Code = http.StatusInternalServerError
		}
		er.Message = s.Message()
	}
	return er
}
