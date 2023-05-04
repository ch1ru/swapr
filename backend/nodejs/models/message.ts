interface Message {
    id: number;
    content?: string; // encrypted with RSA key
    amount?: number; // this field is injected from the keysend
    invoice?: string; // Lightning invoice string
    mediaKey?: string;
    mediaType?: string;
    mediaToken?: MediaToken;
}
 // see mediaToken.md for details
interface MediaToken extends String{};