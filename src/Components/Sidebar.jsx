import React, { useState } from 'react'

export default function Sidebar() {

    const [display, setDisplay] = useState('none')

    function Dropdown() {

        if (display == 'none') {

            setDisplay('block')

        } else {

            setDisplay('none')

        }
    }
    return (
        <>
        
            <div className="lists">
                <div className="">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="list-color">
                                <ul>
                                    <li><a href="/"><span class=" material-symbols-outlined fs-4 py-2">
                                        dashboard
                                    </span>Dashboard</a></li>






                                    <li ><span class="material-symbols-outlined fs-4 py-2">
                                        orders

                                    </span>Orders <span className='spany material-symbols-outlined' onClick={Dropdown}>
                                            keyboard_arrow_down
                                        </span></li>
                                    <li className='hidden-list py-2' style={{ display: display }}>
                                        <ul>
                                            <li><a><span class="material-symbols-outlined py-1">
                                                add
                                            </span>Create Order</a></li>
                                            <li><a><span class="material-symbols-outlined py-1">
                                                list
                                            </span>All Shipments</a></li>
                                            <li><a><span class="material-symbols-outlined py-1">
                                                flash_on
                                            </span>Channel orders</a></li>
                                            <li><a><span class="material-symbols-outlined py-1">
                                                warning
                                            </span>NDR</a></li>
                                            <li><a><span class="material-symbols-outlined py-1">
                                                show_chart
                                            </span>Weights</a></li>
                                        </ul>
                                    </li>


                                    <li><a href='/shipping'><span class="material-symbols-outlined">
                                        collections_bookmark
                                    </span>Shipping Labels</a></li>
                                    <li><a><span class="material-symbols-outlined">
                                        cancel
                                    </span>Cancel orders</a></li>
                                    <li><a><span class="material-symbols-outlined">
                                        summarize
                                    </span>Reports</a></li>
                                    <li><a><span class="material-symbols-outlined">
                                        settings
                                    </span>Tools<span className='spany material-symbols-outlined'>
                                            keyboard_arrow_down
                                        </span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12">

                        </div>
                    </div>
                </div>

            </div>
        </>


    )
}
