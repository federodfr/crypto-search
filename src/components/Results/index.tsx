import React from 'react';
import { Data } from '../../helpers/types';
import HighlightedText from '../HighlightedText';

import './styles.css'

interface Props {
    search: string,
    filteredData: Array<Data>,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    isLoading: boolean

}

const Results: React.FC<Props>= ({search, setSearch, filteredData, isLoading}) => {
    const getList =() => {
        const list = filteredData?.map((data: Data, idx: number) => {
            return (
                <div 
                    key={idx} 
                    onClick={() => setSearch(data.name)} 
                    onMouseDown={(event) => event.preventDefault()}>
                    <HighlightedText highlight={search} value={data.name}/>
                </div>
            )
        })
        return list
    }

    return (
        <div>
           { !isLoading ? getList() : <div> Loading ...</div>}
        </div>
    )
}

export default Results;

