import React from 'react';
import { Route } from 'react-router-dom';
import { Country } from '../Components/Country/Country';
import { UniqueCountry } from './UniqueCountry';
import { CustomizedSelects } from '../Components/Dropdown/Dropdown';
import { Regions } from '../Components/Regions/Regions';

export class Countries extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Route path="/" exact component={CustomizedSelects} />
          <Route path="/" exact component={Country} />
          <Route path="/:country" exact component={UniqueCountry} />
          <Route path="/regions/:region" exact component={Regions} />
        </div>
      </div>
    );
  }
}
