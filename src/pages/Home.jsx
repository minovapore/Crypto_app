import { useContext, useEffect, useState } from 'react';
import '../style/Home.css';
import { IoSearch } from "react-icons/io5";
import { CoinContext } from '../context/CoinContext';

export default function Home(){
    const {allCoin, currency} = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);

    useEffect(()=>{
        setDisplayCoin(allCoin);
    },[allCoin])

    return(
        <div>
            <div className="my-10">
                <div className="flex justify-center">
                    <h2>TITOLO</h2>
                </div>
                <div className="flex justify-center my-5">
                    <p>descrizine</p>
                </div>
                <div className="flex justify-center">
                    <form>
                        <input className="border border-black p-2 h-12 rounded-lg" type="text" placeholder="Search crypto..."/>
                        <button className="btn mx-3 rounded-full" type="submit"><IoSearch /></button>
                    </form>
                </div>
                <div className="bg-slate-300 max-w-[800px] mx-auto my-32 rounded-xl">
                    <div className='grid grid-cols-5 p-5'>
                        <p>#</p>
                        <p>Coins</p>
                        <p className='text-center'>Price</p>
                        <p className='text-center'>24H Change</p>
                        <p className="text-center">Market Cap</p>
                    </div>
                    {
                        displayCoin.slice(0, 10).map((item, index)=>(
                            <div className='grid grid-cols-5 p-5' key={index}>
                                <p>{item.market_cap_rank}</p>
                                <div className='text-left flex gap-2'>
                                    <img src={item.image} alt="" className='w-7'/>
                                    <p>{item.name + "-" + item.symbol}</p>
                                </div>
                                <p className='text-center'>{currency.symbol} {item.current_price}</p>
                                <p className='text-center'>{Math.floor(item.price_change_percentage_24h*100)/100}%</p>
                                <p className='text-center'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}