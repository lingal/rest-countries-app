import { useContext } from 'react';
import SingleCountryCard from './SingleCountryCard';
import { DataContext } from '../App';

const CountriesList = () => {
  const { data } = useContext(DataContext);
  return (
    <div>
      {data?.map((item, idx) => {
        return <SingleCountryCard key={idx} {...item} />;
      })}
    </div>
  );
};

export default CountriesList;
