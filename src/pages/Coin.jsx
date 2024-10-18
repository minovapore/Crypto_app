import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../context/CoinContext";
import '../style/Coin.css'
import LineChart from "../components/LineChart";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";


export default function Coin(){
    const {coinId} =useParams();
    const [coinData, setCoinData] = useState();
    const [historicalData, setHistoricalData] = useState();
    const {currency} = useContext(CoinContext);

    const fetchCoinData = async ()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-dcZcs2Vyo9GkmcVFqDgCcdJW'}
        };
        
        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
        .then(response => response.json())
        .then(response => setCoinData(response))
        .catch(err => console.error(err));
    }

    const fetchHistoricalData= async ()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-dcZcs2Vyo9GkmcVFqDgCcdJW'}
        };
        
        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
        .then(response => response.json())
        .then(response => setHistoricalData(response))
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchCoinData();
        fetchHistoricalData();
    }, [currency])

    if(coinData && historicalData){
        return(
            <div>
                <div className="flex items-center justify-center gap-5 my-5">
                    <img src={coinData.image.large} alt="" className="w-[150px]"/>
                    <p className="text-white text-4xl"><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
                </div>
                <div>
                    <LineChart historicalData={historicalData}/>
                </div>
                <div className="my-5 text-xl grid grid-cols-5 text-white text-center">
                    <ul>
                        <li className="font-bold">Crypto Market Rank</li>
                        <li className="font-semibold">#{coinData.market_cap_rank}</li>
                    </ul>
                    <ul>
                        <li className="font-bold">Current Price</li>
                        <li className="font-semibold">{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li className="font-bold">Market Cap</li>
                        <li className="font-semibold">{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li className="font-bold">24 Hour High</li>
                        <div className="flex justify-center items-center gap-2">
                            <li className="font-semibold">{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
                            <span className="text-green-500"><FaArrowUp /></span>
                        </div>
                    </ul>
                    <ul>
                        <li className="font-bold">24 Hour Low</li>
                        <div className="flex justify-center items-center gap-2">
                            <li className="font-semibold">{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
                            <span className="text-red-500"><FaArrowDown /></span>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }else{
        return(
            <div className="spinner">
                <div className="spin">
                </div>
            </div>
        );
    }
}