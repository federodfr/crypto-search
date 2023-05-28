import React from "react";
import { Data } from "../../helpers/types";
import TableRow from "./TableRow";

import "./styles.css";

interface Props {
  data: Array<Data>;
  highlight: string;
}

const Table: React.FC<Props> = ({ data, highlight }) => {
  const tableHeaders = (): Array<string> => {
    const headers = Object.keys(data[0]).map((header) => header);
    return headers;
  };

  return (
    <table>
      <thead>
        <TableRow headerData={tableHeaders()} />
      </thead>
      <tbody>
        <TableRow rowData={data} highlight={highlight} />
      </tbody>
    </table>
  );
};

export default Table;
