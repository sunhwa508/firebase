import "./Home.styled";
import * as S from "./Home.styled";
import Roulette from "@/pages/Roulette/Roulette";
import React, { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase-config";
import { useLoaderData } from "react-router-dom";
import firebase from "firebase/compat";
import { Button, Checkbox, GroupBox, Select, TextInput } from "react95";
import { SelectOption } from "react95/dist/Select/Select.types";

type mealType = "다이어트" | "라이브어트";

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
    { id: string; option: string; type: mealType }[]
  >(
    lunchList.docs.map((doc: any) => ({
      ...doc.data(),
      option: doc.data().restaurant,
      id: doc.id,
    }))
  );

  const [newMenu, setNewMenu] = useState("");
  const [newRestaurant, setNewRestaurant] = useState("");
  const [newType, setNewType] = useState<"다이어트" | "라이브어트">("다이어트");
  const usersCollectionRef = collection(db, "menus");

  const createMenu = async () => {
    await addDoc(usersCollectionRef, {
      menu: newMenu,
      restaurant: newRestaurant,
      type: newType,
    });

    setNewMenu("");
    setNewRestaurant("");
    setNewType("다이어트");

    const data = await getDocs(usersCollectionRef);
    setRouletteData(
      data?.docs.map((doc) => ({
        ...rouletteData,
        option: doc.data().restaurant,
        type: doc.data().type,
        id: doc.id,
      }))
    );
  };
  const [filterTags, setFilterTags] = useState<string[]>([
    "다이어트",
    "라이브어트",
  ]);

  const filteredData = rouletteData.filter((item) =>
    filterTags.length === 0 ? true : filterTags.includes(item.type)
  );

  const toggleFoodType = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setFilterTags([...filterTags, e.target.value]);
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== e.target.value)
      );
    }
  };

  const onChange = <T,>(selectedOption: SelectOption<T>) => {
    setNewType(selectedOption.label as mealType);
  };

  return (
    <S.Wrapper>
      <div>
        <Select
          defaultValue={1}
          options={[
            { label: "다이어트", value: 1 },
            { label: "라이브어트", value: 2 },
          ]}
          menuMaxHeight={160}
          width={160}
          onChange={onChange}
        />
        <TextInput
          value={newMenu}
          style={{ height: 30 }}
          placeholder='메뉴를 입력하세요'
          disabled={rouletteData.length > MAX_MENUS}
          onChange={(event) => {
            event.preventDefault();
            setNewMenu(event.target.value);
          }}
        />
        <TextInput
          value={newRestaurant}
          style={{ height: 30 }}
          placeholder='식당이름을 입력하세요'
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

      <Roulette data={filteredData} />
      <GroupBox label='구분'>
        <div style={{ paddingLeft: "1.5rem" }}>
          <Checkbox
            defaultChecked={true}
            onChange={toggleFoodType}
            value='다이어트'
            label='다이어트'
            name='type'
          />
          <br />
          <Checkbox
            defaultChecked={true}
            onChange={toggleFoodType}
            value='라이브어트'
            label='라이브어트'
            name='type'
          />
        </div>
      </GroupBox>
    </S.Wrapper>
  );
}

export default Home;
