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
        <span className="list-id">{id}:</span>
        <span className="list-content">{content}</span>
        <Delete onClick={() => onDelete(id)} />
      </ul>
    </>
  );
};

export default List;
