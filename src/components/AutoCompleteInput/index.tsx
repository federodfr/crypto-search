import React, { useEffect, useState } from 'react';
import { getAssetsData } from '../../api/assets';
import { Data } from '../../helpers/types';
import Results from '../Results';

import './styles.css'

interface Props {
    data: Array<Data>,
}

const AutoCompleteInput: React.FC<Props> = ({data}) => {
    const [search, setSearch] = useState<string>('')
    const [filteredData, setFilteredData] = useState<Array<Data>>(data);
    const [showResults, setShowResults] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            await getAssetsData("https://api.coincap.io/v2/assets", {signal: controller.signal})
                .then(response => {
                    const dataFetched = response.data;
                    const filteredData: Array<Data> = dataFetched?.filter(({name} : {name: string}) => {
                        return name?.toLowerCase().startsWith(search.toLowerCase())
                    })
                    setFilteredData(filteredData)
                })
        }

        fetchData()
        return () => {
            controller.abort()
        }
    },[search, data, setFilteredData])
    console.log(showResults)
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
                    search={search} 
                    filteredData={filteredData?.slice(0, 10)} 
                    setSearch={setSearch}/>
            }
        </div>
    )
}

export default AutoCompleteInput;
