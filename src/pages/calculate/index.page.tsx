import { Container, Card, ContainerInputs, Inputs, Label, Input, DivisionButton, Age } from "./styles";

export default function Calculate() {
  return (
    <Container>
      <Card>
        <ContainerInputs>
          <Inputs>
          <Label htmlFor="id">DAY</Label>
          <Input id="day" placeholder="DD"/></Inputs>
          <Inputs>
          <Label htmlFor="id">MONTH</Label>
          <Input id="day" placeholder="MM"/></Inputs>
          <Inputs>
          <Label htmlFor="id">YEAR</Label>
          <Input id="day" placeholder="YYYY"/>
          </Inputs>
        </ContainerInputs>
        
        <DivisionButton>

        </DivisionButton>
        <Age>

        </Age>
      </Card>
    </Container>
  );
}
