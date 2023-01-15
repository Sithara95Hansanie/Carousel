import './App.css';
import Carousel from './components/carousel';
const ImageData = [
  {
    image:"https://www.w3schools.com/bootstrap/chicago.jpg",
    title: "accusamus beatae ad facilis cum similique qui sunt",
    subTitle: "first sub"
  },
  {
    image:"https://www.w3schools.com/bootstrap/ny.jpg",
    title: "reprehenderit est deserunt velit ipsam",
    subTitle: "second sub"

  },
  {
    image:"https://www.w3schools.com/bootstrap/la.jpg",
    title: "officia porro iure quia iusto qui ipsa ut modi",
    subTitle: "third sub"
  }
];
function App() {
  return (
    <div>
      <Carousel slides={ImageData} />
    </div>
  );
}

export default App;
