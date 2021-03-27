
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from '../components/Header';
import SideMenumakeStyles from '../components/SideMenumakeStyles';
import SideMenuWithStyles from '../components/SideMenuWithStyles';
import './App.css';
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
      <SideMenuWithStyles/>
      <Header/>
      <CssBaseline/>
    </div>
  );
}

export default App;
