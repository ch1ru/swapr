FROM node:16 as build-web-admin

WORKDIR /build

COPY . .

WORKDIR /build/web-admin
RUN npm install
RUN npm run build

FROM rust:latest as build-sensei

WORKDIR /build

# copy your source tree
COPY . .

COPY --from=build-web-admin /build/web-admin/build/ /build/web-admin/build/

RUN rustup component add rustfmt

RUN cargo build --verbose --release

# our final base
FROM rust:latest

# copy the build artifact from the build stage
COPY --from=build-sensei /build/target/release/senseid .

# set the startup command to run your binary
CMD ["./senseid", "--network=regtest", "--bitcoind-rpc-host=bitcoind", "--bitcoind-rpc-port=18443", "--bitcoind-rpc-username=polaruser", "--bitcoind-rpc-password=polarpass", "--database-url=postgres://sensei:sensei@postgres:5432/sensei"]
