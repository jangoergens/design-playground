import './App.css';
import FireshipNav from './components/FireshipNav.js'
import LoremIpsum from './components/ipsum/LoremIpsum.js'
import CatIpsum from './components/ipsum/CatIpsum.js'
import DogIpsum from './components/ipsum/DogIpsum.js'

import FeedbackForm from './components/FeedbackForm.js'

import NotFound from './components/NotFound.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <FireshipNav />
        <main className="content">
          <Switch>
            <Route exact path="/">
              <LoremIpsum />
            </Route>
            <Route exact path="/cat">
              <CatIpsum />
            </Route>
            <Route exact path="/dog">
              <DogIpsum />
            </Route>
            <Route exact path="/feedback">
              <FeedbackForm />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
export default App;