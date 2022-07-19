import { React, useEffect, useState} from 'react'
import { useParams } from "react-router-dom";

const Room = () => {
    let params = useParams();
    const [room, setRoom] = useState({})

    let getRoom = async () => {
        let response = await fetch(`/api/rooms/${params.id}`)
        let data = await response.json()
        setRoom(data)
    }

    useEffect(() => {
     getRoom();
    },[])

  return (
    <div><h1>{room.name}</h1>
    </div>
  )
}

export default Room