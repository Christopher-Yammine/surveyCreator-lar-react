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
    const [existingSurv, setexisting] = useState()
    function handleSelectChange(e) {
        console.log(e)
        setCompchoice(e);
    }
    function changeAdd() {
        setexisting();
        window.localStorage.clear()
    }
    function addTitle() {

        let data = new FormData()
        data.append("name", surveyTitle)
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/addSurvey',
            data: data
        }).then(function (response) {
            localStorage.setItem("id_surv", response.data.id_surv);
            checkSur();
        })
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

        } else if (String(compChoice) === String(2)) {
            let val1 = document.getElementsByClassName("form-control")[1].children[1].value;
            let val2 = document.getElementsByClassName("form-control")[1].children[3].value;
            let val3 = document.getElementsByClassName("form-control")[1].children[5].value;
            valArr = [{ "question": val1, "option1": val2, "option2": val3 }]
        } else if (String(compChoice) === String(3)) {
            let val1 = document.getElementsByClassName("form-control")[1].children[1].value;
            valArr = [{ "question": val1 }]
        } else if (String(compChoice) === String(4)) {
            let val1 = document.getElementsByClassName("form-control")[1].children[1].value;
            let val2 = document.getElementsByClassName("form-control")[1].children[3].value;
            let val3 = document.getElementsByClassName("form-control")[1].children[5].value;
            let val4 = document.getElementsByClassName("form-control")[1].children[7].value;
            let val5 = document.getElementsByClassName("form-control")[1].children[9].value;
            valArr = [{ "question": val1, "option1": val2, "option2": val3, "option3": val4, "options4": val5 }];
        }
        setoptionsarr([...optionsarr, valArr]);
        let data = new FormData();
        if (String(compChoice) === String(4) || String(compChoice) === String(1)) {
            data.append("id_type", compChoice);
            data.append("id_survey", localStorage.getItem("id_surv"));
            data.append("text", valArr[0].question);
            data.append("choice0", valArr[0].option1);
            data.append("choice1", valArr[0].option2);
            data.append("choice2", valArr[0].option3);
            data.append("choice3", valArr[0].options4);

        } else if (String(compChoice) === String(2)) {
            data.append("id_type", compChoice);
            data.append("id_survey", localStorage.getItem("id_surv"));
            data.append("text", valArr[0].question);
            data.append("choice0", valArr[0].option1);
            data.append("choice1", valArr[0].option2);
        } else {
            data.append("id_type", compChoice);
            data.append("id_survey", localStorage.getItem("id_surv"));
            data.append("text", valArr[0].question);
        }
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/addRest',
            data: data
        }).then(function (response) {
            console.log(response)
        })


        // console.log(e, optionsarr);

    }
    function checkSur() {
        setexisting(localStorage.getItem("id_surv"))
    }
    function getTypes() {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/showTypes',

        }).then(function (response) {
            settypesarr(response.data.types);


        })
    }
    useEffect(() => {
        getTypes();
        checkSur();
    }, [])

    return (
        <div>
            <div className='form-control'>
                {(() => {
                    if (existingSurv == null) {
                        return (<div><input type="text"
                            value={surveyTitle}
                            placeholder="survey name goes here"
                            onChange={(e) => {
                                setSurveyTitle(e.currentTarget.value);

                            }}></input><div>

                                <button className='btn' onClick={addTitle}>add survey name</button>
                            </div></div>)
                    }


                })()
                }


            </div>
            {(() => {
                if (existingSurv) {
                    return (<button type='button' className='btn' onClick={changeAdd}>New survey</button>)
                }


            })()
            }



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