import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c9c9c9;
  width: 100%;
  min-height: 100vh;
`;

export const Card = styled.div`
  display: flex;
  background-color: #FFFFFF;
  padding: 10rem;
  border-radius: 3rem 3rem 7rem 3rem;
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const Label = styled.label`
  color: #7c7c7c;
  font-weight: 700;
  font-size: 12px;
`;

export const Input = styled.input`
  border: 1px solid #c1c1c1;
  border-radius: 0.6rem;
  padding: 0.7rem;
  width: 6rem;
  color: #7c7c7c;
  ::placeholder {
    color: #c1c1c1;
    font-weight: bold;
  }

`;

export const DivisionButton = styled.div``;

export const Age = styled.div``;