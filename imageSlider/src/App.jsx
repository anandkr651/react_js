import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function App({ url, limit = 10, page = 1 }) {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function imageSlider(getUrl) {
    const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
    const data = await response.json();
    if (data) setImage(data);
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") imageSlider(url);
  }, [url]);
  // console.log(image);

  return (
    <div className="relative ">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute left-4 w-16 h-16 top-32"
      />
      {image.map((imageItem, index) => {
        return (
          <img
            key={imageItem.id}
            src={imageItem.download_url}
            alt={imageItem.download_url}
            className={currentSlide === index ? "block" : "hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute top-32 right-4 w-16 h-16"
      />
      <span className="absolute bottom-4 left-1/2 ">
        {image.map((_, index) => (
          <button
            key={index}
            className={
              currentSlide === index
                ? "current-indicator"
                : "current-indicator inactive-indicator"
            }
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </span>
    </div>
  );
}

export default App;
