import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";
import { SearchBar } from './SearchBar/SearchBar';


export class App extends Component {
  state = {
    searchedName: '',
  };

  handleFormSubmit = searchedName => {
    this.setState({searchedName })
}

  render() {
    return (
    <Layout>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={2000}/>
        <GlobalStyle />
    </Layout>
    );
  }
};
