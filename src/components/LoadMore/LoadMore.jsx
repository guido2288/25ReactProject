import {useEffect,  useState } from "react";
import "./loadMore.css";

const LoadMore = () => {

  const [images, setImages] = useState([]);
  const [imgSelected, setImgSelected] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true)
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=12`)
      .then( res =>{
        return res.json()
      } )
      .then( data =>{
        setImages(data)
        setLoading(false)
      } )  

  }, [page])

  

  return (
    <>
        <div className="gallery">
            {
              images.map( img => (
                <img 
                  className="img-box" 
                  src={img.download_url} 
                  key={img.id} 
                  alt={img.url} 
                  onClick={ () => setImgSelected(img) }
                  />
              ) )
            }

            {
              imgSelected ? 
            <div className="full-img">
              <img src={imgSelected.download_url} alt={imgSelected.url} />
              <p>{imgSelected.author}</p>
              <span onClick={ () => setImgSelected(null) }>x</span>
            </div>

            :""
            }

        </div>
            {
              loading && <p>Loading more images...</p>
            }

        <div className="loadMoreBtn">
          <button onClick={ () =>  setPage( pervState => pervState += 1 )}>Load More</button>
        </div>
    </>

  )
}

export default LoadMore