import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ReclamosList from './components/ReclamosList'
import ReclamosDetails from './components/ReclamosDetails'
import Form from './components/Form'
import 'bootswatch/dist/materia/bootstrap.min.css'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container p-4">
          <div className="row">
            <Form />
            <Switch>
              <Route exact path="/" component={ReclamosList} />
              <Route path="/reclamos" component={ReclamosList} />
              <Route path="/reclamo/:id" component={ReclamosDetails} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
