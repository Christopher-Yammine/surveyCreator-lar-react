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
                    <div style={{ display: "inline-block" }}>
                        <label>
                            <input type="radio" value="1" name='yesno' />
                            scq
                        </label>
                        <label>
                            <input type="radio" value="2" name='yesno' />
                            cqqwdwd
                        </label>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default SCQ