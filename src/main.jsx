import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Monthly } from './pages/Monthly/Monthly.jsx'
import { Favs } from './pages/Favs/Favs.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import { AlbumDetail } from './pages/AlbumDetail/AlbumDetail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Monthly />}/>
            <Route path="/favs" element={<Favs />}/>
            <Route path="/favs/:id" element={<AlbumDetail />}/>
            <Route path="*" element={<NotFound />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
