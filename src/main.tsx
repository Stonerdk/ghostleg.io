import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GhostLeg from './view/ghostleg'
import Home from './view/mainpage'
import Dice from './view/dice'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/ghostleg' element={<GhostLeg />} />
				<Route path='/dice' element={<Dice />} />
				{/* <Route path='/spinner' element={} /> 
				<Route path='/truimph' element={} />
				<Route path='/hanafuda' element={} /> */}
			</Routes>
    </BrowserRouter>
  </React.StrictMode>
)
