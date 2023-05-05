import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';


export const ImageGallery = ({ images, switchModal }) => {
    return (
        <div>
            <ul>
                <ImageGalleryItem images={images} switchModal={switchModal} />
            </ul>
        </div>
    )
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired,
    switchModal: PropTypes.func.isRequired,
};