import React, { useState } from 'react'
import "./Colorbox.css"

const Colorbox = () => {

    const [listcolor, setListcolor] = useState([
        {id: 1, name: "Red", bg: "red"},
        {id: 2, name: "Green", bg: "Green"},
        {id: 3, name: "Brown", bg: "Brown"},
        {id: 4, name: "Black", bg: "Black"},
        {id: 5, name: "Blue", bg: "Blue"},
        {id: 6, name: "white", bg: "white"},
        {id: 7, name: "pink", bg: "pink"},
        {id: 8, name: "Gold", bg: "Gold"},
        {id: 9, name: "yellow", bg: "yellow"},
        {id: 10, name: "Gray", bg: "Gray"},
    ])

    const [bgcolor, setBgcolor] = useState("null")

    // const [color, setColor] = useState ("null")
    // const [color1, setColor1] = useState ("null")

    // const red = ()=>{
    //     setColor("red")
        
    // }
    // const red1 = ()=>{
    //     setColor1("green")
    // }

  return (
    <>
      <div className="color_container">
        <div className="color_rapper">
            <div className="packcolor_btn">
                {listcolor?.map((item)=> (
                    <button className='color_btn' key={item.id} onClick={()=> setBgcolor(item.bg)} style={{background: item.bg, color: item.bg === "Black"?("white"):("Black")}}>{item.name}</button>
                ))}
                


                {/* <button className='color_btn'  onClick={red}>Red</button>
                <button className='color_btn' onClick={red1}>Green</button>
                <button className='color_btn'>Blue</button>
                <button className='color_btn'>Gray</button>
                <button className='color_btn'>yellow</button>
                <button className='color_btn'>pink</button>
                <button className='color_btn'>Black</button>
                <button className='color_btn'>white</button>
                <button className='color_btn'>Brown</button>
                <button className='color_btn'>Gold</button> */}
            </div>
            <div className="show_color_rap">

                <div  className="box"
                    style={{background: bgcolor}}
                 > 

                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Colorbox
