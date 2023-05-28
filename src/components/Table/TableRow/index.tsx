import React from 'react';
import { reduceNumbers } from '../../../helpers';
import { getDictionary } from '../../../helpers/dictionary';
import { Data } from '../../../helpers/types';
import HighlightedText from '../../HighlightedText';


interface Props {
    rowData?: Array<Data>,
    headerData?: Array<string>,
    highlight?: string
}

const TableRow: React.FC<Props> = ({headerData, rowData, highlight}) => {
    const parseCells = (key: string, value: any) => {
        switch(true) {
            case (value === null || value === undefined):
                return ''
            case (key === "explorer"):
                return <a href={value} target="_blank" rel="noreferrer">Site</a>
            case (key === "changePercent24Hr"):
                return `${Number(value).toFixed(2)}%`
            case (key === "logo"):
                return <img width='32px' src={value} alt='crypto-logo'/>
            case (!isNaN(value)): 
                return key !== 'rank' ? `$${reduceNumbers(Number(value))}` : value
            case (key === "name"):
                return <HighlightedText highlight={highlight ? highlight : ''} value={value}/>
            default: 
                return value
        }
    }

    const getTableData = () => {
        if(headerData){
            const headers = headerData.map((header: string, index: number) => (
                <th key={index}>{getDictionary(header)}</th>
            ))
            return (<tr>{headers}</tr>)
        } else if(rowData) {
            const row = rowData.map((dataElement: Data, index: number) => {
                return (
                    <tr key={index}>
                        {Object.entries(dataElement).map(([key, value]: Array<string>, index: number) =>{
                            return <td key={index}>{parseCells(key, value)}</td>}
                        )} 
                    </tr>
                )
            })
    
            return row
        } else {
            console.error('Is mandatory loads headers data or rows data')
        }
    }

    return (
        <>{getTableData()}</>
    )
}

export default TableRow;