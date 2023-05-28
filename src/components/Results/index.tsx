import React from 'react';
import { Data } from '../../helpers/types';
import HighlightedText from '../HighlightedText';

import './styles.css'

interface Props {
    search: string,
    filteredData: Array<Data>,
    setSearch: React.Dispatch<React.SetStateAction<string>>

}

const Results: React.FC<Props>= ({search, setSearch, filteredData}) => {
    const getList =() => {
        const list = filteredData?.map((data: Data, idx: number) => {
            return (
                <div key={idx} onClick={() => setSearch(data.name)}>
                    <HighlightedText highlight={search} value={data.name}/>
                </div>
            )
        })
        return list
    }

    return (
        <div>
           { getList() }
        </div>
    )
}

export default Results;

