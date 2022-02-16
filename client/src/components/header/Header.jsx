
import { AppBar, Toolbar, Typography, makeStyles, Button, Grid } from '@material-ui/core'; 
import { Link } from 'react-router-dom';

// import { useHistory } from 'react-router-dom';
// import { useOktaAuth } from '@okta/okta-react';

const useStyle = makeStyles(theme =>({
    component:{
        background: '#ffffff',
        color: "black",
        display: "flex",
        justifyContent:"space-around",
      },
      container:{
        display: 'flex',
        justifyContent: "space-around",
        [theme.breakpoints.down('sm')]:{
          flexDirection: 'column',
        } 
      },
      nav:{
        display:'flex',
        justifyContent:'space-between',
        '&>*':{
          padding: 20,
        }
      },
      logo:{
       fontFamily:'Pacifico',
       fontSize:35
      },
      navcomp:{
        color:'#000000',
        '&:hover':{
          background: "#000000",
          color:'#fff',
          textDecoration:'none',
          
        },
      }
}))

const Header = () => {
    const classes = useStyle();

    // const history = useHistory();
    // const { oktaAuth, authState } = useOktaAuth();

    // if (authState && authState.isPending) return null;

    // const login = async () => history.push('/login');
    
    // const logout = async () => oktaAuth.signOut();

    // const button = authState.isAuthenticated ? 
    //     <Button onClick={logout} style={{
    //         background: 'unset',
    //         border: 'none',
    //         fontSize: 17,
    //         textTransform: 'uppercase',
    //         fontFamily: 'Roboto',
    //         cursor: 'pointer',
    //         opacity: 0.8
    //     }}>Logout</Button> :
    //     <Button onClick={login}>Login</Button>;

    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
            <Grid item ><Link to={'/'} style={{textDecoration:'none', color:'inherit'}}><Typography className={classes.logo}>iCoder🖤</Typography></Link></Grid>
            <Grid item  className={classes.nav}>
            <Link to={'/'}  className={classes.navcomp} style={{textDecoration:'none',}}><Typography >HOME</Typography></Link>
            <Link to={'/about'} className={classes.navcomp} style={{textDecoration:'none',}}><Typography className={classes.navcomp}>ABOUT</Typography></Link>

           <Link to={'/contact'} className={classes.navcomp} style={{textDecoration:'none',}}><Typography className={classes.navcomp}>CONTACT</Typography></Link>
            <Typography className={classes.navcomp}>LOGIN</Typography>
          </Grid>
          
            </Toolbar>
        </AppBar>
    )
}   

export default Header;