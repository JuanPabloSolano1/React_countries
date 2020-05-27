import React from 'react';
import './UniqueCountry.css';
import axios from 'axios';
import numeral from 'numeral';
import Button from '@material-ui/core/Button';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { Link } from 'react-router-dom';

export class UniqueCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      borders: [],
      currencies: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${this.props.match.params.country}`
      )
      .then((response) =>
        this.setState({
          country: response.data[0],
          borders: response.data[0].borders,
          currencies: response.data[0].currencies,
        })
      )
      .catch((error) => console.log(error));
  }
  render() {
    console.log(this.state.country);
    const {
      country: {
        name,
        flag,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
      },
      borders,
      currencies,
    } = this.state;
    return (
      <div className="container">
        <div className="Country-name">
          <Link to="/">
            <Button className="back-button">
              <ArrowLeftIcon className="arrow" />
              Home
            </Button>
          </Link>
          <h1 className="unique-country-title">{name}</h1>
        </div>
        <div className="container-information">
          <img className="country-image" src={flag} alt="blank" />
          <div>
            <div className="country-information">
              <div>
                <p>
                  <strong>Native Name:</strong> {nativeName}
                </p>
                <p>
                  <strong>Population:</strong>{' '}
                  {numeral(parseInt(population)).format('0,0')}
                </p>
                <p>
                  <strong>Region:</strong> {region}
                </p>
                <p>
                  <strong>Sub Region:</strong> {subregion}
                </p>
                <p>
                  <strong>Capital:</strong> {capital}
                </p>
              </div>
              <p>
                <strong>Top Level Domain:</strong> {topLevelDomain}
              </p>
              <p>
                {currencies.map((currency) => {
                  return (
                    <p>
                      <strong>Currencies:</strong> {currency.name}
                    </p>
                  );
                })}
              </p>
              <p>
                <strong>Borders:</strong>
              </p>
              <div className="borders">
                {borders.slice(0, 6).map((border) => {
                  return <p className="border">{border}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
