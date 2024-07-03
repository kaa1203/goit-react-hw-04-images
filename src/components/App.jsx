import { fetchAPI } from "pixabay-api";
import { useEffect, useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import toast, { Toaster } from "react-hot-toast";


export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isError, setIsError] = useState(null);
  
  useEffect(() => {
    const fetchImages = async () => { 
      try {

        fetchAPI(currentPage, searchQuery).then(val => {
          const { hits, totalHits } = val;
          
          if(isEnd) {
            toast.error("Sorry you've reached the end!");
            return;
          }

          if (searchQuery !== '') {
            if (hits.length > 0 && currentPage === 1) {
              toast.success(`Showing a total of ${totalHits} images!`);
            }

            if(hits.length === 0 ) {
              toast.error("No results found!");
            }

            setTimeout(() => {
              setImages(prevImages => [...prevImages, ...hits]);
            }, 1000);
            setIsEnd(12 * currentPage > totalHits);
          }
          
        });
        
      } catch (error) {
        toast.error(error)
        setIsError(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      }
    }

    fetchImages();
  }, [searchQuery, currentPage, isEnd]);

  const setSearchValue = searchValue => {
    if (searchValue !== searchQuery) {
      setImages([]);
      setSearchQuery(searchValue);
      setCurrentPage(1);
      setIsLoading(true);
    }
  }

  const loadMore = () => {
    setCurrentPage(prevState => prevState + 1);

  }

  console.log(isEnd);
  return (
    <>
      <Searchbar setSearchValue={setSearchValue} />
      { isLoading && currentPage === 1 && <Loader/> }
      <ImageGallery images={images}/>
      { !isLoading && !isError && !isEnd && images.length > 0 && 
        <Button loadMore={loadMore}/> }
      <Toaster
          position="top-right"
          reverseOrder={false}
        />
    </>
  );
};
