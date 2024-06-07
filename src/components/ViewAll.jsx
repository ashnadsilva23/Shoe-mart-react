import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data, changeData] = useState(
        [
            { "pname": "Adidas", "price": 1200, "img": "https://m.media-amazon.com/images/I/41uiXAfCUXL._AC_UY1000_.jpg" },
            { "pname": "Air Jordan", "price": 2000, "img": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/67511a36-eecb-4e6d-b421-a45392744bb1/air-jordan-1-elevate-high-shoes-rKPNHR.png" },
            { "pname": "Nike", "price": 3000, "img": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/30d7afaa-343b-4439-b65d-bb544c65420e/revolution-7-road-running-shoes-dC34tK.png" },
            { "pname": "Jordan", "price": 2100, "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yLuqKiwS4u6rmwJd42w64aMO11mDK8uUPw&s" },
            { "pname": "puma", "price": 2500, "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbCZAyI-AGsucfeIHBwDqxF0OYtgVhYSm9Eg&s" },
            { "pname": "Bruton", "price": 1200, "img": "https://www.jiomart.com/images/product/original/rvcws2fyqc/bruton-trendy-sports-shoes-for-men-blue-product-images-rvcws2fyqc-0-202209021256.jpg?im=Resize=(500,630)" }
        ]
    )
    return (
        <div>
            <Navbar /><br></br>
            <div className="container">

                <h1> All Products</h1><br></br>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div class="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title{value.pname}</h5>
                                                <p className="card-text">{value.price}</p>
                                                <img height="250px" src={value.img} className="card-img-top" alt="..."></img>
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>

                                    </div>

                                }
                            )}



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll