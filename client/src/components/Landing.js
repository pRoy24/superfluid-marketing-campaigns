import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './landing.scss';
import water from '../images/w903.png';
import {Link, withRouter} from 'react-router-dom';


class Landing extends Component {
  redirectToHome = () => {
    const {history} = this.props;
    history.push('/app/campaign');
  }
  
  render() {
    return (
      <div  className="landing-page-container">
      <Container>
        <div className="app-landing-text-container">
          <div className="h4 app-heading">Superfluid marketing campaigns</div>
          <Row>
          <Col lg={4}>
            <img src={water} className="landing-page-image"/>
          </Col>
          <Col lg={8}>
          <div>
            <div className="landing-line">
              Get better social engagement and metrics.
            </div>
            <div className="landing-line">
              Engamanent is real-time, so should your payments be.              
            </div>
            <div className="landing-line">
              Pay out your influencers and marketers in real-time based on engagement.
            </div>

            <div>
              <Button onClick={this.redirectToHome} className="primary-btn landing-btn">
                 Go to App
              </Button>
            </div>
          </div>
          </Col>
          </Row>
        </div>
      </Container>
      </div>
      )
  }
}

export default withRouter(Landing);