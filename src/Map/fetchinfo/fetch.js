import React, { useState, useEffect } from "react";
import f from './fetchinfo.module.css';




export let Fetch2 = (props) => {



  const useFetch = url => {
    const [data, setData] = useState(0);
    const [loading, setLoading] = useState(true);




    // Similar to componentDidMount and componentDidUpdate:
    useEffect(async () => {

      const response = await fetch(url);
      const data = await response.json();

      setData(data);
      setLoading(false);

    }, [url]);

    return { data, loading };
  };

  var { data, loading } = useFetch(props.day);
  
  
  return (

    <div>
      {(loading) ? <div>...loading</div> : (Array.isArray(data)) ?
        <div>
          <div className={f.InfoCountry}>{data[0].Country.toUpperCase()}</div> 
          <div className={f.InfoDate}>
            <div className={f.FetchInfo + ' ' + f.blue} >CONFIRMED: {Math.round(data.reduce(function (sum, current) { if (current.Province == '') { return current.Confirmed } else { return sum } }, 0))}</div>
            <div className={f.FetchInfo + ' ' + f.red} >DEATHS: {Math.round(data.reduce(function (sum, current) { return sum + current.Deaths }, 0))}</div>
            <div className={f.FetchInfo + ' ' + f.green} >RECOVERED: {Math.round(data.reduce(function (sum, current) { return sum + current.Recovered }, 0))}</div>
            <div className={f.FetchInfo + ' ' + f.black } >ACTIVE: {(Math.round(data.reduce(function (sum, current) { if (current.Province == '') { return current.Confirmed } else { return sum } }, 0)) - Math.round(data.reduce(function (sum, current) { return sum + current.Deaths }, 0)) - Math.round(data.reduce(function (sum, current) { return sum + current.Recovered }, 0)) < 0) ? 0 : Math.round(data.reduce(function (sum, current) { if (current.Province == '') { return current.Confirmed } else { return sum } }, 0)) - Math.round(data.reduce(function (sum, current) { return sum + current.Deaths }, 0)) - Math.round(data.reduce(function (sum, current) { return sum + current.Recovered }, 0))}</div>
          </div>
        </div> : (typeof data == "object") ? <div style={{ color: "red" }}>Too Many Requests!</div> : <div></div>}

    </div>
  );
};


