import { useState } from "react";
import css from "./ImageGalleryItem.module.css";
import { Modal } from "components/Modal/Modal";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
   const [isOpen, setIsOpen] = useState(false);

   const closeModal = () => {
      setIsOpen(false);
   }

   const openModal = () => {
      setIsOpen(!isOpen);
   }
   
   return (
      <li className={css.galleryItem} onClick={openModal}>
         <img src={webformatURL} className={css.galleryImage} alt={tags} loading="lazy"/>
         { isOpen && 
            <Modal 
               closeModal={closeModal}
               largeImageURL={largeImageURL} />}
      </li>
   );
}

ImageGalleryItem.propTypes = {
   webformatURL: PropTypes.string.isRequired,
   largeImageURL: PropTypes.string.isRequired,
   tags:PropTypes.string.isRequired
}