import React from 'react'
import Navbar from './Navbar'

const AddProduct = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 align="center"><u>Product Add</u></h1>
                <div className="card" >

                    <div className="card-body">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Product Name</label>
                                        <input type="text" className="form-control" />

                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Product Code</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Description</label>
                                        <textarea name="" id="" className="form-control"></textarea>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Colour</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Price</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Brandr</label>
                                        <select name="" id="" className="form-control">
                                            <option value="Puma">Puma</option>
                                            <option value="Adidas">Adidas</option>
                                            <option value="Walkeero">Walkeero</option>
                                        </select>
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Customer Care Number</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                        <button className="btn btn-success">Add product</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct