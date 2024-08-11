import { useState } from 'react'
import './randomColorStyle.css'

const RandomColorGen = () => {

    const [typeColor, setTypeColor] = useState("HEX");
    const [colorStyle, setColorStyle] = useState('#FFFFFF');

    const hexCode = [0,1,2,3,4,5,6,7,8,9,"A","B","D","E", "F"];    

    const handleChangeTypeColor = (type) => {
        setTypeColor(type)
        type === "HEX" && setColorStyle(makeHexCode)
        type === "RGB" && setColorStyle(makeRGBCode)
    }

    const makeRGBCode = () => {
        let code = [];
        let count = 0;
        while (count < 3) {
            let randomNumber = Math.floor(Math.random() * 255);
            code.push(randomNumber)
            count++
        }

        return `rgb(${code[0]},${code[1]},${code[2]})`;
    }

    const makeHexCode = () => {
        let code = []
        let count = 0;
        while (count < 6) {
            let randomNumber = Math.floor(Math.random() * 15);
            code.push(hexCode[randomNumber])
            count++
        }

        return `#${code.join('')}` ;
    }



  return (
    <div className="wrapper" style={   { background:`${colorStyle}` } }>
        <div className='randomColor-container'>
            <div className='btns-container'>
                <button  onClick={ () => handleChangeTypeColor("HEX")}>Create HEX Color</button>
                <button onClick={ () => handleChangeTypeColor("RGB")}>Create RGB Color</button>
                <button onClick={ () => handleChangeTypeColor(typeColor)}>Create Random Color</button>
            </div>

            <h2>
                {
                    typeColor === "HEX"   
                    ? "HEX "
                    : "RGB "
                } Color</h2>

            <h3>{colorStyle}</h3>

        </div>
    </div>
  )
}

export default RandomColorGen