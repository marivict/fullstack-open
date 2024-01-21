// exercise 1.6 - 1.11
import { useState } from "react";
import { Buttons } from "./Buttons";
import { Statistics } from "./Statistics";

export const Unicafe = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const goodHandle = () => {
        setGood( good + 1)
    }
    const neutralHandle = () => {
      setNeutral( neutral + 1)
    }
    const badHandle = () => {
      setBad( bad + 1)
    }

    const total = good + bad + neutral

    const average = total/ 3;

    const happyPercentage = (good/total) * 100;

  return (
    <div>
      <div className="heading">
        <h1>Give feedback</h1>
      </div>
      <div className="buttons">
        <Buttons text={"good"} handleClick={goodHandle}/>
        <Buttons text={"neutral"} handleClick={neutralHandle}/>
        <Buttons text={"bad"} handleClick={badHandle}/>
      </div>
      <div className="heading">
        <h1>Statics</h1>
      </div>
          <Statistics good={good} bad={bad} neutral={neutral} average={average} happyPercentage={happyPercentage} total={total}/>
    </div>
  )
}