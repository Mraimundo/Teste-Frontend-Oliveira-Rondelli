import styled from "styled-components";

export const TableLine = styled.tr`

`;

export const TableColumn = styled.td`
    padding: 0.625rem 0;

    @media only screen and (max-width: 480px) {
       &:nth-child(5){
           margin-left: 1rem; 
        }   
    }
   
`;

export const Category = styled.div<{ color: string }>`
display: inline-block;
padding: 0.313rem;
border-radius: 5px;
color: white;
background-color: ${props => props.color};
`;

export const Value = styled.div<{ color: string }>`
color: ${props => props.color};
`;

export const Delete = styled.div<{ color: string }>`

button {
    color: ${props => props.color};
    background: transparent;
    border: none;

    svg {
        width: 30px; 
        height: 30px;

        @media only screen (max-width: 480px) {
            width: 25px; 
            height: 25px;
        }
    }
}    
`;

