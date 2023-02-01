import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './comp.css';
import { useParams } from 'react-router-dom';

export default function Updatedetails() {

    const { id } = useParams();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    // const [male, setMale] = useState('');
    // const [female, setFemale] = useState('');
    // const [others, setOthers] = useState('');
    const [phone, setPhone] = useState('');
    const [alternate, setAlternate] = useState('');

    useEffect(() => {
        fetch("http://localhost:3002/update/" + id + "")
            .then(Response => Response.json())
            .then(function (res) {
                setFirstname(res[0].firstname);
                setLastname(res[0].lastname);
                setEmail(res[0].email);
                setGender(res[0].gender);
                // setMale(res[0].male);
                // setFemale(res[0].female);
                // setOthers(res[0].others);
                setPhone(res[0].phone);
                setAlternate(res[0].alternate);
            })
            .catch(function (error) {
                alert(error);
                window.location.href = "/";
            })
    }, [])


    const handlesubmit = async (event) => {
        event.preventDefault();
        var key = new FormData(event.target);
        var value = { headers: { "enctypr": "multipart/form-data" } };



        await axios.put("http://localhost:3002/updatedata/" + id + '', key, value)
            .then(function (res) {
                if (res.data.status === 'error') {
                    alert("error");
                    window.location.href = "/";
                }
                else if (res.data.status === 'success') {
                    alert('Data successfully update');
                    window.location.href = "/";
                }
            })
            .catch(function (error) {
                alert(error);
                window.location.href = "/";
            })
    }

    return (
        <>
            <div>
                <div className='background p-2 container-fluid'>
                    <div className='row'>
                        <div className=' bg p-4 col-lg-12'>
                            <h1 className='text-center mt-2'>Contacts Management Details</h1>
                        </div>
                    </div>
                    <form onSubmit={handlesubmit}>
                        <div className='row mt-5'>
                            <div className='col-lg-1'></div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>First Name:</h5>
                            </div>
                            <div className='col-lg-3'>
                                <input type="text" id='firstname' name='firstname' className='form-control text-center' value={firstname} onChange={(a) => setFirstname(a.target.value)} />
                            </div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Last Name:</h5>
                            </div>
                            <div className='col-lg-3'>
                                <input type="text" id='lastname' name='lastname' className='form-control text-center' value={lastname} onChange={(a) => setLastname(a.target.value)} />
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-1'></div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Email id:</h5>
                            </div>
                            <div className='col-lg-3'>
                                <input type="email" id='email' name='email' className='form-control text-center' value={email} onChange={(a) => setEmail(a.target.value)} />
                            </div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Gender:</h5>
                            </div>
                            <div className='col-lg-4 ml-2 row'>
                                <input type="radio" id="gender" className='p-1' name="gender" value={gender} checked={(a) => setGender(a.target.value)}/>
                                <label className='mt-2 pr-2' >Male</label>
                                <input type="radio" id="gender" className='p-1' name="gender" value={gender} checked={(a) => setGender(a.target.value)}/>
                                <label className='mt-2 pr-2'>Female</label>
                                <input type="radio" id="gender" className='p-1' name="gender" value={gender} checked={(a) => setGender(a.target.value)}/>
                                <label className='mt-2 pr-2'>Others</label>  
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-1'></div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Phone No:</h5>
                            </div>
                            <div className='col-lg-3'>
                                <input type="text" id='phone' name='phone' className='form-control text-center' value={phone} onChange={(a) => setPhone(a.target.value)} />
                            </div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Alternate No:</h5>
                            </div>
                            <div className='col-lg-3'>
                                <input type="text" id='alternate' name='alternate' className='form-control text-center' value={alternate} onChange={(a) => setAlternate(a.target.value)} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'></div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-5'></div>
                            <div className='col-lg-2'>
                                <button type='submit' name='submit' id='submit' value='submit' className=' text-center btn btn-danger col-lg-12'>Update</button>
                            </div>
                            <div className='col-lg-5'></div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}