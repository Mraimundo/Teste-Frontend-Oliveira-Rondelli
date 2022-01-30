import styled from "styled-components";

export const Container = styled.div`
    @media only screen and (max-device-width: 700px) {
        width: 100%;
        overflow-x: auto;
    }
`;

export const Table = styled.table`
    width: 100%;
    background-color: #007991;
    padding: 1.25rem;
    border-radius: 10px;
    margin-top: 1.25rem;
    color: white;


    @media only screen and (min-width: 1200px) {
       &:tbody,tr,td:nth-child(1){width: 10%;}
       &:tbody,tr,td:nth-child(2){width: 30%;} 
       &:tbody,tr,td:nth-child(3){width: 30%;} 
       &:tbody,tr,td:nth-child(4){width: 10%;} 
       &:tbody,tr,td:nth-child(5){width: 10%;} 
    } 

     @media only screen and (max-width: 480px) {
    width: 100%;
       &:tbody,tr,td:nth-child(1){width: 10%;}
       &:tbody,tr,td:nth-child(2){width: 30%;} 
       &:tbody,tr,td:nth-child(3){width: 30%;} 
       &:tbody,tr,td:nth-child(4){width: 10%;} 
       &:tbody,tr,td:nth-child(5){
           width: 10%;
        } 
    }
`;

// export const TableHeadColumn = styled.th<{ width?: number }>`
//     padding: 0.625rem 0;
//     text-align: left;
//     width: ${props => props.width ? `${props.width}px` : 'auto'};
// `;

export const TableHeadColumn = styled.th`
    padding: 0.625rem 0;
    text-align: left;
`;