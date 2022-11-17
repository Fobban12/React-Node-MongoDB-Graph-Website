import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import LineChartContext from '../../context/LineChartContext';
import 'chartjs-adapter-date-fns';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

function LineChartOfV9() {

    let {allDataOfV9, fetchAllDataOfV9} = useContext(LineChartContext); 
    

    useEffect(() => {
        fetchAllDataOfV9();
    },[]);
    
    let mainSector = allDataOfV9.map((data) => data.sector)
    let Data = allDataOfV9.map((data) => data.Share_of_global_greenhouse_gas_emissions)
      const data = {
         labels: mainSector,
          datasets:
              [{
                  label: "test",
                  data: Data,
                  borderColor: "rgb(238, 75, 43)",
                  backgroundColor: 'rgba(238, 75, 43)'
              }]
            
      }

  
  



  return (
    <div>
        <div style={{width: '50%', margin: "auto", border: "3px solid black", borderRadius: 4, padding: 10, backgroundColor: "white", alignItems: "center", justifyContent: "center"}}>
            <Doughnut data={data} />
            <h3 className='text-black font-bold text-2xl my-5 text-center'> Description </h3>
            <p style={{textAlign: "left", color: 'black', marginBottom: 5}}> The CO2 records presented here are derived from three ice cores obtained at Law Dome, East Antarctica from 1987 to 1993. 
            
            </p>
            <span></span>
            <p style={{textAlign: "left", paddingTop: "20px",}}> <span style={{fontWeight: "bold"}}> Link to data source:</span> https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat </p>
        </div>
    </div>
  )
}

export default LineChartOfV9