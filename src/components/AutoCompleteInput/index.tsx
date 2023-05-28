import React, { useState } from 'react';
import { useEffect } from 'react';
import { Data } from '../../helpers/types';
import Results from '../Results';

import './styles.css'

interface Props {
    data: Array<Data>,
}

const AutoCompleteInput: React.FC<Props> = ({data}) => {
    const [search, setSearch] = useState<string>('');
    const [showResults, setShowResults] = useState<boolean>(false);

    const filteredData = () => {
        const filteredData: Array<Data> = data?.filter(({name} : {name: string}) => {
            return name?.toLowerCase().startsWith(search.toLowerCase())
        })

        return filteredData
    }

    useEffect(() => {
        setShowResults((search === '') ? false : true)
    },[search])

    return (
        <div>
            <input 
                value={search} 
                onChange={(event) =>setSearch(event.target.value)}
            />
            { (showResults) && 
                <Results 
                    search={search} 
                    filteredData={filteredData()}/>
            }
        </div>
    )
}

export default AutoCompleteInput;
