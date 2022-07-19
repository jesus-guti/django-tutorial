import {useState, useEffect, React} from 'react'

const Rooms = () => {
  let [rooms, setRooms] = useState([])

    useEffect(() => {
        getRooms()
    }, [])

    let getRooms = async () => {
        let response = await fetch('/api/rooms/')
        let data = await response.json()
        setRooms(data)
    }

  return (
    <main>
        <h1>this is rooms</h1>
        {rooms.map(item => <li>{item.name}</li>)}
    </main>
  )
}

export default Rooms