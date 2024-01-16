import React, { useState } from 'react';
import './index.css';
import About from './About'; 
const App = () => {
    const [isActive, setIsActive] = useState(false);
    const onClickHandler = () => {setIsActive(true)};
    return (
        <div className='container'>
                <h1 className='supr'>Adomson</h1>
                <div className='burger' onClick={onClickHandler}>
                    <span></span>
                </div>
                <p className='about'>About </p>
                <p className='about1'>Services</p>
                <p className='about2'>FAQ</p>
                <p className='about3'>Contact US</p>
                <About isActive={isActive} setIsActive={setIsActive} />
                <button className='signup'>Sign Up</button>
                <button className='login'>Login</button>
            <div className='sella'>
                <p className='sell'>Sell  & Buy Crypto<br />with ease</p>
                <p className='go'>This is going to be the most exiciting crypto service you have ever tried in <br/> your life, keep going</p>
                <button className='started'>Get Started Now</button>
                <img className='nogo' alt=''></img>
            </div>
            <div className='yahz'>
                <div className='yanehz1'>
                    <p className='yanehz1p'>BTC/UTC </p> <p className='podsvech'> <br/> 36,272.28 </p> <p className='yanehz1p1'> <br/> 31,211.02 </p>
                    <div className='ale'>2.3 %</div>
                </div>
                <div className='yanehz2'>
                    <p className='yanehz2p'>BTC/UTC </p> <p className='podsvech2'> <br/> 29,572.28 </p> <p className='yanehz2p2'> <br /> 31,211.02 </p>
                    <div className='ale2'>1.1 %</div>
                </div>
                <div className='yanehz3'>
                    <p className='yanehz3p'>BTC/UTC </p> <p className='podsvech3'> <br/> 6,222.28 </p> <p className='yanehz3p3'> <br /> 31,211.02 </p>
                    <div className='ale3'>2.1 %</div>
                </div>
                <div className='yanehz4'>
                    <p className='yanehz4p'>BTC/UTC </p> <p className='podsvech4'> <br/> 6,222.28 </p> <p className='yanehz4p4'> <br /> 31,211.02 </p>
                    <div className='ale4'>0.5 %</div>
                </div>
            </div>
        </div> 
) }; export default App;