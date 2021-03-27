
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import Header from '../components/Header';
import SideMenumakeStyles from '../components/SideMenumakeStyles';
import SideMenuWithStyles from '../components/SideMenuWithStyles';
import './App.css';

const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#FF0000',
      light:'#FFFF00'
    },
    secondary:{
      main:'#FF00FF',
      light:'#808000'
    },
    background:{
      default:'#ffe6e6'
    }
  }
})
const useStyle=makeStyles(
  {
    style:{
      paddingLeft:'160px',
      width:'100%'
    

    }
  }
)

function App() {
  const classes = useStyle()
  return (
    <div className={classes.style}>

      <ThemeProvider theme={theme}>
      <SideMenuWithStyles/>
      <Header/>
      <CssBaseline/>
      </ThemeProvider>
    </div>
  );
}

export default App;
