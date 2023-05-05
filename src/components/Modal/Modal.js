import { Component } from "react";
import { createPortal } from "react-dom";

const modal = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.keyDown);
    };

      keyDown = e => {
        if (e.code === 'Escape') {
            this.props.onModalClose();
        }
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyDown)
    };

    handleModalClose = e => {
        if (e.currentTarget === e.target) {
            this.props.onModalClose()
        }
    };

    render() {
        return createPortal(
            <div
                onClick={this.handleModalClose}
            >
                <div>{ this.props.children}</div>
            </div>,
            modal)
    }
}