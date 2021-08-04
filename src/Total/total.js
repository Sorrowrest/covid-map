import f from './total.module.css';
import React, { useState, useEffect } from "react";

export let Total = (props) => {
    const useFetch = url => {
        const [data, setData] = useState(0);
        const [loading, setLoading] = useState(true);
    
    
    
    
        // Similar to componentDidMount and componentDidUpdate:
        useEffect(async () => {
    
          const response = await fetch(url);
          const data = await response.json();
    
          setData(data);
          setLoading(false);
    
        }, [props.day]);
    
        return { data, loading };
      };
    
      var { data, loading } = useFetch(props.day);
      console.log(props.day);
      
      return (
    
        <div>
          {(loading) ? <div>...loading</div> : 
          <div className={f.InfoDate}>
          <div className={f.FetchInfo, f.info} >CONF: {data.total.today_confirmed}   </div>
          <div className={f.FetchInfo, f.info} >  DEATHS: {data.total.today_deaths}  </div>
          <div className={f.FetchInfo, f.info} > REC: {data.total.today_recovered}</div>
          </div>}
    
        </div>
      );
}