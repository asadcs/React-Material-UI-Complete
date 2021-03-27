
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider,Card } from '@material-ui/core';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import SideMenumakeStyles from '../components/SideMenumakeStyles';
import SideMenuWithStyles from '../components/SideMenuWithStyles';
import './App.css';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

const theme = createMuiTheme({
  palette:{
  

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
      <PageHeader
      title="Page Title"
      subtitle="Page Description"
      icon={<AccessibilityIcon fontSize="large"/>}>
      </PageHeader>
      <CssBaseline/>
      </ThemeProvider>
    </div>
  );
}

export default App;
