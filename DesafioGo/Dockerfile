FROM golang as builder
COPY hello.go .
RUN GOOS=linux go build -ldflags="-s -w" hello.go
FROM scratch
COPY --from=builder /go/hello .
CMD ["./hello"]