import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import store from './components/Redux_/ConfigureStore'
import App from './App';
import Listado from './components/Listado'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'


const customHistory = createBrowserHistory()




console.log("store: index: " , store)






const Main =()=>{
    return(     
        <Provider  store={store}>     
            <Router>                
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/listado" component={Listado}/>
                    
                </div>
            </Router>
        </Provider>
       
        )
}

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
