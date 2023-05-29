import React from "react";
import { Data } from "../../helpers/types";
import HighlightedText from "../HighlightedText";

import "./styles.css";

interface Props {
  search: string;
  filteredData: Array<Data>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
}
//TO DO: Solve bug when click on an result the container doesn't close it. useEffect to close?
const Results: React.FC<Props> = ({
  search,
  setSearch,
  filteredData,
  isLoading,
  setShowResults
}) => {
  const handleOnClick = (name: string) => {
    setSearch(name);
    setShowResults(false);
  };

  const getList = (): Array<JSX.Element> => {
    const list = filteredData?.map((data: Data, idx: number) => {
      return (
        <div
          className="result"
          key={idx}
          onClick={() => handleOnClick(data.name)}
          onMouseDown={(event) => event.preventDefault()}
        >
          <HighlightedText highlight={search} value={data.name} />
        </div>
      );
    });
    return list;
  };

  return (
    <div className="results-container">
      {!isLoading ? getList() : <div> Loading ...</div>}
    </div>
  );
};

export default Results;
