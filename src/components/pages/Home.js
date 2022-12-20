import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Card from "../UI/Card";
import Button from 'react-bootstrap/Button';
import './Home.css';


const homeData=[
  {
    id:"1",
    date:"JUL 16",

    name:"DETROIT MI",
    description:"DTE ENERGY MUSIC THEATRE",
  },
  {
    id:"2",
    date:"JUL19",

    name:"TORONTO,ON",
    description:"BUDWEISER STAGE",
  },
  {
    id:"3",
    date:"JUL22",

    name:"BRISTOW, VA",
    description:"JIGGY LUBE LIVE",
  },
  {
    id:"4",
    date:"JUL 29",

    name:"PHOENIX, AZ",
    description:"AK-CHIN PAVILION",
  },
  {
    id:"5",
    date:"AUG 2",

    name:"LAS VEGAS, NV",
    description:"T-MOBILE ARENA",
  },
  {
    id:"6",
    date:"AUG 7",

    name:"CONCORD, CA",
    description:"CONCORD PAVILION",
  }
]

const Home = () => (

 
  <Card>

    <h1 className="heading">TOURS</h1>
    <Container>
      <Row>
        <Col>
        <Table responsive>
          <tbody>
            {
              homeData.map(item=>{
                return(
                  <tr className="container" key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td><Button variant="primary">Buy Tickets</Button></td>
                  </tr>
                )
              })
            }
          </tbody>

        </Table>
        </Col>
      </Row>
    </Container>
  </Card>
);

export default Home;