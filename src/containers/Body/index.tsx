import React, { useState } from 'react';
import { Data } from '../../helpers/types';
import AutoCompleteInput from '../../components/AutoCompleteInput'; 
import Table from '../../components/Table';


import './styles.css'

interface Props {
    data: Array<Data>
}

const Body: React.FC<Props> = ({data}) => {
    const [search, setSearch] = useState<string>('')
    const [filteredData, setFilteredData] = useState<Array<Data>>(data)

    return (
        <div>
            <AutoCompleteInput 
                data={data} 
                search={search} 
                setSearch={setSearch} 
                filteredData={filteredData} 
                setFilteredData={setFilteredData}/>
            <Table data={filteredData} highlight={search}/>
        </div>
    )
}

export default Body;