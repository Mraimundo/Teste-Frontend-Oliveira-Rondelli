import styled from "styled-components";

export const TableLine = styled.tr`

`;

export const TableColumn = styled.td`
    padding: 10px 0;
   
`;

export const Category = styled.div<{ color: string }>`
display: inline-block;
padding: 5px;
border-radius: 5px;
color: white;
background-color: ${props => props.color};
`;

export const Value = styled.div<{ color: string }>`
color: ${props => props.color};
`;

export const Delete = styled.div<{ color: string }>`
display: flex;
justify-content: content;
align-items: center;

button {
    color: ${props => props.color};
    background: transparent;
    border: none;
    svg {
        width: 30px; 
        height: 30px;
    }
   }   
`;

