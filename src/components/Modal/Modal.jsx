import { useEffect, useRef } from "react";
import css from "./Modal.module.css";
import PropTypes from "prop-types";

export const Modal = ({largeImageURL, closeModal}) => {

   const closeModalRef = useRef(closeModal);

   useEffect(() => {
      closeModalRef.current = closeModal;
   }, [closeModal]);

   useEffect(() => {
      const handleKeyDown = e => {
         if (e.code === "Escape") {
            closeModalRef.current();
            console.log("Pressed Escape");
         }
      }
      
      window.addEventListener("keydown", handleKeyDown);
      return () => {
         window.removeEventListener("keydown", handleKeyDown);

      }
   }, []);

   
   return (
      <div className={css.overlay}>
         <div className={css.modal}>
            <img src={largeImageURL} alt="modal" loading="lazy"/>
         </div>
      </div>
   );   
}

Modal.propTypes = {
   largeImageURL: PropTypes.string.isRequired,
   closeModal: PropTypes.func.isRequired
}