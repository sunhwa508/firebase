import "./Home.styled";
import * as S from './Home.styled'
import Roulette from "@/pages/Roulette/Roulette";
import React, { useState } from "react";
import {addDoc, collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase-config";
import {useLoaderData} from "react-router-dom";
import firebase from "firebase/compat";


export async function loader() {
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
    const lunchList = useLoaderData() as firebase.firestore.DocumentData;
    const [rouletteData, setRouletteData] = useState<{ id: string; option: string; }[]>(
        lunchList.docs.map((doc: any) => ({ ...doc.data(), option: doc.data().restaurant, id: doc.id }))
    );
    const [newMenu, setNewMenu] = useState("");
    const [newRestaurant, setNewRestaurant] = useState("");
    const usersCollectionRef = collection(db, "menus");

    const createMenu = async () => {
        await addDoc(usersCollectionRef, { menu: newMenu, restaurant: newRestaurant });
        setNewMenu('')
        setNewRestaurant('')
        const data = await getDocs(usersCollectionRef);
        setRouletteData(data?.docs.map((doc) =>
            ({ ...rouletteData, option: doc.data().restaurant, id: doc.id })));
    };

    return (
        <S.Wrapper>
            <div>
                <input
                    value={newMenu}
                    placeholder='메뉴를 입력하세요'
                    onChange={(event) => {
                        event.preventDefault();
                        setNewMenu(event.target.value);
                    }}
                />
                <input
                    value={newRestaurant}
                    placeholder='식당이름을 입력하세요'
                    onChange={(event) => {
                        event.preventDefault();
                        setNewRestaurant(event.target.value);
                    }}
                />
                <button disabled={!newMenu || !newRestaurant} onClick={createMenu}>메뉴 추가</button>
            </div>
            <Roulette data={rouletteData}/>
        </S.Wrapper>
    );
}

export default Home;
