import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Plotly from "plotly.js"
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

function App() {

  const [coronaData, setCoronaData] = useState([])

  useEffect(() => {
    axios.get(`https://api.covid19api.com/dayone/country/italy/status/confirmed`)
      .then(res => {
        setCoronaData(res.data)
      }).catch((error) => console.log(`API get failed — ${error}`))
  }, [])

  return (
    <div className="App">
      <Plot
        data={[
          { type: 'line', x: coronaData.map(m => m.Date), y: coronaData.map(m => m.Cases) },
        ]}
        layout={{ width: 1200, height: 600, title: 'Italy - Covid-19 Total Cases' }}
      />
    </div>
  );
}

export default App;
