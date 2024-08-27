import QRCode from "react-qr-code";

import "./qrgenerator.css";
import { useState } from "react";

const QRgenerator = () => {

  const [value, setValue] = useState("");
  const [input, setInput] = useState("");

  const handleSubmit = () => {

    setValue(input)

  }

  return (
    <section >

        <h2>QR Genertor</h2>

        
            <input 
                type="text" 
                placeholder="Enter a value" 
                className="input-QRcontainer"
                onChange={ (e) =>  setInput(e.target.value)}    
            />

            <button 
                onClick={handleSubmit}
                disabled={!input}
                >
                Submit
            </button>
     
        <div className="QR-container">

            {
                value ?
                <QRCode 
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={"Guido"}
                    viewBox={`0 0 256 256`}
                />

                : null

            }

        </div>
    </section>
  )
}

export default QRgenerator