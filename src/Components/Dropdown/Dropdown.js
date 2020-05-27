import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './Dropdown.css';

export const CustomizedSelects = (props) => {
  const handleChange = (regions) => {
    props.history.push('/regions/' + regions);
  };

  return (
    <div>
      <Dropdown onChange={handleChange}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          World Regions
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleChange('Asia')}>
            Asia
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange('Europe')}>
            Europe
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange('Americas')}>
            Americas
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange('Oceania')}>
            Oceania
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange('Africa')}>
            Africa
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
