import { Component } from "react";
import { toast } from "react-toastify";

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
            toast.error("Enter something!!");
            return;
        }

        this.props.onSubmit(this.state.searchedName);
        this.setState({ searchedName: '' });
    }


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="searchedName"
                    value={this.state.searchedName}
                    onChange={this.onSearchedNameChange}
                    autoComplete="off"
                />
                <button type="submit" >
                    Search
                </button>
            </form>
    )
}
}