import { useState } from "react";

export const useLikeForm = (initialValues, onClickHandler) => {
    const [likes, setLikes] = useState(initialValues = 0);

    const changeHandler = (e) => {
        setLikes(state => ({...state, [e.target.name]: e.target.value += 1}));
    };

    const onClick = (e) => {
        e.preventDefault();

        onClickHandler(likes);

        setLikes(initialValues);
    };

    return {
        likes,
        changeHandler,
        onClick
    };
};