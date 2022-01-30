import styled from "styled-components";

export const Container = styled.div`
    background-color: #007991;
    border-radius: 10px;
    padding: 1.25rem;
    margin-top: -2.5rem;
    display: flex;
    align-items: center;
    color: white;

    @media only screen and (max-device-width: 700px) {
        flex-direction: column;
    }
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    @media only screen and (max-device-width: 700px) {
        margin-bottom: 1rem;
    }
   
`;



export const ResumeArea = styled.div`
    flex: 2;
    display: flex;

    @media only screen and (max-device-width: 700px) {
        flex: 1;
        justify-content: space-between;
    }
`;

export const MonthArrow = styled.div`
    width: 2.5rem;
    text-align: center;
    font-size: 1.563rem;
    cursor: pointer;
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
    font-weight: bold;
    font-size: 1.375rem;
`;

