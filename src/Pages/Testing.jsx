import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Testing = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    if (data === null) {
        return <p>Loading data...</p>;
    }

    return (
        <div>
            <p>Foo: {data.foo}</p>
            <p>Baz: {data.baz}</p>
        </div>
    );
    // const [isDataLoaded, setDataLoaded] = useState(false);
    //
    // useEffect(() => {
    //     // Get the stored value of isDataLoaded from localStorage
    //     const storedDataLoaded = localStorage.getItem('isDataLoaded');
    //     if (storedDataLoaded !== null) {
    //         setDataLoaded(JSON.parse(storedDataLoaded));
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     // Store the current value of isDataLoaded in localStorage
    //     localStorage.setItem('isDataLoaded', JSON.stringify(isDataLoaded));
    // }, [isDataLoaded]);
    //
    // const handleLoadData = () => {
    //     setDataLoaded(true);
    // }
    //
    // return(
    //     <>
    //         <div>
    //             <button onClick={handleLoadData}>Load Data</button>
    //             {isDataLoaded ? <p>Data loaded successfully!</p> : <p>Click the button to load data.</p>}
    //         </div>
    //     </>
    // )
}