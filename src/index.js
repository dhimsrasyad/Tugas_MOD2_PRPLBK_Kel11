import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let data = [
  {nama: "Dhimas Rasyad Rahardianto", nim: "21120118140052", kelompok:"11", key:1},
  {nama: "Adriansyah Prasetya Nugraha", nim: "21120118130098", kelompok:"11", key:2}
]

ReactDOM.render(
  <React.StrictMode>
    <App title="Apakah Kamu ingin tahu siapa saja kelompok 11 ?" no="No" yes="Yes" data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);


