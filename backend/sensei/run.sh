#! /bin/bash
cargo run --bin senseid -- --network=regtest --bitcoind-rpc-host=localhost --bitcoind-rpc-port=18443 --bitcoind-rpc-username=polaruser --bitcoind-rpc-password=polarpass --database-url=postgres://sensei:sensei@localhost:5432/sensei
