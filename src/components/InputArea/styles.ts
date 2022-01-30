import styled from 'styled-components';

export const Container = styled.div`
    background-color: #007991;
    border-radius: 0.625rem;
    padding: 1.25rem;
    margin-top: 1.25rem;
    display: flex;
    align-items: center;
    color: white;

    @media only screen and (max-device-width: 700px) {
        flex-direction: column;
    }
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 0.625rem;
    
    @media only screen and (max-device-width: 700px) {
        width: 100%;
    }
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 0.313rem;
`;
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 0.313rem;
    border: 1px solid lightblue;
    border-radius: 5px;
    &:focus  {
        outline: none;
    }
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 0.313rem;
    border: 1px solid lightblue;
    border-radius: 5px;
     
    &:focus  {
        outline: none;
    }
`;
export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 0.313rem;
    border: none;
    border-radius: 5px;
    background-color: #64B83C;
    font-weight: bold;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    transition: .3s;

    &:hover {
        background-color: #4B8A2D;

    }
`;
