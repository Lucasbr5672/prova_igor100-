import styled from 'styled-components'

export const Form = styled.form`
margin-top:20px;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
max-width: 500px;
border-radius: 20px;
background-color:#002480;
color:white;
`
export const Label = styled.label`
margin-bottom: 15px;
width: 100%;
display:flex;
flex-direction: column;
`
export const Input = styled.input`
margin-bottom: 15px;
width: 100%;
display: flex;
flex-direction: column;
height:30px;
border-radius:5px;
`
export const TextA = styled.textarea`
padding: 20px;
font-size: 16px;
border-radius: 5px;
min-height: 100px;
`
export const Button = styled.button`
font-size: 16px;
color:black;
border: none;
border-radius: 30px;
cursor: pointer;
width: 150px;
height: 50px;
`