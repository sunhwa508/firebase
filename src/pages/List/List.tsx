import { useState } from "react";
import "../Home/Home.styled";
import { db } from '@/firebase-config';
import {
    collection,
    deleteDoc,
    doc, getDocs,
} from "firebase/firestore";
import * as S from './List.styled'
import {useLoaderData} from "react-router-dom";
import firebase from "firebase/compat";


function List() {
    const lunchList = useLoaderData() as firebase.firestore.DocumentData;
    const usersCollectionRef = collection(db, "menus");
    const [menus, setMenus] = useState<
        { id: string; menu?: string; restaurant?: string }[]
    >(lunchList.docs.map((doc: any) => ({ ...doc.data(), menu:doc.data().menu,  restaurant: doc.data().restaurant, id: doc.id })));

    const deleteUser = async (id: string) => {
        const menuDoc = doc(db, "menus", id);
        await deleteDoc(menuDoc);

        const data = await getDocs(usersCollectionRef);
        setMenus(data?.docs.map((doc) =>
            ({ ...data, menu:doc.data().menu,  restaurant: doc.data().restaurant, id: doc.id })));
    };

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
