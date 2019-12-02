import React from 'react'

interface Props {
    body:string
}

export default function PostContent(props:Props) {
    return (
        <div>
            {props.body}
        </div>
    )
}
