import './App.css';
import ImageCarousel from './components/ImageCarousel';
import { CarouselData } from './components/CarouselData';

function App() {
  return <ImageCarousel slides={CarouselData} />;
}

export default App;
