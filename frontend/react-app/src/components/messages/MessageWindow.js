import Message from "./Message"
import React from "react"

export default function MessageWindow(props) {
    return (
        props.messages.map(message => {
            return <Message message={message} />
        })
    )
}