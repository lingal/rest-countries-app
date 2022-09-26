import SingleCountryCard from './SingleCountryCard';
import { CardsListContainer } from './styles/CountriesList.styled';
import { useGlobalContext } from '../context';

const CountriesList = () => {
  const { countries } = useGlobalContext();
  return (
    <CardsListContainer>
      {countries?.map((country, idx) => {
        return <SingleCountryCard key={idx} {...country} />;
      })}
    </CardsListContainer>
  );
};

export default CountriesList;
