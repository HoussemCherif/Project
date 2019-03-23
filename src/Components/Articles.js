import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const Articles = (props) => {
    return (
        <div>
            <Row>
                <Col sm="3">
                    <Card>
                        <CardImg src="data:image/png;base64,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" />
                        <CardBody>
                            <CardTitle>Jardin D'enfants GomyCode </CardTitle>
                            
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Voir la Suite</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm="3">
                    <Card>

<CardImg Src = "https://ixxidesign.azureedge.net/media/1676571/Mickey-Mouse-2.jpg?mode=max&width=562&height=613"/>                        <CardBody>
                            <CardTitle>Jardin D'enfants Horria </CardTitle>
                            
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Voir la Suite</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm="3">
                    <Card>

<CardImg Src = "https://ixxidesign.azureedge.net/media/1676571/Mickey-Mouse-2.jpg?mode=max&width=562&height=613"/>                        <CardBody>
                            <CardTitle>Jardin D'enfants Innovation  </CardTitle>
                            
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Voir la Suite</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm="3">
                    <Card>

<CardImg Src = "https://ixxidesign.azureedge.net/media/1676571/Mickey-Mouse-2.jpg?mode=max&width=562&height=613"/>                        <CardBody>
                            <CardTitle>Jardin D'enfants Rades  </CardTitle>
                            
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Voir la Suite</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
        
    );
};

export default Articles;