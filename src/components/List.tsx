import React from "react";
import Delete from "./Delete";

type ListProps = {
  id: number;
  content: string;
  onDelete(id: number): void;
};

const List = ({ id, content, onDelete }: ListProps) => {
  return (
    <>
      <ul className="list">
        <li>
          <span className="listContent">{content}</span>
          <Delete onClick={() => onDelete(id)} />
        </li>
      </ul>
    </>
  );
};

export default List;
