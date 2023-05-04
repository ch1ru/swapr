interface Chat {
    uuid: string; // unique ID 
    type: ChatType;
    name?: string; // Chat room name
    members?: {[pub_key:string]: ChatMember};
    group_key?: string; // group admin encryption public key
    host?: string; // host of sphinx-tribes server
}
enum ChatType {
    conversation,
    group,
    public_group
}
interface ChatMember {
    key: string;
    alias?: string;
    role?: ChatRole;
}
enum ChatRole {
    owner,
    admin,
    mod,
    writer,
    reader,
}