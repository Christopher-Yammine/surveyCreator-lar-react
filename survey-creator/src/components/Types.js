import React from 'react';
import { useEffect, useState } from 'react';
const { default: axios } = require("axios");



const Types = () => {

    const [typesarr, settypesarr] = useState([]);

    function getTypes() {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/showTypes',

        }).then(function (response) {
            console.log(response.data.types);
            settypesarr(response.data.types);


        })
    }
    useEffect(() => {
        getTypes();
    }, [])

    return (
        <div>
            <select name='types' id='types'>
                {typesarr.map((t) => {
                    return (<option value={t.id} key={t.id}>{t.description}</option>);
                })}
            </select>
            
        </div>
    )
}

export default Types