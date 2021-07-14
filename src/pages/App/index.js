import './style.css';
import arrCountries from '../Carousel/countries.json';
import Country from '../../components/Country';

function App() {
  return (
    <div className="app">
      <img src="https://static.mlstatic.com/org-img/homesnw/img/ml-logo@2x.png?v=4.0" alt="logo" className="logoBig" ></img>
      <ul className='countryList'>
        {arrCountries.map((value, key) => (
          <li>
            <Country value={value} key={key} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
