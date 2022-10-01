import { Link } from 'react-router-dom';
import { BorderCountriesStyled } from '../components/styles/BorderCountriesContainer.styled';

const BorderCountriesContainer = ({ data }) => {
  return (
    <BorderCountriesStyled>
      <h3>border countries:</h3>

      <div>
        {data?.map((item, idx) => {
          return item ? (
            <Link key={idx} to={`/country/${item}`}>
              <span>{item}</span>
            </Link>
          ) : null;
        })}
      </div>
    </BorderCountriesStyled>
  );
};

export default BorderCountriesContainer;
