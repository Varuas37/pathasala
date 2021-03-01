import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

interface Person {
    firstName: String;
    lastName: String;
}

interface Props {
    text: String;
    ok?: boolean;
    i?: number;
    fn?: (bob: String) => void;
    person?: Person;
    handleChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void);
}


const QuestionCard: React.FC<Props> = ({ handleChange }) => {
    const [count, setCount] = useState<{ text: string }>({ text: "Hello" });
    const inputRef = useRef<HTMLInputElement | null>(null);
    const divRef = useRef<HTMLDivElement | null>(null);

    return (
        <div>
            <input ref={inputRef} onChange={handleChange} />
            <div ref={divRef}></div>

        </div>
    )
}

// QuestionCard.propTypes = {

// }

export default QuestionCard;

