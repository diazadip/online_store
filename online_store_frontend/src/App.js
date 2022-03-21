import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './app/store';
import Home from './pages/Home';
import Register from './pages/Register';

import { listen } from './app/listener';

function App() {
  React.useEffect(() => {
    listen();
  }, [])

  return (
    <Provider store={store}>
      <div>
        <Router>
          <Routes>
            <Route exact path="/register" element={<Register />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}
export default App;