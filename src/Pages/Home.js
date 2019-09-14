import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { Map } from '@esri/react-arcgis';

const axios = require('axios');

class Home extends React.Component {
  state = {
    current_location: '',
    destination: '',
    divisions: []
  };

  componentDidMount() {
    var self = this;
    axios.get('https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/Police_Divisions/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID,AGENCY,DIV,UNIT_NAME,ADDRESS,CITY&outSR=4326&f=json'
    ).then(function (response) {
      self.setState({ divisions: response.data.features })
    }).catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Form id="search">
          <FormControl
            type="text"
            placeholder="Your Location"
            onChange={event => this.setState({ current_location: event.target.value })} />

          <FormControl
            type="text"
            placeholder="Your Destination"
            onChange={event => this.setState({ destination: event.target.value })} />

          <Button type="submit">
          </Button>

          <Map
            style={{ width: '100vw', height: '100vh' }}
            viewProperties={{
              center: [-79.3926, 43.6672],
              zoom: 10
            }} />
        </Form>
      </div>
    );
  }
}

export default Home;