import React, { ReactElement }  from 'react';
import { Data } from '../../helpers/types';

import './styles.css'

interface Props {
    search: string,
    filteredData: Array<Data>
}

const Results: React.FC<Props>= ({search, filteredData}) => {

    const getList = (): Array<ReactElement> => {
        console.log(filteredData)
        const list: Array<ReactElement> = filteredData?.map((data: Data, idx: number) => {
                return <div key={idx}>{data.name}</div>
        })

        return list
    }

    return (
        <div className='results-container'>
           { getList() }
        </div>
    )
}

export default Results;

