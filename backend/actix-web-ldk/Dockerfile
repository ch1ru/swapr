FROM rust:1.67 as builder
WORKDIR /usr/src/actix-web-ldk
COPY . .
RUN cargo install --path .

FROM debian:bullseye-slim
RUN apt-get update && rm -rf /var/lib/apt/lists/*
COPY --from=builder /usr/local/cargo/bin/actix-web-ldk /usr/local/bin/actix-web-ldk
EXPOSE 5000
CMD ["actix-web-ldk", "polaruser:polarpass@192.168.20.3:18443", "./", "9732", "regtest", "hellolightning", "0.0.0.0"]
