import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string' // extrae mas facil los parametros del url

// const queryString = require('query-string');
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';


export const SearchPage = () => {

  const navigate = useNavigate(); // navegamos en el url
  const location = useLocation(); // leemos el url , tiene una variable "search"

  const { q = '' } = queryString.parse( location.search ); // parsea el url
  const heroes = getHeroesByName(q);

  const showSearch = ( q.length === 0  );
  const showError = ( q.length > 0 ) && heroes.length === 0;
  
  const { searchText, onInputChange  } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if( searchText.trim().length <= 1 ) return;
    console.log("testing... FORM");
    navigate(`?q=${ searchText }`); // le añade esto al url actual
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      
      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit } aria-label="form" >
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>

          </form>
        </div>

        <div className="col-7">

          <h4>Results</h4>
          <hr />
          
          {/* FORMA 1 */}
          {/* {
            ( q === '' )
              ? <div className="alert alert-primary"> Search a hero </div>
              : ( heroes.length === 0 )
                && <div className="alert alert-danger"> No hero with <b>{ q }</b> </div>
          } */}

          {/* FORMA 2 */}
          <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none'}}> 
            Search a hero 
          </div>

          <div aria-label="alert-danger" className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none'}}>
            No hero with <b>{ q }</b> 
          </div>

          {
            heroes.map( hero => ( 
                <HeroCard key={ hero.id } { ...hero } />
            ))
          }

        </div>
        
      </div>
      
    </>
  )
}
