import React from "react";
import { useState, useEffect } from "react";
import "../style/timer.css";

export default function Timer() {
    const [timerDays, setTimerDays] =useState(0);
    const [timerHours, setTimerHours] =useState(0);
    const [timerMinutes, setTimerMinutes] =useState(0);
    const [timerSeconds, setTimerSeconds] =useState(0);

    let interval;

    const startTimer=() => {
        const countDownDate = new Date("December 07 , 2023").getTime();

        interval=setInterval(()=>{
            const now = new Date().getTime();

            const distance= countDownDate - now;

            const days = Math.floor(distance/(24*60*60*1000));
            const hours = Math.floor((distance%(24*60*60*1000))/(1000*60*60));
            const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
            const seconds = Math.floor((distance%(60*1000))/1000);

            if(distance<0)
            {
                clearInterval(interval.current);
            }
            else{
                setTimerDays(days);
                setTimerHours(hours)
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }
        );

    };

    useEffect(()=>
    {
        startTimer();
    })
  return (
    <div
      className="timer-container"
      style={{
        backgroundImage:
          "url(" +
          "https://yevgenysim-turkey.github.io/shopper/assets/img/covers/cover-4.jpg" +
          ")",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="timer-box">
        <div className="timer-text">
          <h3 className="sale-heading">
            Get -50% from
            <br />
            Summer Collection
          </h3>
          <div className="countdown-container">
            <div className="time">
              <div className="time-digit">{timerDays.toString().length===1 &&  "0"}{timerDays}</div>
              <div className="time-name">DAYS</div>
            </div>
            <div className="colon">:</div>
            <div className="time">
              <div className="time-digit">{timerHours.toString().length===1 &&  "0"}{timerHours}</div>
              <div className="time-name">HOURS</div>
            </div>
            <div className="colon">:</div>
            <div className="time">
              <div className="time-digit">{timerMinutes.toString().length===1 &&  "0"}{timerMinutes}</div>
              <div className="time-name">MINUTES</div>
            </div>
            <div className="colon">:</div>
            <div className="time">
              <div className="time-digit">{timerSeconds.toString().length===1 &&  "0"}{timerSeconds}</div>
              <div className="time-name">SECONDS</div>
            </div>
            
          </div>
          <a className="timer-link" href="a.html">
            Shop Now<i className="fa fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
