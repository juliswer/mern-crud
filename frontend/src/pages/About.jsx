import React, {useState} from 'react'
import {Typography, Container, Button} from '@mui/material';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const About = () => {

  const [copy, setCopy] = useState(false);

  return (
    <Container className="animate__animated animate__bounceInUp">
      <Typography variant="h3" component="h1">About Page</Typography>
      <Typography variant="h5" component="h2">This app was developed by Julian Swerdlin in March 2022.</Typography>
      <Typography variant="h6" component="h3">I used the MERN Stack to develop it. If you think you can make something better, you can clone or fork the Github's Repo and post it!</Typography>
      <Typography variant="h6" component="h3">If you want to know more about me, you can visit my <a href="https://www.linkedin.com/in/julian-swerdlin/">LinkedIn</a>.</Typography>      
      <CopyToClipboard onCopy={() => setCopy(true)} text="git clone https://github.com/juliswer/mern-crud.git">
        <Button variant="outlined" color="warning" endIcon={<ContentCopyIcon />}>{copy ? `It's in your clipboard!` : 'Copy'}</Button>
      </CopyToClipboard>
    </Container>
  )
}

export default About