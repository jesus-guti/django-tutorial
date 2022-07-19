import React from 'react'

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
        {rooms.map(item => <div>item</div>)}
    </main>
  )
}

export default Home