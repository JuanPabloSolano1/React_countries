import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import numeral from 'numeral';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Country.css';

export class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
    this.handleCountry = this.handleCountry.bind(this);
  }
  handleCountry() {}
  componentDidMount() {
    axios('https://restcountries.eu/rest/v2/all')
      .then((response) => this.setState({ countries: response.data }))
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { countries } = this.state;
    let country = countries.map((element, index) => {
      const { flag, name, population, region, capital } = element;
      return (
        <div key={index} className="Card">
          <Card>
            <CardActionArea>
              <img
                className="image"
                src={flag}
                title="Contemplative Reptile"
                alt="blank"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name.length > 20 ? name.slice(0, 20) + '...' : name}
                </Typography>
                <div className="Card-Text">
                  <Typography variant="body2" component="p">
                    <strong>Population:</strong>{' '}
                    {numeral(parseInt(population)).format('0,0')}
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
        <div className="card-container">{country}</div>
      </div>
    );
  }
}
