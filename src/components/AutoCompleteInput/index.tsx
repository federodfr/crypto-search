import React, { useEffect, useState } from 'react';
import { getAssetsData } from '../../api/assets';
import { Data } from '../../helpers/types';
import Results from '../Results';

import './styles.css'

interface Props {
    data: Array<Data>,
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    filteredData: Array<Data>,
    setFilteredData: React.Dispatch<React.SetStateAction<Array<Data>>>
}

const AutoCompleteInput: React.FC<Props> = ({data, search, setSearch, filteredData, setFilteredData}) => {
    const [showResults, setShowResults] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            await getAssetsData("https://api.coincap.io/v2/assets", {signal: controller.signal})
                .then(response => {
                    const dataFetched = response?.data;
                    const filteredFetchedData: Array<Data> = dataFetched?.filter(({name} : {name: string}) => {
                        return name?.toLowerCase().startsWith(search.toLowerCase())
                    })
                    filteredFetchedData ? setFilteredData(filteredFetchedData) : setFilteredData(data)
                }
            )
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)
            })
        }
        fetchData()
    return () => {
        controller.abort()
    }

    },[search, data, setFilteredData])
    
    return (
        <div>
            <div>
                <input 
                    value={search} 
                    onChange={(event) =>setSearch(event.target.value)}
                    onFocus={() => setShowResults(true)} 
                    onBlur={() => setShowResults(false)} 
                />
            </div>
            { (showResults) && 
                <Results 
                    isLoading={isLoading}
                    search={search} 
                    filteredData={filteredData?.slice(0, 10)} 
                    setSearch={setSearch}/>
            }
        </div>
    )
}

export default AutoCompleteInput;
