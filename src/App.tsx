import React, { useEffect, useState } from 'react';
import Body from './containers/Body';
import { getAssetsData } from './api/assets';
import { JSONData } from './helpers/types';

import './App.css';

const App: React.FC = () => {
  const [data, setData] = useState<JSONData>({
    data: [],
    timestamp: 0
  });

  useEffect(() => {
    const fecthData = async () => {
      setData(await getAssetsData('https://api.coincap.io/v2/assets'));
    };

    fecthData().catch(console.error);
  }, []);

  return (
    <div className="App">
      {data.data.length !== 0 && <Body data={data.data} />}
    </div>
  );
};

export default App;
