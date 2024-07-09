import { useState, useEffect } from "react";

function App({ url }) {
  const [data, setData] = useState([]);
  const [scrollPer, setScrollPer] = useState(0);

  async function fetchUrl(getUrl) {
    const response = await fetch(getUrl);
    const result = await response.json();

    if (result && result.products && result.products.length > 0) {
      setData(result.products);
    }
    // console.log(result.products);
  }

  useEffect(() => {
    fetchUrl(url);
  }, [url]);

  function handleScroll() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );
    const howMuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPer((howMuchScroll / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  // console.log(scrollPer);
  return (
    <div>
      <div className="top-Container">
        <h1>Scroll Product</h1>
        <div className="scroll-progress">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPer}%` }}
          ></div>
        </div>
      </div>
      <div>
        {data.map((dataItem) => (
          <p>{dataItem.title}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
