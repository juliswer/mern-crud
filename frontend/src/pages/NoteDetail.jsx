import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import AddLinkTwoToneIcon from "@mui/icons-material/AddLinkTwoTone";
import { Link } from "react-router-dom";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import SpeedDial from "../components/SpeedDial";
import Accordion from "../components/Accordion";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ReactTimeAgo from "react-time-ago";
import { WhatsappShareButton, TwitterShareButton, TelegramShareButton } from "react-share";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NoteDetail = () => {
  const { id } = useParams();

  const curentUrl = window.location.href;
  const shareUrl = curentUrl;

  const [note, setNote] = useState({});

  const testDate = (createdDate, updatedDate, note) => {
    if (createdDate === updatedDate) {
      return (
        <Typography
          variant="p"
          component="h6"
          style={{
            fontFamily: "sans-serif",
            fontStyle: "italic",
            fontSize: "14px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <AccessTimeOutlinedIcon />
          &nbsp;Created&nbsp;
          <ReactTimeAgo date={note.createdAt} locale="en-US" />
        </Typography>
      );
    } else if (createdDate !== updatedDate) {
      return (
        <Typography
          variant="p"
          component="h6"
          style={{
            fontFamily: "sans-serif",
            fontStyle: "italic",
            fontSize: "14px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <AccessTimeOutlinedIcon />
          &nbsp;Updated&nbsp;
          <ReactTimeAgo date={note.updatedAt} locale="en-US" />
        </Typography>
      );
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDone = async () => {
    await axios.put(`http://localhost:4000/api/note/${note._id}/toggleDone`);
  };

  const fetchNote = async () => {
    const res = await axios.get("http://localhost:4000/api/note/" + id);
    const data = res.data;
    setNote(data);
  };

  useEffect(() => {
    fetchNote();
  }, []);

  return (
    <Grid
      container
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      className="animate__animated animate__fadeInUp"
    >
      <Grid item xs={6}>
        <Card
          style={{
            marginBottom: "30px",
            backgroundColor: "rgba(31,41,55,0.7)",
            color: "#fff",
            boxShadow: "5px 5px 5px black",
            padding: "20px",
          }}
          variant="outlined"
        >
          <CardContent>
            <Typography variant="h6" component="h6" gutterBottom>
              {note.title}
            </Typography>
            <Typography color="" gutterBottom>
              {note.description}
            </Typography>
          </CardContent>

          <CardActions
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              endIcon={<AddLinkTwoToneIcon />}
              variant="text"
              color="warning"
              size="medium"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Share your note
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <TwitterShareButton url={shareUrl} quote={'This is my note :)'}>
                  compartir por tw
                </TwitterShareButton>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <WhatsappShareButton quote={'This is my note!'} url={shareUrl}>
                  compartir por wpp
                </WhatsappShareButton>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <TelegramShareButton url={shareUrl} quote={'This is my note!'}>
                  compartir por fb
                </TelegramShareButton>
              </MenuItem>
            </Menu>

            {note.done === false ? (
              <Button onClick={toggleDone(note._id)}>
                <CheckCircleOutlineTwoToneIcon style={{ color: "#50B743" }} />
              </Button>
            ) : (
              <Button>
                <CheckCircleOutlineTwoToneIcon style={{ color: "#F20000" }} />
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NoteDetail;
