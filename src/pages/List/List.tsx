import { useState } from "react";
import "../Home/Home.styled";
import { db } from "@/firebase-config";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import * as S from "./List.styled";
import { useLoaderData } from "react-router-dom";
import firebase from "firebase/compat";
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";

function List() {
  const lunchList = useLoaderData() as firebase.firestore.DocumentData;
  const usersCollectionRef = collection(db, "menus");
  const [menus, setMenus] = useState<
    { id: string; menu?: string; restaurant?: string }[]
  >(
    lunchList.docs.map((doc: any) => ({
      ...doc.data(),
      menu: doc.data().menu,
      restaurant: doc.data().restaurant,
      id: doc.id,
    }))
  );

  const deleteUser = async (id: string) => {
    const menuDoc = doc(db, "menus", id);
    await deleteDoc(menuDoc);

    const data = await getDocs(usersCollectionRef);
    setMenus(
      data?.docs.map((doc) => ({
        ...data,
        menu: doc.data().menu,
        restaurant: doc.data().restaurant,
        id: doc.id,
      }))
    );
  };

  return (
    <S.Wrapper>
      <Window resizable>
        <WindowHeader>Pokedex.exe</WindowHeader>
        <WindowContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>No</TableHeadCell>
                <TableHeadCell>Menu</TableHeadCell>
                <TableHeadCell>Restaurant</TableHeadCell>
                <TableHeadCell disabled>Level</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menus.map((menu, index) => {
                return (
                  <TableRow key={menu.id}>
                    <TableDataCell>{index + 1}</TableDataCell>
                    <TableDataCell>{menu.menu}</TableDataCell>
                    <TableDataCell>{menu.restaurant}</TableDataCell>
                    <TableDataCell>
                      <button onClick={() => deleteUser(menu.id)}>
                        delete Team
                      </button>
                    </TableDataCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </WindowContent>
      </Window>
    </S.Wrapper>
  );
}

export default List;
