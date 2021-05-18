import React, { useState } from 'react'

const Feedback = () => {
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)
   const [log, setLog] = useState([])
   const [rateArray, setrateArray] = useState([])

   const goodRate = () => setGood(good + 1);
   const neutralRate = () => setNeutral(neutral + 1);
   const badRate = () => setBad(bad + 1);

   const addToLog = (name) => setLog(log.concat(name + "  "));
   const changerateArray = (point) => setrateArray(rateArray.concat(point))

   const Button = ({ rate, text }) => {
      return (
         <button onClick={() => {
            rate();
            addToLog(text);
            switch (text) {
               case "Good": changerateArray(1);
                  break;
               case "Neutral": changerateArray(0);
                  break;
               case "Bad": changerateArray(-1);
                  break;
               default: console.log(text);
            }

         }
         }>
            {text}
         </button >
      )
   }

   const History = () => {
      if (log.length === 0) {
         return (
            <div>
               Rate the app to see the rating log
            </div>
         )

      }
      return (
         <div>
            Log: {log}
         </div>
      )
   }

   let summ = rateArray.reduce((accumulator, current) => accumulator + current, 0);
   let numberOfRates = rateArray.length;
   let positive = Math.round((rateArray.filter(elem => elem > 0).length / numberOfRates) * 100) / 100



   const Display = ({ good, neutral, bad }) => {
      return (
         <div>
            <h2>Statistics</h2>
            <p>
               Good - {good}
            </p>
            <p>
               Neutral - {neutral}
            </p>
            <p>
               Bad - {bad}
            </p>
            <p>
               {/* Log: {log} */}
            </p>
            <p>
               Summ = {summ} <br />
               Number of rates = {numberOfRates}<br />
               Positive (%) = {positive}
            </p>
         </div>
      )
   }


   return (
      <div>
         <h1>
            Give a feedback
         </h1>
         <div>
            <Button rate={goodRate}
               text='Good' />
            <Button rate={neutralRate}
               text='Neutral' />
            <Button rate={badRate}
               text='Bad' />

         </div>
         <div>
            <Display good={good} bad={bad} neutral={neutral} />
         </div>
         <div>
            <History log={log} />
         </div>
      </div>
   )

}

export default Feedback

