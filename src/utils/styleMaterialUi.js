import React from 'react';
import { createTheme, withStyles } from '@material-ui/core/styles';
import { Checkbox, TextField } from '@material-ui/core';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#EE3A57',
    },
    secondary: {
      main: '#572845',
    },
  },
});

export const styleMaterialUiTheme = () => theme;

// =====================================
// TextFile (css)
// =====================================
export const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#852845',
      },
      '&:hover fieldset': {
        borderColor: '#EE3A57',
      },
    }
  },
})(TextField);

// =====================================
// Checkbox (css)
// =====================================

export const CssCheckbox = withStyles({
  root: {
    color: '#852845',
    '&$checked': {
      color: '#EE3A57',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);