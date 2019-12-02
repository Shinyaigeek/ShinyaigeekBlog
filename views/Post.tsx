import React from 'react'

import parser from "react-html-parser"

interface Props {
    body:string
}

export default function PostContent(props:Props) {
    return (
        <div>
            {parser(props.body)}
        </div>
    )
}
