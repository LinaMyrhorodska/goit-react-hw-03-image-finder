import { Component } from "react";
import { toast } from "react-toastify";

export class SearchBar extends Component {
    state = {
        searchedName: '',
    };

    handleSearchedNameChange = e => {
        this.setState({ searchedName: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
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
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="searchedName"
                    value={this.state.searchedName}
                    onChange={this.handleSearchedNameChange}
                />
                <button>
                    Search
                </button>
            </form>
    )
}
}