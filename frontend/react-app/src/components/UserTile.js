import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FaBeer } from "react-icons/fa";

export default function UserTile(props) {
    return (
        <ListItemButton>
        <ListItem>
            <ListItemIcon>
                <ListItemAvatar>
                    <Avatar>
                        <FaBeer />
                    </Avatar>
                </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary={props.user.name} secondary="" />
        </ListItem>
        </ListItemButton>
    )
}