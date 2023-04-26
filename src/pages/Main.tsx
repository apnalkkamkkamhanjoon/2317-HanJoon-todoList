import React, { useEffect, useRef, useState } from "react";
import "../styles/Main.css";
import Input from "../components/Input";
import List from "../components/List";
import { RiDeleteBin2Line } from "react-icons/ri";

let today = new Date();
let year = today.getFullYear();
let month = ("0" + (today.getMonth() + 1)).slice(-2);
let date = ("0" + today.getDate()).slice(-2);

type listProps = {
  id: number;
  content: string;
};

const Main = () => {
  // state 선언
  const [text, setText] = useState("");
  const [list, setList] = useState<listProps[]>(() => {
    const storedList = localStorage.getItem("list"); // localStorage에서 list 가져옴
    return storedList ? JSON.parse(storedList) : []; // 가져온 데이터가 있으면 JSON으로 변환하여 반환하고 없으면 빈 배열 반환
  });
  const [nextId, setNextId] = useState(list.length + 1); // list id 값

  // 컴포넌트가 렌더링 될 때, localStorage에서 데이터를 가져와 초기 상태를 설정
  useEffect(() => {
    const saveList = localStorage.getItem("list");
    if (saveList) {
      setList(JSON.parse(saveList)); // 가져온 데이터가 있다면 JSON을 문자열로 변환하여 setList에 설정
      setNextId(list.length > 0 ? list[list.length - 1].id + 1 : 1);
    }
  }, []);

  // list가 업데이트 될때 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list)); // list의 값을 JSON 문자열로 변환하여 list 항목에 저장
  }, [list]);

  // 엔터키 쳤을 때 실행되는 함수
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newList = [
        ...list, // list 복사
        {
          id: nextId, // 새로운 id는 nextId
          content: text, // 새로운 내용은 현재 input의 값인 text
        },
      ];
      setList(newList); // newList로 업데이트
      setText(""); // input 값 초기화
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
    const newList = list.filter((prop) => prop.id !== id);  // 해당 아이템을 제외한 새로운 list 생성
    onSetList(newList);   // list를 업데이트하고 localStorage에 저장
    if (newList.length === 0) {
      setNextId(1);   //  리스트가 비여있는 경우 nextId를 1로 초기화
    }
  };

  const onDeleteAll = () => {
    setList([]);
    setNextId(1);
    localStorage.removeItem("list"); // localStorage에서 list 제거
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
