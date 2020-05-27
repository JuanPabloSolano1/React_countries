import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const SearchAppBar = () => {
  const [newClass, setClass] = useState(true);
  const [newCountry, setCountry] = useState([]);
  const classes = useStyles();

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    let country = event.target.value;
    setCountry(country);
  };
  const handleClasses = () => {
    let cards = document.querySelectorAll(
      '.MuiPaper-root.MuiCard-root.MuiPaper-elevation1.MuiPaper-rounded'
    );
    setClass(!newClass);
    if (newClass) {
      cards.forEach((element) => {
        element.style.backgroundColor = 'black';
        element.style.color = 'white';
      });
      document.body.style.backgroundColor = '#2F4F4F';
    } else {
      cards.forEach((element) => {
        element.style.backgroundColor = 'white';
        element.style.color = 'black';
      });
      document.body.style.backgroundColor = '#b0bed0';
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Find the Country
          </Typography>
          {newClass === false ? (
            <Button className="Dark" onClick={handleClasses}>
              <Brightness3Icon />
              Dark Mode
            </Button>
          ) : (
            <Button className="Light" onClick={handleClasses}>
              <WbSunnyIcon />
              Light Mode
            </Button>
          )}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form>
              <InputBase
                onChange={handleSearch}
                id="input"
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </form>
          </div>
          <Link to={'/' + newCountry}>
            <Button className="Submit">Submit</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
