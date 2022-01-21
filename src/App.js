import React, { useState } from "react";
import ImageSlider from "./components/ImageSlider"; // import ImageSlider
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://demo5110359.mockable.io/images`
    )
      .then((response) => response.json())
      .then(({ images }) => images.map(({ webformatURL }) => webformatURL))
      .then(setImages);
  };

  return (
    <div className="App">
      <h1>Image Slider</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value="Search" />
      </form>

      <ImageSlider images={images} /> {/* return ImageSlider and pass images as a prop */}
    </div>
  );
};

export default App;