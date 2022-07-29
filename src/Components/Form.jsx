import React, { useState } from 'react'
import styled from 'styled-components'

const Form = ({ cancelForm, saveForm }) => {
    const [inputValue, setInputValue] = useState("")
    return (
        <Wrapper>
            <Input onChange={({ target }) => setInputValue(target.value)} text="text" placeholder='Write Something' />
            <ButtonWrapper>
                <Button bgColor="#F2A762" onClick={cancelForm}>Cancel</Button>
                <Button bgColor="#62B6F2" onClick={() => {
                    saveForm(inputValue)
                    setInputValue("")
                }}>Save</Button>
            </ButtonWrapper>
        </Wrapper>
    )
}

export default Form

const Wrapper = styled.div`
padding: 20px;
background:#FFFFFF;
box-shadow: 0px 1px 3px rgba(96,108,128,0.05);
border-radius: 8px;
`
const Input = styled.input`
    border: 0.5px solid #AFACAC;
    border-radius:4px;
    height: 27px;
    width: 100%;
    padding-left: 8px;
`
const ButtonWrapper = styled.div`
    display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 5px;
   margin-top: 12px;

`

const Button = styled.button`
    height: 24px;
    width: 100%;
    background: ${(props) => props.bgColor};
    border-radius: 5px;
    font-weight:600;
    font-size: 12px;
    line-height: 20px;
    color:#ffffff;
    border: none;
`