import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './comp.css';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function Addcontacts() {
        // const [phonee, setPhonee] = useState("");
        // const [alphone, setAlphone] = useState("");


    const handlesubmit = async (event) => {
        event.preventDefault();
        var key = new FormData(event.target);
        var value = { headers: { "enctypr": "multipart/form-data" } };

        

        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var gender = document.getElementById("gender").value;
        var phone = document.getElementById( "phone").value;
        var alternate = document.getElementById("alternate").value;
        // var phone=  phonee;
        
        //   alert(phonee);
        // var alternate = document.getElementById("alternate");

        if (firstname === '' || firstname === null) {
            alert('enter your firstname');
        }
        else if (lastname === '' || lastname === null) {
            alert('enter your lastname');
        }
        else if (email === '' || email === null) {
            alert('enter your email');
        }
        else if ((gender === 'male' && gender ===null) || (gender === 'female' && gender ===null) ) {
            alert('mention your option');
        }
        else if  (phone === '' || phone === null) {
            alert('enter your phone no');
        }
        else if (alternate === '' || alternate === null) {
            alert('enter your alternate number');
        }
        else {
            await axios.post("http://localhost:3002/add", key, value)
                .then(function (res) {
                    if (res.data.status === 'error') {
                        alert("Error");
                        window.location.reload();
                    }
                    else if (res.data.status === 'success') {
                        alert('Data inserted');
                        window.location.reload();
                    }
                })
                .catch(function (err) {
                    alert(err);
                    window.location.reload();
                })
        }


    }
    return (
        <>
            <div>
                <div className=' background mb-1p-2 container-fluid'>
                    
                    <div className='row bg-primary p-4 '>
                        <div className='col-lg-4'></div>
                        <div className=' col-lg-5'>
                            <h1 className=' text-light ml-3 mt-2'>Contacts Management Details</h1>
                        </div>
                        <div className='col-lg-1'></div>
                        <div className=' p-4 col-lg-2'>
                            <Link to="/"><button type='submit' name='goback' id='goback' className='btn btn-danger'>Go Back</button></Link>
                        </div>
                    </div>
                    <form onSubmit={handlesubmit}>
                        <div className=' container text'>
                        <div className='row mt-5'>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>First Name:</h5>
                            </div>
                            <div className='col-lg-4'>
                                <input type="text" id='firstname' name='firstname' className=' col-lg-11 form-control text-center' />
                            </div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Last Name:</h5>
                            </div>
                            <div className='col-lg-4'>
                                <input type="text" id='lastname' name='lastname' className='col-lg-11 form-control text-center' />
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Email id:</h5>
                            </div>
                            <div className='col-lg-4'>
                                <input type="text" id='email' name='email' className='col-lg-11 form-control text-center' />
                            </div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>gender:</h5>
                            </div>
                            <div className='col-lg-4 ml-2 row'>
                                <input type="radio" id="gender" className='p-1' name="gender" value="male"/>
                                <label className='mt-2 pr-2' >Male</label>
                                <input type="radio" id="gender" className='p-1' name="gender" value="female"/>
                                <label className='mt-2 pr-2'>Female</label>
                                <input type="radio" id="gender" className='p-1' name="gender" value="others"/>
                                <label className='mt-2 pr-2'>Others</label>  
                            </div>
                        </div>
                        <div className='row mt-5'>
                        <div className='col-lg-2'>
                                <h5 className='text-center'>Phone No:</h5>
                            </div>
                            <div className='col-lg-4'>
                                <input type="text" id= "phone"name= 'phone' className=' col-lg-11 form-control text-center' />
                            </div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Alt Phoneno:</h5>
                            </div>
                            <div className='col-lg-4'>
                                <input type="text" id='alternate' name='alternate' className='col-lg-11 form-control text-center' />
                            </div> 
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'></div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-5'></div>
                            <div className='col-lg-2'>
                                <button type='submit' name='submit' id='submit' value='submit' className=' text-center btn btn-primary col-lg-12'>Submit</button>
                            </div>
                            <div className='col-lg-5'>
                            
                            </div>
                        </div>
                        </div>
                    </form>
                
                </div>
            </div>
        </>
    );
}