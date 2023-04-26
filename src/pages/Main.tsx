import React, { useState } from "react";
import "../styles/Main.css";
import Input from "../components/Input";
import List from "../components/List";

type listProps = {
  id: number;
  content: string;
};

const Main = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState<listProps[]>([
    {
      id: 1,
      content: "응기잇 뿡삥빵뽕",
    },
    {
      id: 2,
      content: "할일 2",
    },
    {
      id: 3,
      content: "할일 3",
    },
  ]);

  return (
    <>
      <Input text={text} />
      <div className="listBox">
        {list.map((item) => (
          <List key={item.id} id={item.id} content={item.content} />
        ))}
      </div>
    </>
  );
};

export default Main;
