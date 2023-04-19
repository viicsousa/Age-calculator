import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c9c9c9;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 3rem;
  border-radius: 2rem 2rem 7rem 2rem;
`;

export const ContainerInputs = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CardsInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`

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
  scroll-behavior: hidden;
  ::placeholder {
    color: #c1c1c1;
    font-weight: bold;
  }
  .error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}
`;

export const DivisionButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  div {
    width: 27rem;
    height: 1px;
    background-color: #c1c1c1;
  }
`;

export const Button = styled.button`
  background: #844dfa;
  border: none;
  color: #ffffff;
  padding: 1rem;
  border-radius: 1rem;
`;

export const ContainerAge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Age = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  .birthday {
    color: #844dfa;
    font-size: 54px;
    font-weight: 700;
  }
`;

export const Number = styled.div`
  display: flex;
  gap: 0.5rem;
  .nonenumber {
    width: 2.5rem;
    height: 0.6rem;
    background: #844dfa;
    -webkit-transform: skew(20deg); /* Chrome, Opera */
    -ms-transform: skew(20deg); /* IE */
    transform: skew(20deg); /* Padrão */
  }
`;

export const Text = styled.div`
  color: #000000;
  font-size: 75px;
  font-weight: 700;
`;
