import React from 'react';
import { useRef} from 'react';

const Rotate = () => {
  const circle =useRef()
  var rotateSum=0 ;
  const up = () => {
    rotateSum = rotateSum -90
    circle.current.style.transform = `rotate(${rotateSum}deg)`
    console.log(rotateSum)
  }
  const down = () => {
    rotateSum = rotateSum +90
    circle.current.style.transform = `rotate(${rotateSum}deg)`
    console.log(rotateSum)
  }


    return (
        <div className="main">
        <div className="container">
          <div className="section">
            <div className="concealer"></div>
            <img src={require("./images/picture.png").default} alt="" />
            <div ref={circle} className="circle" id="circle">
              <h2 className="info one"><i className="fab fa-css3-alt" ></i></h2>
              <h2 className="info two"><i className="fab fa-html5"></i></h2>
              <h2 className="info three"><i className="fab fa-js"></i></h2>
              <h2 className="info four"><i className="fab fa-react"></i></h2>
            </div>
          </div>
          <div className="controls">
            <i onClick={up} className="fas fa-angle-up" ></i>
            <p>Spin</p>
            <i onClick={down} className="fas fa-angle-down"  ></i>
          </div>
        </div>
      </div>
    )
}
export default Rotate