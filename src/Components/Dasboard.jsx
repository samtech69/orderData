import React from 'react'
import BarChart from './BarChart'
import Test from './Test'
import PieChart from './PieChart'

export default function Dasboard() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4" >
                        <div style={{ border: "1px solid black", margin: '0px 0px' }}>
                            <img src="https://static.vecteezy.com/system/resources/previews/001/240/448/large_2x/online-delivery-service-with-packages-and-a-smartphone-vector.jpg" alt="" width="100%" height="140px" />
                            <h6 className='py-1 ps-4'>Welcome Back!</h6>
                            <h5 className='py-1 ps-4'>Herbzoot</h5>
                            <button className='btn btn-primary btn-sm mb-3 me-3' style={{ float: "right" }}>create order</button>
                        </div>

                        <div style={{ border: "1px solid black", margin: '40px 0px' }}>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className='py-4 px-2'>Current Month Orders</h6>
                                    <p className='py-1'><span className='text-success ms-2'>12%<span class="material-symbols-outlined py-1" style={{ position: "relative", top: "7px", fontSize: "20px" }}>
                                        arrow_upward
                                    </span></span>Previous period</p>
                                    <button className='btn btn-primary ms-5 my-2 btn-sm'>View More</button>

                                </div>
                                <div className="col-md-6">
                                    <PieChart />
                                </div>
                                <p className='px-2 ps-4'>View All Shipments page to get the detailed information.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">

                        <div className="row">
                            <div className="col-md-3 ms-4" style={{ border: "1px solid black"}}>
                                <h6 className='py-1 text-primary'>ORDERS</h6>
                                <div className="row">
                                    <div className="col-md-6"><h6 className='py-1'>#210</h6></div>
                                    <div className="col-md-6"><span class="p-3 mb-4 material-symbols-outlined bg-primary text-white" style={{ float:"right",  borderRadius: "50%" }}>
                                        storefront
                                    </span></div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-2" style={{ border: "1px solid black"}}>
                                <h6 className='py-1 text-primary'>NDR</h6>
                                <div className="row">
                                    <div className="col-md-6"><h6 className='py-1'>#147</h6></div>
                                    <div className="col-md-6"><span class="p-3 mb-4 material-symbols-outlined bg-primary text-white" style={{ float:"right",  borderRadius: "50%" }}>
                                        warning
                                    </span></div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-2" style={{ border: "1px solid black"}}>
                                <h6 className='py-1 text-primary'>COD</h6>
                                <div className="row">
                                    <div className="col-md-6"><h6 className='py-1'>Rs. 12792.00</h6></div>
                                    <div className="col-md-6"><span class="p-3 mb-4 material-symbols-outlined bg-primary text-white" style={{ float:"right",  borderRadius: "50%" }}>
                                        currency_rupee
                                    </span></div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-10" style={{border: "1px solid black", margin: '40px 10px',padding: '20px 10px' }}>
                                <h5 className='py-1'>Month Wise Order</h5>
                                <canvas id="BarChart" ></canvas>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
