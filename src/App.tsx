import { useEffect, useRef, useState } from 'react'
import './App.css'
import { db } from './firebase-config'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
function App() {
  const [newName, setNewName] = useState('')
  const [newTeam, setNewTeam] = useState('')

  const [users, setUsers] = useState<{id: string, name?: string, team?: string}[]>([]);
  const usersCollectionRef = collection(db,"users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, team: newTeam})
  }

  const deleteUser = async (id: string) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc)
  }

  const updateUser = async (id: string, team?: string) => {
    const userDoc = doc(db, "users", id);
    const newFields = {team: 'Mobile'}
    await updateDoc(userDoc, newFields)
  }

  useEffect(()=>{
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
    }

    getUsers();
  },[])
 
  return (
    <div className="App">
      <input placeholder='Name...' onChange={(event)=> {setNewName(event.target.value)}}/>
      <input placeholder='team...' onChange={(event)=> {setNewTeam(event.target.value)}}/>
      <button onClick={createUser}>Create User</button>
      {users.map((user)=> {
        return (<div>
          <h1>Name: {user.name}</h1>
          <h1>Name: {user.team}</h1>
          <button onClick={()=>updateUser(user.id, user.team)}>Change Team</button>
          <button onClick={()=>deleteUser(user.id)}>delete Team</button>
          </div>)
      })}
    </div>
  )
}

export default App
