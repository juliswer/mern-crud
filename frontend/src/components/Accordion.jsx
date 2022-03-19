import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import { Box, Button, Grid, Stack } from "@mui/material";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ReactTimeAgo from "react-time-ago";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";

const AccordionComponent = ({ note }) => {

  const testDate = (createdDate, updatedDate, comment) => {
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
            color: '#7E7E7E'
          }}
        >
          <AccessTimeOutlinedIcon />&nbsp;Posted&nbsp;
          <ReactTimeAgo date={comment.createdAt} locale="en-US" />
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
          
          &nbsp;Updated&nbsp;
          <ReactTimeAgo date={comment.updatedAt} locale="en-US" />
        </Typography>
      );
    }
  };

  const checkLike = (comment) => {
    if (comment.liked) {
      <FavoriteBorderTwoToneIcon />;
    } else {
      <FavoriteBorderTwoToneIcon style={{ color: "#ccc" }} />;
    }
  };

  return (
    <div>
      {note.comments.length >= 1 ? (
        <Accordion style={{ backgroundColor: "rgba(120,180,255, 0.4)" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "#fff" }}>
              Comments: ({note.comments.length})
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {note.comments.map((comment) => (
              <div key={comment._id} style={{ display: "flex" }}>
                <div>
                  <Typography style={{ color: "#ccc" }}>
                    {comment.title}
                  </Typography>
                  <Typography gutterBottom>{comment.description}</Typography>
                  <Typography>
                    {testDate(comment.createdAt, comment.updatedAt, comment)}
                  </Typography>
                </div>
                <Typography>{comment.liked === false && (<FavoriteIcon color="#DE4451" style={{color: '#DE4451'}} />)}</Typography>
                <Typography>{comment.liked === true && (<FavoriteBorderTwoToneIcon style={{color: '#7E7E7E'}} />)}</Typography>
                {/* <FavoriteBorderTwoToneIcon
                  style={{ position: "absolute", right: "10" }}
                /> */}
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ) : (
        <Accordion style={{ backgroundColor: "rgba(120,180,255, 0.4)" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "#fff" }}>
              There are not comments yet
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button
              variant="text"
              style={{ color: "#ccc" }}
              endIcon={<AddCommentOutlinedIcon />}
            >
              <Link
                to={`/note/${note._id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Create a comment
              </Link>
            </Button>
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
};

export default AccordionComponent;
