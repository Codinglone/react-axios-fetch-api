import { useEffect, useState } from "react"
import { fetchData } from "./utils/fetch"
function App() {
  const [users, setUsers] = useState([])
  const baseUrl = `https://jsonplaceholder.typicode.com/users?_limit=5`
  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/users`)
    // .then((response) => response.json())
    // .then((data) => setUsers(data))
    fetchData(baseUrl).then(response => setUsers(response.data))
  }, [])

  return (
    <div className="App">
      {users && users.map(({id, name, username, email}) => (
        <h3 key={id}>{name}</h3>
      ))}
    </div>
  )
}

export default App
