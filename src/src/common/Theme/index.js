import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  pallete: {
    primary: '#303F9F',
    secondary: '#607D8B',
    error: '#F44336',
    textColor: '#FFFFFF',
    default: '#000000',
    hover: 'rgb(0,0,0,0.1)',
  },
  typoraphy: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 5,
    backgroundColor: '#448AFF',
    textColor: '#fff',
    boderColor: '#0097A7',
  },
});

export default theme;
