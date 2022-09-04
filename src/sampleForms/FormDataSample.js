import React, { useState, useRef } from 'react'

export const FormDataSample = props => {
    const submit = e => {
        e.preventDefault()
        const form = new FormData(e.target);
        console.log(form.get('firstName'));
        alert('data save succ...');
    }

    return (
        <form onSubmit={submit}>
            {/* <input name="firstName" onChange={(e) => setFirstName(e.target.value)} /> */}
            FirstName:
            <input type="text" name="firstName" />
            LastName:
            <input type="text" name="lastName" />
            <input type="submit" name="Save" />
        </form>
    )
}