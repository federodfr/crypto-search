import React, { useEffect, useState } from 'react';
import { getAssetsData } from '../../api/assets';
import { Data } from '../../helpers/types';
import Results from '../Results';

import './styles.css';

interface Props {
  data: Array<Data>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filteredData: Array<Data>;
  setFilteredData: React.Dispatch<React.SetStateAction<Array<Data>>>;
}
//TO DO: Isolate in a new component Input to mantain concistency on code
//TO DO: Check useDebounce to solve concurrency of promises instead of controller
const AutoCompleteInput: React.FC<Props> = ({
  data,
  search,
  setSearch,
  filteredData,
  setFilteredData
}) => {
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      await getAssetsData('https://api.coincap.io/v2/assets', {
        signal: controller.signal
      })
        .then((response) => {
          const dataFetched = response?.data;
          const filteredFetchedData: Array<Data> = dataFetched?.filter(
            ({ name }: { name: string }) => {
              return name?.toLowerCase().startsWith(search.toLowerCase());
            }
          );
          filteredFetchedData?.length > 0
            ? setFilteredData(filteredFetchedData)
            : setFilteredData(data);
        })
        .finally(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        });
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [search, data, setFilteredData]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowResults(true);
    setIsLoading(true);
    setSearch(event.target.value);
  };

  const handleOnFocus = () => {
    setShowResults(true);
  };

  const handleOnBlur = () => {
    setShowResults(false);
  };

  return (
    <div>
      <div
        className={`autocomplete-input-container 
                ${showResults && 'autocomplete-input-show-results'}`}
      >
        <input
          className="autocomplete-input"
          value={search}
          onChange={(event) => handleOnChange(event)}
          onFocus={() => handleOnFocus()}
          onBlur={() => handleOnBlur()}
        />
      </div>
      {showResults && (
        <Results
          isLoading={isLoading}
          search={search}
          filteredData={filteredData?.slice(0, 10)}
          setSearch={setSearch}
          setShowResults={setShowResults}
        />
      )}
    </div>
  );
};

export default AutoCompleteInput;
