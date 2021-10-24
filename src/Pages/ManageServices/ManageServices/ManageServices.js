import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [allservices, setAllservices] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/services')
            .then(res => res.json())
            .then(data => setAllservices(data)); 
    }, [])
    const handleDelete = id => {
        // console.log("buttton clicked");
        const url = `http://localhost:3001/services/${id}`
        fetch(url, {
            method: 'DELETE',
            
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount) {
                    const remaining = allservices.filter(service => service._id !== id)
                    setAllservices(remaining)
                    alert('deleted successfully')
                    
               }
        })
    }
    
    return (
        <div>
            <h2>manage kor beda</h2>
            {allservices.map(service => <div key={service._id}>{service.firstName}<button onClick={()=>handleDelete(service._id)}>Delete</button></div>)}
        </div>
    );
};

export default ManageServices;