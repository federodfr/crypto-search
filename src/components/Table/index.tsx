import React from 'react';
import { Data } from '../../helpers/types';

import './styles.css'
import TableRow from './TableRow';

interface Props {
    data: Array<Data>
}

const Table: React.FC<Props> = ({data}) => {

    const tableHeaders = (): Array<string> => {
        const headers = Object.keys(data[0]).map(header => header)
        return headers
    }

    return (
        <table>
            <thead>
                <TableRow headerData={tableHeaders()} />
            </thead>
            <tbody>
                <TableRow rowData={data}/>
            </tbody>
        </table>
    )
}

export default Table;