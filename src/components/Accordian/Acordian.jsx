import { useState } from "react";
import data from "./data";
import './style.css'

const Acordian = () => {

  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getCurrentId) => {
    
    selected === getCurrentId ? setSelected(null) : setSelected( getCurrentId )
    
  }

  return (
    <div className="wrapper">
        <h2>Faqs</h2>
        <div className="accordian">
          {
            data && data.length > 0 ?
             data.map( dataItem => 
                <div className="item" key={dataItem.id}>
                  <div className="title" onClick={() => handleSingleSelection(dataItem.id)}>
                    <h3>{dataItem.question}</h3>
                    <span>
                      {
                        selected !== dataItem.id ? "+" : "-"
                      }
                    </span>
                  </div>
                  {
                    selected === dataItem.id ? 
                    <div className="content">{dataItem.answer}</div>
                    : null
                  }
                </div>
              ) 
             : <div>Not data found</div>
          }
        </div>

    </div>
  )
}

export default Acordian