import React, { useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText ,Container,Col,Row,CardImg} from 'reactstrap';
import { UserContext } from '../../context/UserContext';
export default function Setting() {
  const {user} = useContext(UserContext);
  return (
    <Container>
     <Row>
      <Col xs="4">
      <CardImg
              style={{ borderRadius: 20 }}
              alt="Card image cap"
              src={`${user?.profilFotoUrl}`}
              width="100%"
            />
            
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
      </Col>
      <Col xs="8">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder={`${user.name}`} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Bio</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Age</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder={`${user.age}`} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Address</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder={`${user.address}`} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Title</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>ENGINEER</option>
            <option>TEACHER</option>
            <option>DOCTOR</option>
            <option>OFFICER</option>
            <option>STUDENT</option>
            <option>RETIRED</option>
            <option>JOBLESS</option>
          </Input>
        </FormGroup>
    
      
        <FormGroup tag="fieldset">
          <legend>Gender</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Female
            </Label>
          </FormGroup>
       
        </FormGroup>
       
        <Button>Submit</Button>
      </Form>
      </Col>
     </Row>
    </Container>
  )
}
