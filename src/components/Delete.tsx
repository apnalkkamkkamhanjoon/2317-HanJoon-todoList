import React from 'react';
import { FiDelete } from "react-icons/fi";

type DeleteProps = {
    onClick? () : void;
}

const Delete = ({onClick}:DeleteProps) => {
    return (
        <div>
            <FiDelete className='deleteBtn' onClick={onClick}/>
        </div>
    );
};

export default Delete;