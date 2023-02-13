import { List } from "@mui/material"
import { Container } from "@mui/system"
import UserTile from "./UserTile"

export default function UserSidebar(props) {

    return (
        <Container maxWidth='20rem'>
            <List>
                {
                    props.users.map(user => {
                        return <UserTile user={user} />
                    })
                }
            </List>
        </Container>
    )
}