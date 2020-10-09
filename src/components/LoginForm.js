import React, { useState } from 'react';
import styled from 'styled-components'


// Material Ui Imports//
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField'
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import Box from '@material-ui/core/Box'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

    label: {
        fontSize: '9pt', fontWeight: 700, justifyContent: 'center', textTransform: 'uppercase',
    },
    input: {
        width: '80vw',
        maxWidth: '20em'
    },
    button: {
        borderRadius: '18pt',
        width: '4.5em',
        height: '4.5em'
    },
    arrow: {
        width: '45px',
        height: '45px',
        marginLeft: '6px'
    }

}));


const labelStyle = {
    fontSize: '9pt', fontWeight: 700, justifyContent: 'center', textTransform: 'uppercase'
}



const LoginForm = () => {
    const [checked, setChecked] = useState(false);
    const [hidePassword, setHidePassword] = useState(true)
    const classes = useStyles();

    return (
        <form>
            <Box m={3}>
                <FormControl className={classes.input}>
                    <TextField
                        label="username"
                        variant="filled"
                        InputLabelProps={{ style: labelStyle }} // font size of input label
                    />
                </FormControl>
            </Box>

            <Box m={3}>
                <FormControl className={classes.input}
                    variant="filled">
                    <InputLabel
                        htmlFor="filled-adornment-password"
                        className={classes.label}
                    >Password</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type={hidePassword ? 'password' : 'text'}
                        onChange={() => { }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => { setHidePassword(!hidePassword) }}
                                    onMouseDown={() => { }}
                                    edge="end"
                                >
                                    {hidePassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>

            <Box m={3}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            inputLabelProps={{ style: labelStyle }}
                        />
                    }
                    label={<span classname={classes.label}>Stay signed in</span>}
                />
            </Box>

            <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '4.5em' }}>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<ArrowForwardIcon className={classes.arrow} />}
                >
                </Button>
            </Box>



        </form>
    )
}

export default LoginForm;
