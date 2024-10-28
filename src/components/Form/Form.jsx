import React from 'react'
// import quizData from '../../components/TriviaQuizData'
import './Form.css'

const Form = (props) => {

    const { handleSubmit, onChange } = props

    return (
        <>
            <form className='mt-2' onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Qual o seu nome:</label>
                    <input placeholder='Seu nome' type="text" name='Nome' className="form-control" id="number" onChange={onChange} required />
                </div>

                <button type="submit" className="btn_btn-primary">Iniciar</button>
            </form>
        </>
    )
}

export default Form
