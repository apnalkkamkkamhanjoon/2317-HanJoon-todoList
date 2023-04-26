import React from "react";
import { FiDelete } from "react-icons/fi";

type DeleteProps = {
  onClick?(): void;
};

const Delete = ({ onClick }: DeleteProps) => {
  return <FiDelete className="deleteBtn" onClick={onClick} />;
};

export default Delete;
