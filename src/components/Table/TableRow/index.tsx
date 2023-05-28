import React from 'react';
import { reduceNumbers } from '../../../helpers';
import { getDictionary } from '../../../helpers/dictionary';
import { Data } from '../../../helpers/types';
import HighlightedText from '../../HighlightedText';

interface Props {
  rowData?: Array<Data>;
  headerData?: Array<string>;
  highlight?: string;
}

const TableRow: React.FC<Props> = ({ headerData, rowData, highlight }) => {
  //TO DO: make parse on endpoint to avoid switch statements. Redifine Json format to allow it.
  const parseCells = (key: string, value: any) => {
    switch (true) {
      case value === null || value === undefined:
        return '';
      case key === 'explorer':
        return (
          <a href={value} target="_blank" rel="noreferrer">
            Site
          </a>
        );
      case key === 'changePercent24Hr':
        return `${Number(value).toFixed(2)}%`;
      case key === 'logo':
        return <img width="32px" src={value} alt="crypto-logo" />;
      case !isNaN(value):
        return key !== 'rank' ? `$${reduceNumbers(Number(value))}` : value;
      case key === 'name':
        return (
          <HighlightedText
            highlight={highlight ? highlight : ''}
            value={value}
          />
        );
      default:
        return value;
    }
  };

  const getHeaders = (headerData: Array<string>) => {
    const headers = headerData.map((header: string, index: number) => (
      <th key={index} className="table-data-header">
        {getDictionary(header)}
      </th>
    ));

    return (
      <tr className="table-row-header">
        <th className="table-data-header" />
        {headers}
        <th className="table-data-header" />
      </tr>
    );
  };

  const getRows = (rowData: Array<Data>) => {
    const rows = rowData.map((dataElement: Data, index: number) => {
      return (
        <tr key={index} className="table-row-body">
          <td />
          {Object.entries(dataElement).map(
            ([key, value]: Array<string>, index: number) => {
              return <td key={index}>{parseCells(key, value)}</td>;
            }
          )}
          <td />
        </tr>
      );
    });

    return rows;
  };

  const getTableData = () => {
    if (headerData) {
      return getHeaders(headerData);
    } else if (rowData) {
      return getRows(rowData);
    }

    return;
  };

  return <>{getTableData()}</>;
};

export default TableRow;
