import { CircularProgress } from "@mui/material"
import React from "react"

interface Props { }

const AppLoader: React.FC<Props> = () => {
    return <>{
        < div className="apploader" >
            <CircularProgress />
        </div >
    }</>
}

export default AppLoader