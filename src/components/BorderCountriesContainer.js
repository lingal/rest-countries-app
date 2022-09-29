import { Link } from 'react-router-dom';
import { BorderCountriesStyled } from '../components/styles/BorderCountriesContainer.styled';

const BorderCountriesContainer = ({ data }) => {
  return (
    <BorderCountriesStyled>
      <h3>border countries:</h3>
     
      {data?.map((item, idx) => {
        return item ? (
          <span>
            <Link key={idx} to={`/country/${item}`}>
              <span>{item}</span>
            </Link>
          </span>
        ) : null;
      })}

    
    </BorderCountriesStyled>
  );
};

export default BorderCountriesContainer;
