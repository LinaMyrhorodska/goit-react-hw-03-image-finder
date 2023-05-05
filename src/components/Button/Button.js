import { SearchBtn } from "./Button.styled";

export const Button = ({onClick}) => {
    return (
        <SearchBtn type="button" onClick={onClick}>
            Load more
        </SearchBtn>
    )
};