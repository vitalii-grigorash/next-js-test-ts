import React, { useState } from 'react'
import { Validation } from '../utils/Validation'
import * as FeedbackFormApi from '../utils/FeedbackFormApi'
import SuccessPopup from './SuccessPopup'

export default function FeedBackForm () {

    const name: any = Validation();
    const number: any = Validation();

    const [isSuccessPopupOpen, setSuccessPopupOpen] = useState<boolean>(false);
    const [submitButtonText, setSubmitButtonText] = useState<string>('Send form');
    const [senderName, setSenderName] = useState<string>('');

    const access: boolean = true;

    function handleSuccessPopupOpen (): void {
        if (!isSuccessPopupOpen) {
            setSuccessPopupOpen(true);
        } else {
            setSuccessPopupOpen(false);
        }
    }

    function submitForm (evt: { preventDefault: () => void; }) {
        evt.preventDefault();
        setSubmitButtonText('Sending...');
        FeedbackFormApi.sendForm(name.value, number.value, access)
        .then(() => {
            setSenderName(name.value);
            handleSuccessPopupOpen();
        })
        .catch((err: any) => {
            console.log(err.message);
        })
        .finally(() => {
            setSubmitButtonText('Send form');
            name.setValue('');
            number.setValue('');
        });
    }

    return (

        <>

            <form
                onSubmit={submitForm}
                className='form'
            >

                <h3 className="form__title">Feedback form</h3>

                <div className="form__input-container">
                    <input
                        type="text"
                        className="form__input"
                        id="name-input"
                        name="name"
                        value={name.value}
                        onChange={name.onChange}
                        minLength={2}
                        maxLength={50}
                        placeholder="Name"
                        pattern="[A-Za-zа-яёА-ЯЁ -]{1,}"
                        required
                    />
                    <span id="name-input-error" className="form__input_error">{name.errorMessage}</span>
                </div>

                <div className="form__input-container">
                    <input
                        type="text"
                        className="form__input"
                        id="number-input"
                        name="number"
                        value={number.value}
                        onChange={number.onChange}
                        minLength={3}
                        maxLength={20}
                        placeholder="Phone number"
                        pattern='^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$'
                        required
                    />
                    <span id="number-input-error" className="form__input_error">{number.errorMessage}</span>
                </div>

                <button type="submit" className="form__submit-button">{submitButtonText}</button>

            </form>

            <SuccessPopup
                isOpen={isSuccessPopupOpen}
                onClose={handleSuccessPopupOpen}
                name={senderName}
            />

        </>
    )
}