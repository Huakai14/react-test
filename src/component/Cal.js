import React, { useState } from 'react'

function Cal() {
        const [calc,setCalc] = useState("");
        const [result,setResult] = useState("");
        const ops = ['/','*','+','-','.'];
        const updateCalc = value => {
                if (
                        ops.includes(value) && calc === '' ||
                        ops.includes(value) && ops.includes(calc.slice(-1))
                ){
                        return;
                }
                setCalc(calc+value);

                if(!ops.includes(value)){
                        setResult(eval(calc+value).toString())
                }

        }
        const calculate = () => {
                setCalc(eval(calc).toString())
        }
        const AC = () => {
                setCalc('')
        }
        const deleteLast = () => {
                if (calc == ''){
                        return;
                }
                const value = calc.slice(0, -1);
                setCalc(value);
        }
  return (
    <div className = "calculator">
        <h1 className = "calhead">Calculator</h1>
        <div className = "calbody">
            <div className = "calshownum">
                    { calc }
            </div>
            <div className = "calnumber">
                <button className='item1' onClick = {AC}>AC</button>
                <button onClick = {deleteLast}>DEL</button>
                <button onClick = {() => updateCalc('/')}>/</button>
                <button onClick = {() => updateCalc('7')}>7</button>
                <button onClick = {() => updateCalc('8')}>8</button>
                <button onClick = {() => updateCalc('9')}>9</button>
                <button onClick = {() => updateCalc('*')}>*</button>
                <button onClick = {() => updateCalc('4')}>4</button>
                <button onClick = {() => updateCalc('5')}>5</button>
                <button onClick = {() => updateCalc('6')}>6</button>
                <button onClick = {() => updateCalc('-')}>-</button>
                <button onClick = {() => updateCalc('1')}>1</button>
                <button onClick = {() => updateCalc('2')}>2</button>
                <button onClick = {() => updateCalc('3')}>3</button>
                <button onClick = {() => updateCalc('+')}>+</button>
                <button onClick = {() => updateCalc('0')}>0</button>
                <button onClick = {() => updateCalc('.')}>.</button>
                <button className='item2' onClick = {calculate}>=</button>
            </div>
        </div>        
    </div>
  )
}

export default Cal