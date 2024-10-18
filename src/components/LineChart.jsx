import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import '../style/LineChart.css';

export default function LineChart({historicalData}){
    const [data, setData] = useState([["Date", "Prices"]])

    useEffect(()=>{
        let dataCopy = [["Date", "Prices"]];
        if(historicalData.prices){
            historicalData.prices.map((item)=>{
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`, item[1]])
            })
            setData(dataCopy);
        }
    }, [historicalData])

    const options = {
        hAxis: {
            textStyle: {
              color: '#ffffff',  // Colore del testo per l'asse X
            },
        },
        vAxis: {
            textStyle: {
              color: '#ffffff',  // Colore del testo per l'asse Y
            },
        },
        legend:{
            textStyle: {color:'#ffffff'}
        },
        colors: ['#00ffb3'],
        backgroundColor: 'transparent',
        chartArea:{
            backgroundColor:{
                fill: 'transparent'
            }
        }
    }

    return (
        <div className="glass-container p-10 w-10/12 h-[500px] mx-auto rounded-2xl">
        <Chart
            options={options}
            chartType="LineChart"
            data={data}
            height="100%"
            legendToggle
        />
        </div>
    );
}