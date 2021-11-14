import React from 'react';
import {AppBar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

//import {ContextProvider} from './SocketContext';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notification from './components/Notification';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },
      image: {
        marginLeft: '15px',
      },
      app: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }, 
}))

function App() {

    const styles = useStyles();
    return (
        <div className={styles.app}>
            <AppBar className={styles.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Video Chat Application</Typography>
            </AppBar>    
            <VideoPlayer/>
            <Options>
                <Notification/>
            </Options>
        </div>
    ) 
}

export default App
