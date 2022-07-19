import React from 'react'
import { useParams } from "react-router-dom";

const Room = () => {
    let params = useParams();

  return (
    <div>Room {params.id}
    </div>
  )
}

export default Room