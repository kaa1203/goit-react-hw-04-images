import { useState } from "react";
import css from  "./Searchbar.module.css";
import PropTypes from "prop-types";

export const Searchbar = ({ setSearchValue }) => {
   let [search, setSearch] = useState('');

   const handleOnChange = e => {
      setSearch(e.target.value);
   }

   const handleOnSubmit = e => {
      e.preventDefault();
      search = search.trim().toLowerCase();

      if (search === "") {return}

      if (search === e.target.value) { console.log("Try typing a different word!")}

      setSearchValue(search);
      setSearch('');
   }

   return (
      <header className={css.searchbar}>
            <div className={css.container}>
               <form className={css.form} onSubmit={ handleOnSubmit}>
                  <button type="submit" className={css.button}>
                     <span className="button-label">Search</span>
                  </button>

                  <input
                     className={css.input}
                     type="text"
                     autoComplete="off"
                     autoFocus
                     placeholder="Search images and photos"
                     value={search}
                     onChange={handleOnChange}
                  />
               </form>
            </div>
         </header>
   );
}

Searchbar.propTypes = {
   setSearchValue: PropTypes.func.isRequired
}