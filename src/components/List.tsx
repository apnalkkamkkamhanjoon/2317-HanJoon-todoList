import React from "react";
import Delete from "./Delete";

type ListProps = {
  id: number;
  content: string;
};

const List = ({ id, content }: ListProps) => {
  return (
    <>
      <ul className="list">
        {id}: {content}
        <Delete />
      </ul>
    </>
  );
};

export default List;
