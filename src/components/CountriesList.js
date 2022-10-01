import SingleCountryCard from './SingleCountryCard';
import { CardsListContainer } from './styles/CountriesList.styled';
import { useGlobalContext } from '../context';
import Loader from './Loader';

const CountriesList = () => {
  const { countries, isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <CardsListContainer>
        {countries?.map((country, idx) => {
          return <SingleCountryCard key={idx} {...country} />;
        })}
      </CardsListContainer>
    </>
  );
};

export default CountriesList;
