import {makeStyles, fade, useTheme, createMuiTheme} from '@material-ui/core/styles';


const drawerWidth = 0;

export default makeStyles ((theme) => ({
    
    appBar: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      flex: 1,
      position:'relative',
      display:'block',
      height:'5rem',
    },
    logoImage: {
      paddingTop: '1rem',
      marginBottom: '1rem',
      marginRight: '1.5rem',
      maxWidth: '10rem',
      minWidth: '5rem',
    },
    searchPaper: {
      backgroundColor: 'transparent',
      padding: '2px 4px',
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      height: "2rem",
    },
    input: {
      marginLeft: theme.spacing(1),
      minWidth: "2rem",
      flex: 1,
    },
    searchButton: {
      padding: 10,
    },
    cartButton: {
      paddingRight: 10,
    },
    star: {
      color: '#283747',
      fontSize: '2rem',
    },
    shoppingCart: {
      color: '#283747',
      fontSize: '2rem',
    },
    accountCircle: {
      color: '#283747',
      fontSize: '2rem',
    }
}));