import React from 'react'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";

import axios from 'axios';

import ListGroup from 'react-bootstrap/ListGroup';

// import Results from './Results';

import { useNavigate } from "react-router-dom";

function Postcode() {
    const [details, setDetails] = useState([])
    const [postcode, setPostcode] = useState('')
    const [postcodeList, setPostcodeList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        // findPostcode();

    }, []);
    const displayDetails = async (label) => {
        // findPostcode(label);
        const res = await axios.get(`https://api.postcodes.io/postcodes/${label}`);
        navigate("/details", { state: res.data.result });

    };

    const handleRecord = (event) => {
        const postcode = event.target.value;
        setPostcode(postcode);
        if (postcode) { findAutoPostcode(postcode); }

    };

    const findPostcode = async () => {
        const res = await axios.get(`https://api.postcodes.io/postcodes/${postcode}`);
        // setDetails(res.data.result);
        navigate("/details", { state: res.data.result });


    };

    const findAutoPostcode = async (value) => {
        const res = await axios.get(`https://api.postcodes.io/postcodes/${value}/autocomplete`);
        setPostcodeList(res.data.result);
        console.log(res.data.result);

    };
    return (
        <>
            <div className='my-5 container text-center'>
                <input className='mx-2' onChange={handleRecord}></input>
                <Button variant="primary" onClick={findPostcode}>Primary</Button>
                {postcodeList.length !== 0 ? <>
                    <ListGroup className='my-5'>
                        {postcodeList.map((label) => (
                            <ListGroup.Item key={label} onClick={() => displayDetails(label)}>{label}</ListGroup.Item>
                        ))}

                    </ListGroup>
                </> : <><div>No result are searched or found</div></>}
            </div>
        </>
    )
}

export default Postcode