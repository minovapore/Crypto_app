import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { IoColorFilterOutline } from "react-icons/io5";

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
        colors: ['#00ffb3'],
        backgroundColor: 'transparent',
        chartArea:{
            backgroundColor:{
                fill: 'transparent'
            }
        }
    }

    return (
        <Chart
            options={options}
            chartType="LineChart"
            data={data}
            height="100%"
            legendToggle
        />
    );
}