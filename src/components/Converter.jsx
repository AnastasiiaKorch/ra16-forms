import React, { useState } from 'react';
import hexToRgb from "../hexToRgb";
import checkHex from "../checkHex";
import './Converter.css'

function Converter() {
    const [hexData, setHexData] = useState('');
    const [rgbData, setRgbData] = useState( {
        inputValue: '(... , ... , ...)',
        className: 'form',
        bgColor: { backgroundColor:'#fcbddf' }
    });

    const handleChange = (e) => {
      const { value } = e.target
        setHexData(value);

      if(value.length === 7) {
          if(checkHex(value)){
              setRgbData({
                  inputValue: hexToRgb(value),
                  className: 'form',
                  bgColor: { backgroundColor: value }
              })
          } else {
              setRgbData({
                  inputValue: "Error!",
                  className: 'form error',
                  bgColor: { backgroundColor: '#f73939' }
              })
          }
      }

      if (value.length > 7) {
          setRgbData({
              inputValue: 'Error',
              className: 'form error',
              bgColor: { backgroundColor: '#f73939' }
          })
      }

      if (value === ''){
        setRgbData({
            inputValue: '(... , ... , ...)',
            className: 'form',
            bgColor: { backgroundColor: '#fcbddf' }
        })
      }
    }

    return (

        <form className={rgbData.className} style={rgbData.bgColor}>
            <div className='form__item-wrap hex'>
                <label htmlFor='hex-input' className='form__label hex'>HEX:</label>
                <input id='hex-input' className='form__input hex' value={hexData} onChange={handleChange} />
            </div>
            <div className='form__item-wrap rgb'>
                <label htmlFor='rgb-input' className='form__label rgb'>RGB:</label>
                <input id='rgb-input' className='form__input rgb' value={rgbData.inputValue} disabled />
            </div>
        </form>
    );
};

export default Converter;