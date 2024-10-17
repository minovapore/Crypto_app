import { useContext, useEffect, useState } from 'react';
import '../style/Home.css';
import { IoSearch } from "react-icons/io5";
import { CoinContext } from '../context/CoinContext';

export default function Home(){
    const {allCoin, currency} = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);
    const [input, setInput] = useState('');

    const inputHandler = (e)=>{
        setInput(e.target.value);
        if(e.target.value === ""){
            setDisplayCoin(allCoin);
        }
    }

    const searchHandler = async (e)=>{
        e.preventDefault();
        const coins = await allCoin.filter((item)=>{
            return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayCoin(coins);
    }

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
                    <form onSubmit={searchHandler} className='bg-slate-300 w-[400px] h-[80px] p-3 flex justify-center items-center gap-2'>
                        <input onChange={inputHandler} list='coinlist' value={input} className="search-input-custom bg-slate-300 p-2 h-12 w-[350px] rounded-lg text-black" type="text" placeholder="Search crypto..." required/>
                        <datalist className='h-[300px]' id='coinlist'>
                            {allCoin.map((item, index)=>(<option key={index} value={item.name}/>))}
                        </datalist>
                        <button className="btn rounded-full" type="submit"><IoSearch /></button>
                    </form>
                </div>
                <div className="bg-slate-300 max-w-[800px] mx-auto my-32 rounded-xl">
                    <div className='grid xl:grid-cols-5 md:grid-cols-5 grid-cols-4 p-5'>
                        <p>#</p>
                        <p>Coins</p>
                        <p className='text-center'>Price</p>
                        <p className='text-center'>24H Change</p>
                        <p className="text-center xl:block md:block hidden">Market Cap</p>
                    </div>
                    {
                        displayCoin.slice(0, 10).map((item, index)=>(
                            <div className='grid xl:grid-cols-5 md:grid-cols-5 grid-cols-4 p-5' key={index}>
                                <p>{item.market_cap_rank}</p>
                                <div className='text-left flex gap-2'>
                                    <img src={item.image} alt="" className='xl:w-8 xl:h-8 md:w-8 md:h-8 w-6 h-6 '/>
                                    <p>{item.name + "-" + item.symbol}</p>
                                </div>
                                <p className='text-center'>{currency.symbol} {item.current_price}</p>
                                <p className='text-center'
                                style={{ color: item.price_change_percentage_24h > 0 ? 'green' : 'red' }}>
                                    {Math.floor(item.price_change_percentage_24h*100)/100}%</p>
                                <p className='text-center xl:block md:block hidden'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}