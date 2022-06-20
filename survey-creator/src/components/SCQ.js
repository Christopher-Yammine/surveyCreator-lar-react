import React from 'react'

const SCQ = () => {
    return (
        <div>
            <form className='add-form'>
                <div className='form-control'>
                    <label>Enter name</label>
                    <input
                        type='text'
                        placeholder='Enter question here'
                    ></input>
                    <label>Enter first option</label>
                    <input
                        type='text'
                        placeholder='Option 1'
                    ></input>
                    <label>Enter second option</label>
                    <input
                        type='text'
                        placeholder='Option 2'
                    ></input>
                    <label>Enter third option</label>
                    <input
                        type='text'
                        placeholder='Option 3'
                    ></input>
                    <label>Enter fourth option</label>
                    <input
                        type='text'
                        placeholder='Option 4'
                    ></input>

                </div>
            </form>
        </div>
    )
}

export default SCQ