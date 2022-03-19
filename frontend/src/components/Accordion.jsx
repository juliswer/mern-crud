import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import { Button, Grid } from "@mui/material";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import ReactTimeAgo from "react-time-ago";
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import { Link } from "react-router-dom";

const AccordionComponent = ({ note }) => {
  const testDate = (createdDate, updatedDate, comment) => {
    if (createdDate === updatedDate) {
      return (
        <Typography
          color="text.secondary"
          variant="p"
          component="h6"
          style={{
            fontFamily: "sans-serif",
            fontStyle: "italic",
            fontSize: "14px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CalendarMonthTwoToneIcon /> Created At:{" "}
          <ReactTimeAgo date={comment.createdAt} locale="en-US" />
        </Typography>
      );
    } else if (createdDate !== updatedDate) {
      return (
        <Typography
          color="text.secondary"
          variant="p"
          component="h6"
          style={{
            fontFamily: "sans-serif",
            fontStyle: "italic",
            fontSize: "14px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CalendarMonthTwoToneIcon /> Updated At:{" "}
          <ReactTimeAgo date={comment.updatedAt} locale="en-US" />
        </Typography>
      );
    }
  };

  const checkLike = ({ liked }) => {
    if (liked === true) {
      <FavoriteBorderTwoToneIcon />;
    } else {
      <FavoriteBorderTwoToneIcon style={{ color: "#ccc" }} />;
    }
  };

  return (
    <div>
      {note.comments.length > 1 ? (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Comments: ({note.comments.length})</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid style={{ display: "flex", justifyContent: "space-between" }}>
              {note.comments.map((comment) => (
                <div key={comment._id}>
                  {console.log(comment)}
                  <Typography>{comment.title}</Typography>
                  <Typography>{comment.description}</Typography>
                  <Typography>
                    {testDate(comment.createdAt, comment.updatedAt, comment)}
                  </Typography>
                  {checkLike(comment.liked)}
                </div>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ) : (
        <Accordion style={{backgroundColor: 'rgba(120,180,255, 0.4)'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>There are not comments yet</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button variant="text" style={{color: '#fff'}} endIcon={<AddCommentOutlinedIcon />}>
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
