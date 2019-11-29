import React from 'react'
import {NextPage} from "next"

import "../style/home.scss"
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'

const Index:NextPage<WithRouterProps> = (props) => {
    return(
        <div>
            Hello Next
        </div>
    )
}

export default withRouter(Index)
