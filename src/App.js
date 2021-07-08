import './App.css';
import Home from './Home'
import Comments from './Comments'
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import CommentContextProvider from './CommentsContext';

function App() {
  return (
    <Router>
      <div className="App">     
        <Switch>
        <Route path ='/' exact component={Home}/>

          <CommentContextProvider>
            <Route path='/Comments.js' component={Comments}/>
          </CommentContextProvider>

        </Switch>
      </div>
    </Router>

  );
}



export default App;
