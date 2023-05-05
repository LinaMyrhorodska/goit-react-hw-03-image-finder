import { Component } from "react";
import { toast } from "react-toastify";
import { SearchField, SearchForm, SearchBtn, SearchInput } from "./SearchBar.styled";

export class SearchBar extends Component {
    state = {
        searchedName: '',
    };

    onSearchedNameChange = e => {
        this.setState({ searchedName: e.currentTarget.value.toLowerCase() });
    };

    onSubmit = e => {
        e.preventDefault();

        if (this.state.searchedName.trim() === '') {
            toast.warn("Please enter something in a search field");
            return;
        }

        this.props.onSubmit(this.state.searchedName);
        this.setState({ searchedName: '' });
    }


    render() {
        return (
            <SearchField>
            <SearchForm onSubmit={this.onSubmit}>
                <SearchInput
                    type="text"
                    name="searchedName"
                    value={this.state.searchedName}
                    onChange={this.onSearchedNameChange}
                    autoComplete="off"
                />
                <SearchBtn type="submit" >
                    Search
                </SearchBtn>
            </SearchForm>
            </SearchField>
    )
    };
};