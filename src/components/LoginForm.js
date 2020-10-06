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

const labelStyle = {
    fontSize: '9pt', fontWeight: 700, justifyContent: 'center', textTransform: 'uppercase'
}
const labelCheckbox = {
    fontSize: '10pt', fontWeight: 500, justifyContent: 'center'
}
const inputStyle = {
    width: '80vw',
    maxWidth: '20em'
}

const buttonStyle = {
    width: '5.1em',
    height: '5.1em',
    borderRadius: '1.8em',
    display: 'flex',

}
const arrowStyle = {
    width: '2.1em',
    height: '2.1em'
}

const LoginForm = () => {
    const [checked, setChecked] = useState(false);

    return (
        <form>


            <Box m={3}>
                <TextField style={inputStyle}
                    label="username"
                    variant="filled"
                    InputLabelProps={{ style: labelStyle }} // font size of input label
                />
            </Box>

            <Box m={3}>
                <FormControl style={inputStyle}
                    variant="filled">
                    <InputLabel
                        htmlFor="filled-adornment-password"
                        style={labelStyle}
                    >Password</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type="password"
                        onChange={() => { }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => { }}
                                    onMouseDown={() => { }}
                                    edge="end"
                                >
                                    <Visibility />
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
                    label={<span style={labelCheckbox}>Stay signed in</span>}
                />


            </Box>

            <Box m={3} style={{display:'flex', justifyContent:'center'}}>
            <Button
                variant="contained"
                color="secondary"
                style={buttonStyle}
                startIcon={<ArrowForwardIcon style={arrowStyle} />}
            >

            </Button>
                </Box>
   


        </form>
    )
}

export default LoginForm;
