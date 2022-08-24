import React, { useEffect, useState } from 'react'

const Covid = () => {
    
    const[data, setData] = useState([]);

  const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCovidData();
    },[])

  return (
    <section>
        <h2>LIVE</h2>
        <h4>COVID-19 CORONAVIRUS TRACKER</h4>
        <ul>
            
            <li className="card one">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>OUR</span>COUNTRY</p>
                        <p className="card__total card__small">INDIA</p>
                    </div>
                </div>
            </li>

            <li className="card two">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>TOTAL</span>RECOVERED</p>
                        <p className="card__total card__small">{data.recovered}</p>
                    </div>
                </div>
            </li>

            <li className="card three">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>TOTAL</span>CONFIRMED</p>
                        <p className="card__total card__small">{data.confirmed}</p>
                    </div>
                </div>
            </li>

            <li className="card four">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>TOTAL</span>DEATHS</p>
                        <p className="card__total card__small">{data.deaths}</p>
                    </div>
                </div>
            </li>

            <li className="card five">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>TOTAL</span>ACTIVE</p>
                        <p className="card__total card__small">{data.active}</p>
                    </div>
                </div>
            </li>

            <li className="card six">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>LAST</span>UPDATED</p>
                        <p className="card__total card__small">{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default Covid