FROM golang
COPY hello.go .
RUN GOOS=linux go build -ldflags="-s -w" hello.go
FROM scratch
COPY --from=0 /go/hello .
CMD ["./hello"]