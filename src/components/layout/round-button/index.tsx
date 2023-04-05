import React from "react"

interface Props {
    onClick?: () => void
}

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "60px",
    height: "40px",
    width: "40px",
    paddingBottom: "5px",
    background: "blue",
    fontSize: "25px",
    color: "white",
    cursor: "pointer",
}

const RoundButton: React.FC<Props> = ({ onClick }) => {
    return (
        <div style={style} onClick={onClick}> + </div>
    )
}

export default RoundButton;
