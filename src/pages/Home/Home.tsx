import "./Home.styled";
import * as S from "./Home.styled";
import Roulette from "@/pages/Roulette/Roulette";
import React, { useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase-config";
import { useLoaderData } from "react-router-dom";
import firebase from "firebase/compat";
import { Button, TextInput } from "react95";

export async function loader() {
  const usersCollectionRef = collection(db, "menus");
  try {
    return await getDocs(usersCollectionRef);
  } catch {
    throw new Response(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}

function Home() {
  const MAX_MENUS = 30;
  const lunchList = useLoaderData() as firebase.firestore.DocumentData;
  const [rouletteData, setRouletteData] = useState<
    { id: string; option: string }[]
  >(
    lunchList.docs.map((doc: any) => ({
      ...doc.data(),
      option: doc.data().restaurant,
      id: doc.id,
    }))
  );
  const [newMenu, setNewMenu] = useState("");
  const [newRestaurant, setNewRestaurant] = useState("");
  const usersCollectionRef = collection(db, "menus");

  const createMenu = async () => {
    await addDoc(usersCollectionRef, {
      menu: newMenu,
      restaurant: newRestaurant,
    });
    setNewMenu("");
    setNewRestaurant("");
    const data = await getDocs(usersCollectionRef);
    setRouletteData(
      data?.docs.map((doc) => ({
        ...rouletteData,
        option: doc.data().restaurant,
        id: doc.id,
      }))
    );
  };

  return (
    <S.Wrapper>
      <div>
        <TextInput
          value={newMenu}
          placeholder="메뉴를 입력하세요"
          disabled={rouletteData.length > MAX_MENUS}
          onChange={(event) => {
            event.preventDefault();
            setNewMenu(event.target.value);
          }}
        />
        <TextInput
          value={newRestaurant}
          placeholder="식당이름을 입력하세요"
          disabled={rouletteData.length > MAX_MENUS}
          onChange={(event) => {
            event.preventDefault();
            setNewRestaurant(event.target.value);
          }}
        />
        <Button
          primary
          disabled={!newMenu || !newRestaurant}
          onClick={createMenu}
        >
          메뉴 추가
        </Button>
      </div>
      <Roulette data={rouletteData} />
    </S.Wrapper>
  );
}

export default Home;
