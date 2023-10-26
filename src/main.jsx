import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Favs } from './pages/Favs/Favs.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import { AlbumDetail } from './pages/AlbumDetail/AlbumDetail.jsx'
import { Albums } from './pages/Albums/Albums.jsx'
import { Slider } from './pages/Slider/Slider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Slider />}/>
            <Route path="/favs" element={<Favs />}/>
            <Route path="/favs/:title" element={<AlbumDetail />}/>
            <Route path="/albums" element={<Albums />}/>
            <Route path="*" element={<NotFound />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
