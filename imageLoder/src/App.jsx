import { useEffect, useState} from 'react';

function App() {
  const [image, setImage] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function imageLoading() {
    const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
    const data = await response.json();

    if (data && data.products && data.products.length) {
      setImage((prevData) => [...prevData, ...data.products]);
    }
    console.log(data);
  }

  useEffect(() => {
    imageLoading();
  }, [count]);

  useEffect(() => {
    if (image.length >= 100) {
      setDisableButton(true);
    }
  }, [image]);

  return (
    <div className=" ">
      <div className="flex flex-wrap justify-around ">
        {image.length
          ? image.map((item) => (
              <div key={item.id} className="border mx-2 my-2 bg-slate-300">
                <img src={item.thumbnail} alt={item.title}/>
                <p className='text-cyan-900 '>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load more data
        </button>
        {disableButton ? <p>100 images loaded</p> : null}
      </div>
    </div>
  );
}

export default App;

