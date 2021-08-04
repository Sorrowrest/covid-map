import { Line } from './Line/line';
import s from './timeline.module.css';
import { Fetch } from '../script';
import { useEffect, useState } from 'react';

export let Timeline =  (props) => {



    const [index, setCounter] = useState(0)

    var len;
    
         
    let GoTimeLine = () => {
        if (index != len-1) {
            setCounter(index + 1);
        }

    }

    let GiveTime = (value) => {
        props.givetime(value);
    }
    const [AllData, setData] = useState(0);

    let GiveAllData = (value) => {
        console.log(value);
        setData(value); 
    }
    
    let Thego = (value , ind) => {
        return function() {
            setCounter(ind);
        }
    }

    console.log(AllData)
    
    return (
        <div className={s.backTimeLine}>
            <Line thego={Thego} GoTimeLine={GoTimeLine} givealldata={AllData}></Line>
            <Fetch i={index} givetime={GiveTime} givealldata={GiveAllData} ></Fetch>
        </div>
    )
}
