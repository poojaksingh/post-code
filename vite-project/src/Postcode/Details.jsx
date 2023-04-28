import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function Details() {
    const [postcodeDetails, setPostcodeDetails] = useState([]);
    useEffect(() => {
        setPostcodeDetails(location.state)
    }, []);
    const location = useLocation();
    const navigate = useNavigate();


    return (
        <>
            <div className='container my-5'>
                <Card>
                    <Card.Header>
                        <b>{postcodeDetails.outcode}</b>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className='text-uppercase'>{'Region' + ' : ' + postcodeDetails.country || '-'}</Card.Title>
                        <Card.Text className='my-4'>
                            <p> {'Primary care trust' + ' - ' + postcodeDetails.primary_care_trust || '-'}</p>
                            <p> {'European electoral region' + ' - ' + postcodeDetails.european_electoral_region || '-'}</p>
                            <p> {'Region' + ' - ' + postcodeDetails.region || '-'}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button className='my-5' variant="outline-warning" onClick={() => navigate(-1)}>Go back</Button>
            </div>
        </>
    )
}

export default Details