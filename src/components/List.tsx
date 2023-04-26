import React from "react";
import Delete from "./Delete";

type listProps = {
  id: number;
  content: string;
};

type ListProps = {
  id: number;
  content: string;
  onDelete(id: number): void;
};

const List = ({ id, content, onDelete }: ListProps) => {
  return (
    <>
      <ul className="list">
        <p className="listId">{id}:</p>
        <p className="listContent">{content}</p>
        <Delete onClick={() => onDelete(id)} />
      </ul>
    </>
  );
};

export default List;
