import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './comp.css';
import img from './contact.webp';
import { Link } from 'react-router-dom';
export default function Firstpage() {
    return (
        <>
            <div>
                <div className=' container-fluid'>
                    <div className=' bg row mt-2 p-4'>
                        <div className='col-lg-4'></div>
                        <div className=' col-lg-4'>
                            <h1 className='text-center mt-3'>Contacts Management</h1>
                        </div>
                        <div className=' col-lg-4 mt-4 text-center'>
                            <Link to="/add"><button type='button' name='button1' id='button1' value='add' className='mr-2 btn btn-primary'>Add Details</button></Link>
                            <Link to="/view"><button type='button' name='button1' id='button1' value='add' className=' btn btn-primary'>View Details</button></Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'></div>
                        <div className='col-lg-4 ml-3 mt-5'>
                            <input type="search" id='serch' name='serch' className='form-control' placeholder='search' />
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row '>
                            <div className='col-lg-1'></div>
                            <img src={img} className=" col-lg-10 first" />
                            <div className='col-lg-1'></div>
                    </div>
                </div>
            </div>
        </>
    );
}