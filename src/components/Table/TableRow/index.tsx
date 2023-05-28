import React from 'react';
import { reduceNumbers } from '../../../helpers';
import { Data } from '../../../helpers/types';


interface Props {
    rowData?: Array<Data>,
    headerData?: Array<string>
}

const TableRow: React.FC<Props> = ({headerData, rowData}) => {

    const parseCells = (key: string, value: any) => {
        switch(true) {
            case (value === null || value === undefined):
                return <td></td>
            case (key === "explorer"):
                return(
                    <td>
                        <a href={value} target="_blank" rel="noreferrer"> Site</a>
                    </td>
                )
            case (key === "changePercent24Hr"):
                return <td>{Number(value).toFixed(2)}%</td>
            case (key === "logo"):
                return <td><img width='32px' src={value} alt='crypto-logo'/></td>
            case (!isNaN(value)): 
                return <td>{key !== 'rank' ? `$${reduceNumbers(Number(value))}` : value}</td>
        
            default: 
                return <td>{value}</td>
        }
    }

    const getTableData = () => {
        if(headerData){
            const headers = headerData.map((header: string) => (
                <th >{header}</th>
            ))
            return (<tr>{headers}</tr>)
        } else if(rowData) {
            const row = rowData.map(dataElement => {
                return (
                    <tr >
                        {Object.entries(dataElement).map(([key, value]) => <td>{parseCells(key, value)}</td>)}
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