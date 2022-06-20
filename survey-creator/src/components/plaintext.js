import React from 'react'

const plaintext = () => {
    return (
        <div>
            <form className='add-form'>
                <div className='form-control'>
                    <label>Enter name</label>
                    <input
                        type='text'
                        placeholder='Enter question here'
                    ></input>

                </div>
            </form>
        </div>
    )
}

export default plaintext