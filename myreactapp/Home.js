
import React from 'react'
import Rotate from './Rotate'

const Home = () => {
  

    return (
        
        <html lang="en">
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="styles.css" />
            <title>SOBHAN | Sobhan Jahanmard</title>
            <link
              rel="icon"
              href="https://img.icons8.com/ios-filled/50/000000/cloud-arrow-left.png"
            />
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
              integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
              crossOrigin="anonymous"
            />
          </head>
          <body>
            <div className="navbar">
              <div className="container flex">
                <h1 className="logo"><i className="fas fa-gem"></i>SOBHAN</h1>
                <ul>
                  <li><a className='home' href="/">Home</a></li>
                  <li><a href="Comments.js">Comments</a></li>
                </ul>
              </div>
            </div>
            <Rotate/>
        
        
            <div className="cards">
              <div className="container">
                <div className="card">
                  <h4>Node.js</h4>
                  <img src={require("./images/logos/node.png").default} alt="" />
                </div>
                <div className="card">
                  <h4>Python</h4>
                  <img src={require("./images/logos/python.png").default} alt="" />
                </div>
                <div className="card">
                  <h4>C#</h4>
                  <img src={require("./images/logos/csharp.png").default} alt="" />
                </div>
                <div className="card">
                  <h4>Ruby</h4>
                  <img src={require("./images/logos/ruby.png").default} alt="" />
                </div>
                <div className="card">
                  <h4>PHP</h4>
                  <img src={require("./images/logos/php.png").default} alt="" />
                </div>
                <div className="card">
                  <h4>Scala</h4>
                  <img src={require("./images/logos/scala.png").default} alt="" />
                </div>
                <div className="card">
                  <h4>Clojure</h4>
                  <img src={require("./images/logos/clojure.png").default} alt="" />
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="container">
                <div className="copy">
                  <h1>Sobhan</h1>
                  <h6>Copyright &copy; 2021</h6>
                </div>
                <div className="icon">
                  <a href="https://www.instagram.com/"
                    ><i className="fab fa-instagram fa-2x"></i
                  ></a>
                  <a href="https://www.instagram.com/"
                    ><i className="fab fa-github fa-2x"></i
                  ></a>
                  <a href="https://www.instagram.com/"
                    ><i className="fab fa-facebook fa-2x"></i
                  ></a>
                </div>
              </div>
            </div>
          
          </body>
          
          
        </html>  
         
    );

} 
export default Home

