# Start with the official Golang image
FROM golang:1.19 AS builder

WORKDIR /app

COPY go.mod .
COPY go.sum .

RUN go mod download
# Change this depending on your file structure and dependencies
COPY cmd /app/cmd
COPY pkg /app/pkg
COPY .env /app/env

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o gateway ./cmd/

# Final stage
FROM alpine:latest

WORKDIR /root/

COPY --from=builder /app/gateway .
COPY --from=builder /app/env .env

CMD ["./gateway"]