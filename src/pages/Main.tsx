import React, { useEffect, useRef, useState } from "react";
import "../styles/Main.css";
import Input from "../components/Input";
import List from "../components/List";
import { RiDeleteBin2Line } from "react-icons/ri";

type listProps = {
  id: number;
  content: string;
};

let today = new Date();
let year = today.getFullYear(); // 년도
let month = ("0" + (today.getMonth() + 1)).slice(-2);
let date = ("0" + today.getDate()).slice(-2);
let week = new Array("일", "월", "화", "수", "목", "금", "토");
let day = today.getDay(); // 요일
let dayName = week[today.getDay()];

const Main = () => {
  // state 선언
  const [text, setText] = useState("");
  const [list, setList] = useState<listProps[]>(() => {
    const storedList = localStorage.getItem("list");
    return storedList ? JSON.parse(storedList) : [];
  });
  const [nextId, setNextId] = useState(list.length + 1);

  // 컴포넌트가 띄워질 때, 로컬 스토리지에서 데이터를 가져와 초기 상태를 설정
  useEffect(() => {
    const saveList = localStorage.getItem("list");
    if (saveList) {
      setList(JSON.parse(saveList));
      setNextId(list.length > 0 ? list[list.length - 1].id + 1 : 1);
    }
  }, []);

  // list가 업데이트 될때 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  // 엔터키 쳤을 때 실행되는 함수
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newList = [
        ...list,
        {
          id: nextId,
          content: text,
        },
      ];
      setList(newList);
      setText("");
      setNextId(nextId + 1);
    }
  };

  // list 업데이트 함수
  const onSetList = (newList: listProps[]) => {
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  };

  //  값이 변경될 때 실행되는 함수
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 삭제 처리하는 함수
  const onDelete = (id: number) => {
    const newList = list.filter((prop) => prop.id !== id);
    onSetList(newList);
    if (newList.length === 0) {
      setNextId(1);
    }
  };

  const onDeleteAll = () => {
    setList([]);
    setNextId(1);
    localStorage.removeItem("list");
  };

  return (
    <>
      <p className="date">
        {year}년 {month}월 {date}일 || TodoList
      </p>
      <Input text={text} onKeyDown={onKeyDown} onChange={onChange} />
      <div className="listBox">
        {list.map((item) => (
          <List
            key={item.id}
            id={item.id}
            content={item.content}
            onDelete={onDelete}
          />
        ))}
      </div>
      <RiDeleteBin2Line className="deleteAllBtn" onClick={onDeleteAll} />
    </>
  );
};

export default Main;
