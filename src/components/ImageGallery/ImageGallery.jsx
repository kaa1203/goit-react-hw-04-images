import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";
import PropTypes from "prop-types";

export const ImageGallery = ({ images }) => {
   let d = new Date();
   d = d.getTime();
   d = d.toString().slice(-6);
   
   return (
      <ul className={css.galleryList}>
         {
            images.map(image => (
               <ImageGalleryItem
                  key={image.id+d}
                  webformatURL={image.webformatURL}
                  largeImageURL={image.largeImageURL}
                  tags={image.tags}
               />
            ))
         }
      </ul>
   );
}

ImageGallery.propTypes = {
   images: PropTypes.array.isRequired
}