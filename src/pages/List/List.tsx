import { useEffect,  useState } from "react";
import "../App.css";
import { db } from '@/firebase-config';
import {
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import * as S from './List.styled'
import {useLoaderData} from "react-router-dom";
function List() {
    const lunchList = useLoaderData();
    const [menus, setMenus] = useState<
        { id: string; menu?: string; restaurant?: string }[]
    >([]);

    const deleteUser = async (id: string) => {
        const userDoc = doc(db, "menus", id);
        await deleteDoc(userDoc);
    };

    // const updateUser = async (id: string, team?: string) => {
    //     const userDoc = doc(db, "menus", id);
    //     const newFields = { team };
    //     await updateDoc(userDoc, newFields);
    // };

    useEffect(() => {
        // @ts-ignore
        setMenus(lunchList.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }, []);

    return (
        <>

        <S.Wrapper>
            <table>
            <thead>
            <tr className="table_header">
                <th>no</th>
                <th>음식점</th>
                <th>메뉴</th>
                <th>삭제</th>
            </tr>
            </thead>
            <tbody>
            {menus.map((menu, index) => {
                return (
                    <tr key={menu.id}>
                        <td>{index+1}</td>
                        <td>{menu.menu}</td>
                        <td>{menu.restaurant}</td>
                        <td><button onClick={() => deleteUser(menu.id)}>delete Team</button></td>
                    </tr>
                );
            })}
            </tbody>
            </table>
        </S.Wrapper>
        </>
    );
}

export default List;
