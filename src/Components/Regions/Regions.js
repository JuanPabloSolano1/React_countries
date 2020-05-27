import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { Link } from 'react-router-dom';

import './Regions.css';

export class Regions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regions: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://restcountries.eu/rest/v2/region/${this.props.match.params.region}`
      )
      .then((response) => this.setState({ regions: response.data }))
      .catch((error) => console.log(error));
  }
  render() {
    const { regions } = this.state;
    const region = regions.map((element, index) => {
      const { name, region, capital, population, flag } = element;
      return (
        <div className="Card">
          <Card key={index}>
            <CardActionArea>
              <img
                className="image"
                src={flag}
                title="Contemplative Reptile"
                alt="blank"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name.length > 20 ? name.slice(0, 15) + '...' : name}
                </Typography>
                <div className="Card-Text">
                  <Typography variant="body2" component="p">
                    <strong>Population:</strong> {population}
                  </Typography>
                  <Typography variant="body2" component="p">
                    <strong>Region:</strong> {region}
                  </Typography>
                  <Typography variant="body2" component="p">
                    <strong>Capital:</strong> {capital}
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={'/' + name}>
                <Button className="Main-button" size="small" color="primary">
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </Card>
        </div>
      );
    });
    return (
      <div>
        <Link to="/">
          <Button id="back-home-regions" className="back-button">
            <ArrowLeftIcon className="arrow" />
            Home
          </Button>
        </Link>
        <div className="card-container-region">{region}</div>;
      </div>
    );
  }
}
