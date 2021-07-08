import React, {useContext} from 'react'
import  { CommentContext } from './CommentsContext';
import CommentDetail from './CommentDetails';
import CommentForm from './CommentForm';
const Comments = () => {
    const {comments} = useContext(CommentContext)
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
          />
        </head>
        <body>
          <div className="navbar">
            <div className="container flex">
              <h1 className="logo"><i className="fas fa-gem"></i>SOBHAN</h1>
              <ul>
                <li><a href="/">Home</a></li>
                <li ><a  className='comments' href="Comments.js">Comments</a></li>
              </ul>
            </div>
          </div>
          {/* this is th part where we add the state */}
          <CommentForm/>

            <ul className ="comment">
                {comments.map(comment => <CommentDetail key={comment.id} comment={comment} />)}
            </ul>
          {/* this is th part where we add the state */}

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
 
export default Comments;