import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";
import { SearchBar } from './SearchBar/SearchBar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { getImages } from './API/getImages';
import { toast } from "react-toastify";

export class App extends Component {
  state = {
    searchedName: '',
    images: [],
    showModal: false,
    page: 1,
    total: 1,
    loading: false,
    error: null,
    empty: false,
    largeImageURL: '',
    alt: '',
    showSuccessToast: true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchedName !== this.state.searchedName || prevState.page !== this.state.page || prevProps !== this.props) {
      this.API(this.state.searchedName, this.state.page);
    }
  };

 API = (name, page) => {
  this.setState({ loading: true });

  getImages(name, page)
    .then(r => r.json())
    .then(data => {
      if (data.hits.length === 0) {
        this.setState({ empty: true });
         toast.error(`No images found for "${name}"`);
      } else {
        this.setState(prevState => ({
          page: prevState.page,
          images: [...prevState.images, ...data.hits],
          total: data.total,
        }));

        if (this.state.page === 1) {
          toast.success(`${data.totalHits} images were found`);
          this.setState({ showSuccessToast: false });
        }
      }
        if (this.state.page >= Math.ceil(data.totalHits / 12) && this.state.page !== 1 ) {
          toast.warning("No more pictures left!");
        };

    })
    .catch(error => {
      this.setState({ error: error.message });
    })
    .finally(() => {
      this.setState({ loading: false });
    });
};
  
  onFormSubmit = searchedName => {

    this.setState({
      searchedName,
      images: [],
      page: 1,
      total: 1,
      loading: false, 
      error: null,
      showModal: false,
      empty: false, 
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      showSuccessToast: true,
    }));
};

  onModalOpen = (largeImageURL, alt) => {
    this.setState({ showModal: true, largeImageURL, alt });
  };

  onModalClose = () => {
    this.setState({ showModal: false, largeImageURL: '', alt: '' });
  }

  render() {
    return (
      <Layout>
        <ToastContainer autoClose={2000} />
        <SearchBar onSubmit={this.onFormSubmit} />
        <ImageGallery switchModal={this.onModalOpen} images={this.state.images} />
        {this.state.loading && <Loader />}
        {!this.state.noMorePictures && this.state.total / 12 > this.state.page && (
          <Button onClick={this.onLoadMore} />)}
        {this.state.showModal &&
          (<Modal onModalClose={this.onModalClose}>
            <img src={this.state.largeImageURL} alt={this.state.alt} />
          </Modal>
          )}
        <GlobalStyle />
      </Layout>
    );
  }
};
