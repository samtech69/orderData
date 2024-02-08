import React, { useEffect, useRef, useState } from 'react'
import jsPDF from 'jspdf';

export default function Shipping() {



    const [users, setUsers] = useState([
        {
            id: 'SP/OR/28875237',
            awb: '234889667898',
            status: 'DELIVERED',
            orderdate: '31 Jan 2024',
            invoice: '110043',
            express: 'AIR',
            customerdetails: { name: 'Sameer', phone: 9898978678 },
            customeraddress: 'Flat no-2, delhi'
        },
        {
            id: 'SP/OR/28875546',
            awb: '234889667656',
            status: 'DELIVERED',
            orderdate: '31 Jan 2024',
            invoice: '117777',
            express: 'AIR',
            customerdetails: { name: 'Veer', phone: 8789878787 },
            customeraddress: 'Gurgaon'
        },
        {
            id: 'SP/OR/24675754',
            awb: '234889667666',
            status: 'DELIVERED',
            orderdate: '31 Jan 2024',
            invoice: '116765',
            express: 'AIR',
            customerdetails: { name: 'Durgesh', phone: 9757984755 },
            customeraddress: 'New delhi'
        },
        {
            id: 'SP/OR/35546454',
            awb: '234889667555',
            status: 'DELIVERED',
            orderdate: '31 Jan 2024',
            invoice: '114565',
            express: 'AIR',
            customerdetails: { name: 'Bunti', phone: 9999878765 },
            customeraddress: 'Punjab'
        },

        {
            id: 'SP/OR/45675676',
            awb: '234889667245',
            status: 'NDR',
            orderdate: '30 Jan 2024',
            invoice: '114565',
            express: 'AIR',
            customerdetails: { name: 'Usha', phone: 9968757634 },
            customeraddress: 'Gurgaon'
        },
        {
            id: 'SP/OR/33344545',
            awb: '234889667566',
            status: 'NDR',
            orderdate: '30 Jan 2024',
            invoice: '110565',
            express: 'AIR',
            customerdetails: { name: 'Rupesh', phone: 9897968798 },
            customeraddress: 'New delhi'
        },
        {
            id: 'SP/OR/65544654',
            awb: '234889667111',
            status: 'NDR',
            orderdate: '30 Jan 2024',
            invoice: '114563',
            express: 'AIR',
            customerdetails: { name: 'Avtar', phone: 85768796587 },
            customeraddress: 'Noida'
        }
    ])


    const generatePDF = (users) => {

        const pdf = new jsPDF();
        pdf.text(20, 20, `
          id: ${users.id}
          awb: ${users.awb}
          status: ${users.status}
          orderdate: ${users.orderdate}
          invoice: ${users.invoice}
          express: ${users.express}
          customerdetails: ${users.customerdetails.name} | ${users.customerdetails.phone}
          customeraddress: ${users.customeraddress}
        `);
        pdf.save(`${users.customerdetails.name}_profile.pdf`);
    };

    let [search, setSearch] = useState("")

    function postSearch(e) {
        e.preventDefault()
        setUsers(users.filter((item) => {
            return search.toLowerCase() === '' ?
                item : item.customeraddress.toLowerCase().includes(search) ||
                item.customerdetails.name.toLowerCase().includes(search) ||
                item.customerdetails.phone.toString().includes(search) ||
                item.id.toLowerCase().includes(search) ||
                item.awb.includes(search) ||
                item.status.toLowerCase().includes(search) ||
                item.orderdate.includes(search) ||
                item.invoice.includes(search) ||
                item.express.toLowerCase().includes(search)
        }))
        e.target.reset()
    }



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

            <div className="container">
                <h6 className='py-3'>SHIPPING LABELS</h6>
                <div className="container-fluid">
                    <h5 className='m-3 py-1'>Download Shipping Labels</h5>

                    <h5 className='w-100 bg-primary pb-3 ps-3 text-light'><a onClick={Dropdown}><span style={{ position: "relative", top: "8px" }} class="py-1 material-symbols-outlined">
                        filter_list
                    </span>FILTERS</a></h5>
                    <div className='' style={{ display: display }}>
                        <form action="" onSubmit={postSearch}>
                            <div className="row">
                                <div className="col-md-4">
                                    <label>AWB#</label><br />
                                    <input className='w-100' type="text" onChange={(e) => setSearch(e.target.value)}/>
                                </div>
                                <div className="col-md-4">
                                    <label >Invoice No.</label><br />
                                    <input className='w-100' type="text" onChange={(e) => setSearch(e.target.value)}/>
                                </div>
                                <div className="col-md-4">
                                    <label>Payment mode</label><br />
                                    <select className='w-100'>
                                        <option value=""></option>
                                        <option value="COD">COD</option>
                                        <option value="NetBanking">Net Banking</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label>Orders From</label><br />
                                    <input className='w-100' type="date"  onChange={(e) => setSearch(e.target.value)}/>
                                </div>
                                <div className="col-md-4">
                                    <label>Orders To</label><br />
                                    <input className='w-100' type="date" onChange={(e) => setSearch(e.target.value)}/>
                                </div>
                                <div className="col-md-4">
                                    <label>Date Range</label><br />
                                    <select className='w-100'>
                                        <option value="">None</option>
                                    </select>
                                </div>
                            </div>

                            <button type='submit' className='btn  btn-primary mt-4' style={{float:"right",marginRight:"20px"}}>Submit</button>
                        </form>
                    </div>






                    <form onSubmit={postSearch} style={{ float: "right", marginRight: "20px" }}>
                        <div className="my-3 btn-group w-100">
                            <input type="search" name="search" onChange={(e) => setSearch(e.target.value)} placeholder='Enter Search' className='form-control' />
                            <button type="submit" className='btn btn-dark w-50' >Search</button>
                        </div>
                    </form>
                    <div className="table table-responsive table-bordered table-striped">
                        <thead className='sizes'>
                            <tr>
                                <th></th>
                                <th>Order&nbsp;ID</th>
                                <th>AWB#</th>
                                <th>Status</th>
                                <th>Order&nbsp;Date</th>
                                <th>Invoice/Ref#</th>
                                <th>Express&nbsp;Type</th>
                                <th>Customer&nbsp;Details</th>
                                <th>Customer&nbsp;Address</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody className='app'>
                            {
                                users.map((user, index) => {
                                    return <tr key={index} >
                                        <td ></td>
                                        <td>{user.id}</td>
                                        <td>{user.awb}</td>
                                        <td>{user.status}</td>
                                        <td>{user.orderdate}</td>
                                        <td>{user.invoice}</td>
                                        <td>{user.express}</td>
                                        <td>{user.customerdetails.name}
                                            <br />{user.customerdetails.phone}</td>
                                        <td>{user.customeraddress}</td>
                                        <td><button className='btn btn-primary' onClick={() => generatePDF(user)}>Download</button></td>
                                    </tr>

                                })}
                        </tbody>
                    </div>
                </div>
            </div>



        </>
    )
}
