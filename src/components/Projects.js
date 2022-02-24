import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { Col, Container, Row } from 'react-bootstrap';
import { Containerdi, Styleh1 } from '../Styles/StyledProjects';
const Projects = () => {

  return (
    <Containerdi>
      <Styleh1>Proyectos</Styleh1>
      <Container>
        <Row>
          <Col>
            <Card>
              <Image src='https://i.imgur.com/u9RKPCF.jpg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Pagina Triburo</Card.Header>
                <Card.Description>
                  Esta pagina esta dedicada a mi difunta abuela mariagregoria
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button color='facebook' href='https://jacobgonzalezpastor.github.io/Reto_1/' target='blank'>
                  Ver la pagina
                </Button>
                <Button color='github' href='https://github.com/JacobGonzalezPastor/Reto_1' target='blank'>
                  <Icon name='github' /> Codigo
                </Button>
              </Card.Content>
            </Card>
          </Col>
          <Col>
            <Card>
              <Image src='https://i.imgur.com/JBwBnI2.png' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Survay page</Card.Header>
                <Card.Description>
                  en esta pagina se puede llenar un formulario basico
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button color='facebook' href='https://jacobgonzalezpastor.github.io/Reto_2/' target='blank'>
                  Ver la pagina
                </Button>
                <Button color='github' href='https://github.com/JacobGonzalezPastor/Reto_2' target='blank'>
                  <Icon name='github' /> Codigo
                </Button>
              </Card.Content>
            </Card>
          </Col>
          <Col>
            <Card>
              <Image src='https://i.imgur.com/cVxf5X5.png' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Landing page</Card.Header>
                <Card.Description>
                  landing page de la cooperativa transdigitalcoop
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button color='facebook' href='https://jacobgonzalezpastor.github.io/Reto_3/' target='blank'>
                  Ver la pagina
                </Button>
                <Button color='github' href='https://github.com/JacobGonzalezPastor/Reto_3' target='blank'>
                  <Icon name='github' /> Codigo
                </Button>
              </Card.Content>
            </Card>
          </Col>
        </Row>
      </Container>
    </Containerdi>
  )
}

export default Projects