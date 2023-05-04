interface Contact {
    pub_key: string; // LND public key
    contact_key: string; // RSA public key for e2e encryption
    alias: string; // name
}