import { useState , useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './imageSlider.css';

const ImageSlider = ({url, limit}) => {

  const [images, setImages] = useState([]);
  const [currentSlide , setCurrentSlide] = useState(0);
  const [errorMsg , setErrorMsg] = useState(null);
  const [loading , setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true)

      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await response.json();

      if(data) {
        setImages(data)
        setLoading(false)
      }
    } catch (e) {
      setErrorMsg(e.message)
      setLoading(false)
    }
  }

  function handlePrev() {
    setCurrentSlide(currentSlide === 0 ? images.length -1 : currentSlide -1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide +1)
  }

  useEffect( () => {
    if(url !== "") fetchImages(url)
  }, [url] )


  if(loading) {
    return <div>Loading data...</div>
  }

  if(errorMsg !== null) {
    return <div>Error occured {errorMsg}</div>
  }

  return (
    <div className="imgSlider-container">


      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={handlePrev}/>
       {
        images && images.length ? 
          images.map((image , idx) => (
            <img 
              key={image.id}
              alt={image.download_url}
              src={image.download_url}
              className={ currentSlide === idx ? "current-image" : "current-image hide-current-image" }
            />
          ))
          : null
        }

        <BsArrowRightCircleFill className='arrow arrow-right' onClick={handleNext}/>
        <span className='circle-indicators'>
          {
            images && images.length ?
            images.map( (_, index) => 
            <button 
              key={index} 
              className={currentSlide === index ? 'current-indicator' :'current-indicator inactive-indicator'}
              onClick={ () => setCurrentSlide(index) }  
            >
              
            </button> 
          
          )
            :null
          }
        </span> 

        
    </div>
  )
}

export default ImageSlider