import React, { useState } from "react";
import { Typography, Container, Button, Link } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GitHubIcon from "@mui/icons-material/GitHub";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const About = () => {
  const [copy, setCopy] = useState(false);

  return (
    <Container className="animate__animated animate__bounceInUp">
      <Typography variant="h3" component="h1" gutterBottom>
        About This Project
      </Typography>
      <Typography variant="h5" component="h2">
        This app was developed by Julian Swerdlin in March 2022.
      </Typography>
      <Typography variant="h6" component="h3">
        I used the MERN Stack to develop it. If you think you can make something
        better, you can clone or fork the Github's Repo and post it!
      </Typography>
      <Typography variant="h6" component="h3" gutterBottom>
        If you want to know more about me and my projects, you can visit my
        &nbsp;
        <Button
          size="medium"
          href="https://github.com/juliswer"
          target="_blank"
          startIcon={<GitHubIcon />}
          variant="text"
          color="primary"
        >
          Github
        </Button>
      </Typography>
      <CopyToClipboard
        onCopy={() => setCopy(true)}
        text="git clone https://github.com/juliswer/mern-crud.git"
      >
        {copy ? (
          <Button
            variant="outlined"
            color="warning"
            endIcon={<CheckCircleIcon />}
          >
            It's in your clipboard!
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="warning"
            endIcon={<ContentCopyIcon />}
          >
            Copy clone link (git)
          </Button>
        )}
      </CopyToClipboard>
    </Container>
  );
};

export default About;
