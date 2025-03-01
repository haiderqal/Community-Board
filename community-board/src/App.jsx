import './App.css';
import Board from "./components/community";
import triangImage from './assets/triang.jpg';  // Import the image
import carnImage from './assets/carnival pal.jpg';  // Correct relative path
import pokeImage from './assets/poke bowl.jpg';
import duzImage from './assets/duzan.webp';
import obaImage from './assets/oba.webp';
import heyImage from './assets/heytea.jpeg';
import sunImage from './assets/sunshine.jpg';
import albImage from './assets/albasha.jpg';
import adelImage from './assets/adels-famous-halal.jpg';
import bashImage from './assets/bashir.jpg';


const App = () => {

const cardData = [

  { title: "Triangulo Pizzeria", imgUrl: triangImage, link: "https://triangulopizza.com/" },
  { title: "Carnival Palace Chinese Restaurant", imgUrl: carnImage, link: "https://www.yelp.com/biz/carnival-house-chinese-restaurant-woodhaven-2/"},
  { title: "Poke Bowl", imgUrl: pokeImage, link: "https://pokebowlny.com/locations/bryant-park/"},
  { title: "Duzan", imgUrl: duzImage, link: "https://www.duzannyc.com/"},
  { title: "Oba Grill", imgUrl: obaImage, link: "https://www.duefratellijamaica.com/"},
  { title: "Hey Tea", imgUrl: heyImage, link: "https://www.obagrill.com/"},
  { title: "Sunshine Restaurant", imgUrl: sunImage, link: "https://www.sunshinerestaurantny.com/jackson-heights/"},
  { title: "Adel's Famous Halal Food", imgUrl: adelImage, link: "https://adelsfamoushalalfood.com/"},
  { title: "Bashir Halal Food", imgUrl: bashImage, link: "https://www.yelp.com/biz/bashir-halal-food-queens-2"},
  { title: "Albasha Grill", imgUrl: albImage, link: "https://albashamedgrill.com/about-us/"},

]

  return (

    <div className="App">
    <h1>Community-Board</h1>
    <h2>Welcome to a Community Board built by Haider Ali to get to know the best restaurants in New York City!</h2>

    <div className="card-container">
      {cardData.map((data, index) => (
        <Board key={index} title={data.title} imgUrl={data.imgUrl} link={data.link} />
      ))}
    </div>
  </div>
);
};

export default App;