import {
  Container,
  Card,
  ContainerInputs,
  Inputs,
  Label,
  Input,
  DivisionButton,
  Button,
  ContainerAge,
  Age,
  Number,
  Text,
} from "./styles";

export default function Calculate() {
  return (
    <Container>
      <Card>
        <ContainerInputs>
          <Inputs>
            <Label htmlFor="id">DAY</Label>
            <Input id="day" placeholder="DD" />
          </Inputs>
          <Inputs>
            <Label htmlFor="id">MONTH</Label>
            <Input id="day" placeholder="MM" />
          </Inputs>
          <Inputs>
            <Label htmlFor="id">YEAR</Label>
            <Input id="day" placeholder="YYYY" />
          </Inputs>
        </ContainerInputs>
        <DivisionButton>
          <div></div>
          <Button>Calcular</Button>
        </DivisionButton>
        <ContainerAge>
          <Age>
            <Number>
              <div className="nonenumber"></div>{" "}
              <div className="nonenumber"></div>
            </Number>
            <Text>years</Text>
          </Age>
          <Age>
            <Number>
              <div className="nonenumber"></div>
              <div className="nonenumber"></div>
            </Number>
            <Text>months</Text>
          </Age>
          <Age>
            <Number>
              <div className="nonenumber"></div>{" "}
              <div className="nonenumber"></div>
            </Number>
            <Text>days</Text>
          </Age>
        </ContainerAge>
      </Card>
    </Container>
  );
}
