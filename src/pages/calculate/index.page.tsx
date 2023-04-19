import React, { useState } from "react";

import moment from "moment";

import {
  Container,
  Card,
  ContainerInputs,
  CardsInputs,
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

interface AgeState {
  day: number;
  month: number;
  year: number;
  ageInYears: number;
  ageInMonths: number;
  ageInDays: number;
}

export default function Calculate() {
  const [state, setState] = useState<AgeState>({
    day: 0,
    month: 0,
    year: 0,
    ageInDays: 0,
    ageInMonths: 0,
    ageInYears: 0,
  });
  
  
  function handleAgeSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const birthdate = moment (
      `${state.year}-${state.month}-${state.day}`,
      "YYYY-MM-DD"
    )
    const diff = moment().diff(birthdate, "days");
    const duration = moment.duration(diff, "days");
    const years = Math.floor(duration.asYears());
    const months = Math.floor(duration.asMonths() % 12);
    const days = Math.floor(duration.asDays() % 30);
    setState({
      day: state.day,
      month: state.month,
      year: state.year,
      ageInYears: years,
      ageInMonths: months,
      ageInDays: days
    });
  }

  function handleAgeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  }

  return (
    <Container>
      <Card>
        <ContainerInputs onSubmit={handleAgeSubmit}>
          <CardsInputs>
          <Inputs>
            <Label htmlFor="id">DAY</Label>
            <Input
              id="day"
              type="number"
              name="day"
              placeholder="DD"
              value={state.day}
              onChange={handleAgeChange}
            />
          </Inputs>
          <Inputs>
            <Label htmlFor="id">MONTH</Label>
            <Input
              id="day"
              type="number"
              name="month"
              placeholder="MM"
              value={state.month}
              onChange={handleAgeChange}
            />
          </Inputs>
          <Inputs>
            <Label htmlFor="id">YEAR</Label>
            <Input
              id="day"
              type="number"
              name="year"
              placeholder="YYYY"
              value={state.year}
              onChange={handleAgeChange}
            />
            
          </Inputs>
          </CardsInputs>
          <DivisionButton>
          <div></div>
          <Button type="submit">Calcular</Button>
        </DivisionButton>
        </ContainerInputs>
        
        <ContainerAge>
          <Age>
            <Number>
            {state.ageInMonths == 0 && (
              <div>
                <div className="nonenumber"></div>
                <div className="nonenumber"></div>
              </div>
            )}

              {state.ageInYears > 0 && <div className="birthday">{state.ageInYears}</div>
              }
            </Number>
            <Text>years</Text>
          </Age>
          <Age>
            {state.ageInMonths == 0 && (
              <div>
                <div className="nonenumber"></div>
                <div className="nonenumber"></div>
              </div>
            )}
            {state.ageInMonths > 0 && <div className="birthday">{state.ageInMonths}</div>}
            <Text>months</Text>
          </Age>
          <Age>
            {state.ageInDays == 0 && (
              <div>
                <div className="nonenumber"></div>
                <div className="nonenumber"></div>
              </div>
            )}
            {state.ageInDays > 0 && <div className="birthday">{state.ageInDays}</div>}
            <Text>days</Text>
          </Age>
        </ContainerAge>
      </Card>
    </Container>
  );
}
