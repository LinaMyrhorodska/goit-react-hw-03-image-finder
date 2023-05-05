import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images, switchModal }) => {
    return (
        <div>
            {
                images.map(item => (
                    <li
                        key={item.id}
                        onClick={() => switchModal(item.largeImageURL, item.tags) }
                    >
                        <img
                            loading="lazy"
                            src={item.webformatURL}
                            alt={item.tags}
                        />
                    </li>
                ))
            }
        </div>
    )
};

ImageGalleryItem.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired,
    switchModal: PropTypes.func.isRequired,
};