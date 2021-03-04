import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Article from './Article'
import logo from './logo.svg'
import './App.css'

const routeMap = {
  home: '/',
  testcafe: '/testcafe',
  interactiveCommandInShell: '/interactive-command-in-shell'
}

function App() {
  return (
    <div className="App">
      <Router>
        <Link className='link' to={routeMap.home}>Back to Home</Link>
        <Switch>
          <Route exact path={routeMap.home}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Mutoe's Single Application Blog</h1>

              <h4>Articles:</h4>
              <Link to={routeMap.testcafe}>Testcafe</Link>
              <Link to={routeMap.interactiveCommandInShell}>Interactive command in shell</Link>
            </header>
          </Route>
          <Route path={routeMap.testcafe}>
            <Article name={'testcafe'}/>
          </Route>
          <Route path={routeMap.interactiveCommandInShell}>
            <Article name={'interactive-command-in-shell'}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
