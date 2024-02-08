import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shipping from './Shipping'
import Test from './Test'
import Dasboard from './Dasboard'
import BarChart from './BarChart'

export default function App() {
    return (
        <>
            <div className="comtainer">
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
                        <Sidebar />
                    </div>
                    <div className="col-6 col-sm-6 col-md-8 col-lg-9 col-xxl-10">
                        <BrowserRouter>
                            <Navbar />
                            <Test/>
                            <Routes>
                                <Route path='/' element={<Dasboard/ >}/>
                                <Route path='/shipping' element={<Shipping/ >}/>
                            </Routes>
                        </BrowserRouter>

                    </div>
                </div>
            </div>
        </>
    )
}

