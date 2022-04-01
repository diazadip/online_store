import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './app/store';
import Register from './pages/Register';
import Login from './pages/Login';

import Header from './pages/Home/Header';
import SideBar from './pages/Home/SideBar';
import Footer from './pages/Home/Footer';

import { listen } from './app/listener';

function Kinthil() {
  return (
    <>
      <h1>isi dari Perops</h1>
      tytyd kuwda
    </>
  )

}

function App() {
  React.useEffect(() => {
    listen();
  }, [])

  return (
    <Provider store={store}>
      <div>
        <Router>
          <Routes>
            <Route path="/register" element={<><Header /><SideBar isi={<Register />} /><Footer /></>} />
            <Route path="/login" element={<><Header /><SideBar isi={<Login />}/><Footer /></>} />
            {/* <Route path="/login" element={<Login />} /> */}

            <Route path="/" element={<><Header /><SideBar isi={Kinthil()} /><Footer /></>} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}
export default App;