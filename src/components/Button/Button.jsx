import css from "./Button.module.css";
import PropTypes from "prop-types";

export const Button = ({ loadMore }) => {
   const handleOnClick = () => {
      loadMore();
   }

   return (
    <button className={css.loadButton} onClick={handleOnClick}>Load More</button>
   ); 
}

Button.propTypes = {
   loadMore: PropTypes.func.isRequired
}