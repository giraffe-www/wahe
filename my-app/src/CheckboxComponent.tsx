import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const arr_checkbox: {
        text: string,
        checked: boolean
    }[] = [{
        checked: true,
        text: 'select All'
    }, {
        checked: true,
        text: 'aaa'
    }, {
        checked: true,
        text: 'bbb'
    }, {
        checked: true,
        text: 'ccc'
    }, {
        checked: true,
        text: 'ddd'
    }, {
        checked: true,
        text: 'eee'
    }, {
        checked: true,
        text: 'fff'
    }, {
        checked: true,
        text: 'ggg'
    }, {
        checked: true,
        text: 'hhh'
    }, {
        checked: true,
        text: 'iii'
    }];

    const [arr, setArr] = useState(arr_checkbox);
    const [width, setWidth] = useState('200px');
    const [value, setValue] = useState(5);

    //复选修改
    const onChange = (str: string) => {
        if (arr[0].text === str) {
            for (let i = 0; i < arr.length; i++) {
                if (i === 0) {
                    continue;
                }
                const element = arr[i];
                element.checked = !arr[0].checked;
            }
            arr[0].checked = !arr[0].checked
        } else {
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                if (element.text === str) {
                    element.checked = !element.checked;
                }
            }
        }
        setArr([...arr]);
    }

    //展示修改
    const calculate = (str: string) => {
        let res = value;
        if (str === 'minus' && value !== 1) {
            res = value - 1;
        }
        if (str === 'add' && value !== arr.length) {
            res = value + 1;
        }
        setValue(res);
        setWidth(1000 / res + 'px');
    }

    return (
        <div className="App">
            <header className="App-header">
                <div style={{ width: '1000px', display: 'flex', flexWrap: 'wrap', marginBottom: '50px' }}>
                    {
                        arr.map((item, i) => {
                            return <div key={i} onClick={() => onChange(item.text)} style={{ width: width, textAlign: 'left', cursor:'pointer' }}>
                                <input type="checkbox" onChange={() => { }} checked={item.checked} />
                                <span>{item.text}</span>
                            </div>
                        })
                    }
                </div>

                <div>
                    <span>columns：</span>
                    <button onClick={() => calculate('minus')}>-</button>
                    <input type="text" value={value} />
                    <button onClick={() => calculate('add')}>+</button>
                </div>
            </header>
        </div>
    );
}

export default App;
