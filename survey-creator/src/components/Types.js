import React from 'react';
import { useEffect, useState } from 'react';
import Plaintext from './Plaintext';
import SCQ from './SCQ';
import MCQ from './SCQ';
import Yesno from './Yesno';
const { default: axios } = require("axios");




const Types = () => {
    const [compChoice, setCompchoice] = useState("");
    function handleSelectChange(e) {

        setCompchoice(e);
    }
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
            <select name='types' id='types' onChange={(e) => { handleSelectChange(e.currentTarget.value) }}>

                {typesarr.map((t) => {

                    return (<option value={t.id} key={t.id}>{t.description}</option>);
                })}
            </select>
            <div>
                {
                    (() => {
                        if (compChoice == 1) {
                            return (<MCQ />);
                        } else if (compChoice == 2) {
                            return (<Yesno />);

                        } else if (compChoice == 3) {
                            return (<Plaintext />)
                        } else {
                            return (<SCQ />)
                        }

                    })()
                }


            </div>

        </div>
    )
}

export default Types