import React from 'react';
import { useEffect, useState } from 'react';
import Plaintext from './Plaintext';
import SCQ from './SCQ';
import MCQ from './MCQ';
import Yesno from './Yesno';
const { default: axios } = require("axios");




const Types = () => {
    const [compChoice, setCompchoice] = useState("1");
    const [surveyTitle, setSurveyTitle] = useState("");
    const [typesarr, settypesarr] = useState([]);
    const [optionsarr, setoptionsarr] = useState([])
    function handleSelectChange(e) {

        setCompchoice(e);
    }
    function submitFields(e) {
        let valArr = [];
        if (String(compChoice) === String(1)) {
            let val1 = document.getElementsByClassName("form-control")[1].children[1].value;
            let val2 = document.getElementsByClassName("form-control")[1].children[3].value;
            let val3 = document.getElementsByClassName("form-control")[1].children[5].value;
            let val4 = document.getElementsByClassName("form-control")[1].children[7].value;
            let val5 = document.getElementsByClassName("form-control")[1].children[9].value;
            valArr = [{ "question": val1, "option1": val2, "option2": val3, "option3": val4, "options4": val5 }];
            setoptionsarr([...optionsarr, valArr]);
        }


        // console.log(e, optionsarr);
        console.log(optionsarr.map());
    }
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
            <div className='form-control'>
                <input type="text"
                    value={surveyTitle}
                    placeholder="survey name goes here"
                    onChange={(e) => {
                        setSurveyTitle(e.currentTarget.value);

                    }}></input>
            </div>

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
            <div>
                <button type='button' className='btn btn-block' onClick={(e) => {
                    submitFields(e);
                }}>add question</button>
            </div>
            <div>
                {
                    optionsarr.map((option, index) => (<div key={index}>
                        <p>{option.question}<br /></p></div>))
                }
            </div>

        </div>
    )
}

export default Types