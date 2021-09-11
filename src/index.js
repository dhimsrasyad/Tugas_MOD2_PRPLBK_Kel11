import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let data = [
  { nama: "Dhimas Rasyad Rahardianto", nim: "21120118140052", kelompok: "11", key: 1 },
  { nama: "Adriansyah Prasetya Nugraha", nim: "21120118130098", kelompok: "11", key: 2 }
]

let data2 = [
  { makanan: "Ayam Goreng", film: "Spiderman", hobi: "Fotografi", key: 1 },
  { makanan: "Martabak Manis", film: "Rush", hobi: "Fotografi", key: 2 }
]

ReactDOM.render(
  <React.StrictMode>
    <App title="Apakah Kamu ingin tahu siapa saja kelompok 11 ?" no="No" yes="Yes" data={data} title2="Apakah Kamu ingin tahu hal favorit anggota kami ?" no2="No" yes2="Yes" data2={data2} />
  </React.StrictMode>,
  document.getElementById('root')
);


