import "./App.css";
import styled from "styled-components";
import Roulette from "@/pages/Roulette/Roulette";
import React, {useEffect, useState} from "react";
import {addDoc, collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase-config";
import {useLoaderData} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: lavenderblush;
  > div {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    
    input {
      height: 32px;
      font-size: 15px;
      border-radius: 5px;
      border: 2px solid #000;
      padding-left: 10px;
    }
  }
`;

export async function loader () {
    const usersCollectionRef = collection(db, "menus");
    try {
        return await getDocs(usersCollectionRef);
    } catch {
        throw new Response(null, {
            status: 500,
            statusText: 'Internal Server Error',
        });
    }
}

function Home() {
    const [rouletteData, setRouletteData] = useState<{ id: string; option: string; }[]>([{id:'',option: ''}]);
    const [newMenu, setNewMenu] = useState("");
    const [newRestaurant, setNewRestaurant] = useState("");
    const usersCollectionRef = collection(db, "menus");
    const docData = useLoaderData();

    const createUser = async () => {
        await addDoc(usersCollectionRef, { menu: newMenu, restaurant: newRestaurant });
        setNewMenu('')
        setNewRestaurant('')
    };

    useEffect(() => {
        // @ts-ignore
        setRouletteData(docData?.docs.map((doc) =>
            ({ ...rouletteData, option: doc.data().restaurant, id: doc.id })));
    }, []);

    return (
        <Wrapper>
            <div>
                <input
                    value={newMenu}
                    placeholder='메뉴를 입력하세요'
                    onChange={(event) => {
                        setNewMenu(event.target.value);
                    }}
                />
                <input
                    value={newRestaurant}
                    placeholder='식당이름을 입력하세요'
                    onChange={(event) => {
                        setNewRestaurant(event.target.value);
                    }}
                />
                <button disabled={!newMenu || !newRestaurant} onClick={createUser}>메뉴 추가</button>
            </div>
            <Roulette data={rouletteData}/>
        </Wrapper>
    );
}

export default Home;
