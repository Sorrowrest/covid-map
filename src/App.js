import { useState } from 'react/cjs/react.development';
import s from './App.module.css';
import { Map } from './Map/map'
import { Timeline } from './Timeline/timeline';
import { Total } from './Total/total';

export let App = () => {


  const [timeline, setTimeline] = useState('2020-02-25T00:00:00Z');

  let GiveTime = (value) => {
    setTimeline(value);
    
}
  

  return (
    <div className={s.App}>
      
      <div className={s.Top}>
        <Map givetime={timeline}></Map>
       
      </div>
      <Total day = {'https://api.covid19tracking.narrativa.com/api/' + timeline.split('').splice(0,10).join('')}></Total>
      <Timeline givetime={GiveTime}></Timeline>
    </div>
  );
}
