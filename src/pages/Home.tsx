import { useEffect,  useState } from "react";
import "./App.css";
import { db } from '@/firebase-config';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
function Home() {
    const [newName, setNewName] = useState("");
    const [newTeam, setNewTeam] = useState("");

    const [menus, setMenus] = useState<
        { id: string; name?: string; team?: string }[]
    >([]);
    const usersCollectionRef = collection(db, "menus");

    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: newName, team: newTeam });
    };

    const deleteUser = async (id: string) => {
        const userDoc = doc(db, "menus", id);
        await deleteDoc(userDoc);
    };

    const updateUser = async (id: string, team?: string) => {
        const userDoc = doc(db, "menus", id);
        const newFields = { team };
        await updateDoc(userDoc, newFields);
    };

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setMenus(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
    }, [createUser]);

    return (
        <div className='App'>
            <input
                placeholder='Name...'
                onChange={(event) => {
                    setNewName(event.target.value);
                }}
            />
            <input
                placeholder='team...'
                onChange={(event) => {
                    setNewTeam(event.target.value);
                }}
            />
            <button onClick={createUser}>Create User</button>
            {menus.map((menu) => {
                return (
                    <div>
                        <h1>Name: {menu.name}</h1>
                        <h1>Name: {menu.team}</h1>
                        <button onClick={() => updateUser(menu.id, menu.team)}>
                            Change Team
                        </button>
                        <button onClick={() => deleteUser(menu.id)}>delete Team</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;
