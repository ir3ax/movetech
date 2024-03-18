package middleware

/**
 * This file contains the logger middleware for the application
 * It is responsible for logging all requests and responses
 */

import (
	"github.com/gin-gonic/gin"
	"github.com/oklog/ulid/v2"
	"go.uber.org/zap"
)

// GinLogger receives the default log of the gin framework
func GinLogger(logger *zap.Logger) gin.HandlerFunc {
	return func(c *gin.Context) {
		var traceULID = ulid.Make().String()
		c.Set("traceId", traceULID)
		// start := time.Now()
		path := c.Request.URL.Path
		// query := c.Request.URL.RawQuery
		c.Next()

		// check status, or pass level?, or CheckStatusLevel

		// cost := time.Since(start)
		logger.Info(path,
			zap.Int("status", c.Writer.Status()),
			zap.String("method", c.Request.Method),
			zap.String("path", path),
			zap.String("traceId", c.MustGet("traceId").(string)),
			// zap.String("query", query),
			zap.String("ip", c.ClientIP()),
			// zap.String("user-agent", c.Request.UserAgent()),
			// zap.String("errors", c.Errors.ByType(gin.ErrorTypePrivate).String()),
			// zap.Duration("cost", cost),
		)
	}
}
