import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import AddLinkTwoToneIcon from "@mui/icons-material/AddLinkTwoTone";
import { Link } from "react-router-dom";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import SpeedDial from "../components/SpeedDial";
import Accordion from "../components/Accordion";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ReactTimeAgo from "react-time-ago";
import {
  WhatsappShareButton,
  TwitterShareButton,
  TelegramShareButton,
} from "react-share";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import { ToastContainer, toast } from "react-toastify";

const NoteDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const curentUrl = window.location.href;
  const shareUrl = curentUrl;

  const [note, setNote] = useState({});

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/note/${id}`);
      console.log(res);
      toast.success("Deleted Succesfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

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

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
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
                  <TwitterShareButton
                    url={shareUrl}
                    quote={"This is my note :)"}
                  >
                    <Button startIcon={<TwitterIcon />}>Share</Button>
                  </TwitterShareButton>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <WhatsappShareButton
                    quote={"This is my note!"}
                    url={shareUrl}
                  >
                    <Button color="success" startIcon={<WhatsAppIcon />}>
                      Share
                    </Button>
                  </WhatsappShareButton>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <TelegramShareButton
                    url={shareUrl}
                    quote={"This is my note!"}
                  >
                    <Button
                      style={{ color: "#24A1DF" }}
                      startIcon={<TelegramIcon />}
                    >
                      Share
                    </Button>
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
      <Fab
        color="error"
        aria-label="add"
        style={{ position: "absolute", bottom: "20px", right: "20px" }}
        onClick={handleClickOpen}
      >
        <DeleteIcon />
      </Fab>
      <Dialog
        open={openDialog}
        onClose={closeDialog}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move", backgroundColor: "#1D2331", color: '#fff'}} id="draggable-dialog-title">
          Are you sure you want to delete this note?
        </DialogTitle>
        <DialogContent style={{backgroundColor: '#1D2331'}}>
          <DialogContentText style={{color: '#ccc'}}>
            If you delete this note it will be completely removed from your
            list. You won't can get it back again!
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{backgroundColor: '#1D2331'}}>
          <Button autoFocus onClick={closeDialog} color="warning">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NoteDetail;
