import { useContext } from 'react';
import { DataContext } from '../App';
import {FilterBarContainer} from './styles/FilterBar.styled';

const FilterBar = () => {
  // const { data, setRegion } = useContext(DataContext);

  // const newData = ['All', ...new Set(data.map((item) => item.region))];

  return (
    <FilterBarContainer>
      {/* <select onChange={(e) => setRegion(e.target.value)}>
        <option value="">Filter by Region</option>
        {newData.map((region, idx) => {
          return (
            <option key={idx} value={region}>
              {region}
            </option>
          );
        })}
      </select> */}
    </FilterBarContainer>
  );
};

export default FilterBar;
