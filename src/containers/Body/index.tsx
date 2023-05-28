import React from 'react';
import { Data } from '../../helpers/types';
import AutoCompleteInput from '../../components/AutoCompleteInput'; 
import Table from '../../components/Table';


import './styles.css'

interface Props {
    data: Array<Data>
}

const Body: React.FC<Props> = ({data}) => {
    return (
        <div>
            <AutoCompleteInput data={data}/>
            <Table data={data} />
        </div>
    )
}

export default Body;