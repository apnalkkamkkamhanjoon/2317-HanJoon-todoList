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
        <span className="listId">{id}:</span>
        <span className="listContent">{content}</span>
        <Delete onClick={() => onDelete(id)} />
      </ul>
    </>
  );
};

export default List;
