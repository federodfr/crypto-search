import React from 'react';
import { Data } from '../../helpers/types';
import AutoCompleteInput from '../../components/AutoCompleteInput'; 

import './styles.css'

interface Props {
    data: Array<Data>
}

const Body: React.FC<Props> = ({data}) => {
    return (
        <div className='container'>
            <AutoCompleteInput data={data}/>
        </div>
    )
}

export default Body;