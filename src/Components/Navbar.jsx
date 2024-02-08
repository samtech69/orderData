import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" ><a class="head" ><span class="py-1 material-symbols-outlined">
                        menu
                    </span></a></a>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            
                        </ul>
                        <p className="d-flex pe-5" role="search">
                            <a className='pic' href='#' ><span class="material-symbols-outlined p-2 fs-2" >
                                account_circle
                            </span><span style={{ position: "relative", top: "-15px" }}>Vicky</span>
                                <span class="material-symbols-outlined p-2 fs-4">
                                    keyboard_arrow_down
                                </span></a>
                        </p>
                    </div>
                </div>
            </nav>






        </>
    )
}


    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
