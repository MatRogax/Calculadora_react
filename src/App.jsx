import { Container,Content,Row  } from './styles.jsx'
import Input from './components/input'
import Button from './components/Button'
import { useState } from 'react'

const App = () => {

  const [CurrentNumber,SetCurrentNumber] = useState('0')
  const [FirstNumber,SetFirstNumber] = useState('0')
  const [Operation,SetOperation] = useState('')

  const AddNumber = (number) => {
    SetCurrentNumber(prev =>`${prev == '0' ? '' : prev}${number}` )

  }

  const Clean = () =>{
    SetCurrentNumber('0')
    SetFirstNumber('0')
    SetOperation('')


  }

  const SumNumbers = () =>{
    if(FirstNumber == '0'){
      SetFirstNumber(String(CurrentNumber))
      SetCurrentNumber('0')
      SetOperation('+')
      
  

    } 
    else{
      const sum = Number(FirstNumber) + Number(CurrentNumber)
      SetCurrentNumber(String(sum))
      SetOperation('')
    }
  }

  const SubNumbers = () =>{
    if(FirstNumber == '0'){
      SetFirstNumber(String(CurrentNumber))
      SetCurrentNumber('0')
      SetOperation('-')
      
  

    } 
    else{
      const sub = Number(FirstNumber) - Number(CurrentNumber)
      SetCurrentNumber(String(sub))
      SetOperation('')
    }
  }

  const DivNumbers = () =>{
    if(FirstNumber == '0'){
      SetFirstNumber(String(CurrentNumber))
      SetCurrentNumber('0')
      SetOperation('/')
      
  

    } 
    else{
      const div = Number(FirstNumber) / Number(CurrentNumber)
      SetCurrentNumber(String(div))
      SetOperation('')
    }
  }

  const MultNumbers = () =>{
    if(FirstNumber == '0'){
      SetFirstNumber(String(CurrentNumber))
      SetCurrentNumber('0')
      SetOperation('x')
      
  

    } 
    else{
      const mult = Number(FirstNumber) * Number(CurrentNumber)
      SetCurrentNumber(String(mult))
      SetOperation('')
    }
  }

  const RestDiviNumbers = () =>{
    if(FirstNumber == '0'){
      SetFirstNumber(String(CurrentNumber))
      SetCurrentNumber('0')
      SetOperation('R')
      
  

    } 
    else{
      const rest = Number(FirstNumber) % Number(CurrentNumber)
      SetCurrentNumber(String(rest))
      SetOperation('')
    }
  }


  const SetResultado = () =>{
    if(FirstNumber != '0' && CurrentNumber!= '0' || Operation != ''){
        switch(Operation){
          case '+':
            SumNumbers();
            break;
          case '-':
            SubNumbers();
            break;

          case '/':
            DivNumbers();
            break;

          case 'x':
            MultNumbers();
            break;

          case 'R':
            RestDiviNumbers();
            break;

          default:
            break;
        }
      
    
    } 
    else{
      const sum = Number(FirstNumber) + Number(CurrentNumber)
      SetCurrentNumber(String(sum))
    }
  }

  return (
    <>

    <Container>
     <Content>
          <Input value = {CurrentNumber}/>
          <Row>
              <Button label="C"   onClick={Clean}/>
              <Button label="R"   onClick={RestDiviNumbers}/>
              <Button label="%"   onClick={() =>AddNumber('%')}/>
              <Button label="÷"   onClick={DivNumbers}/>
          </Row>
          <Row>
              <Button label="7"   onClick={() =>AddNumber('7')}/>
              <Button label="8"   onClick={() =>AddNumber('8')}/>
              <Button label="9"   onClick={() =>AddNumber('9')}/>
              <Button label="x"   onClick={MultNumbers}/>
          </Row>
          <Row>
              <Button label="4"   onClick={() =>AddNumber('4')}/>
              <Button label="5"   onClick={() =>AddNumber('5')}/>
              <Button label="6"   onClick={() =>AddNumber('6')}/>
              <Button label="-"   onClick={SubNumbers}/>
          </Row>
          <Row>
              <Button label="1"   onClick={() =>AddNumber('1')}/>
              <Button label="2"   onClick={() =>AddNumber('2')}/>
              <Button label="3"   onClick={() =>AddNumber('3')}/>
              <Button label="+"   onClick={SumNumbers}/>
          </Row>
          <Row>
              <Button label="^"   onClick={() => AddNumber('')}/>
              <Button label="0"   onClick={() =>AddNumber('0')}/>
              <Button label=","   onClick={() =>AddNumber(',')}/>
              <Button label="="   onClick={SetResultado}/>
          </Row>
    </Content>
  </Container>

    </>
  )
}

export default App
