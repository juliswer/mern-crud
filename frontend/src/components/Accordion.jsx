import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import { Button, Grid } from "@mui/material";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import ReactTimeAgo from "react-time-ago";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import { Link } from "react-router-dom";

const AccordionComponent = ({ note }) => {
  const checkLike = ({ liked }) => {
    if (liked === true) {
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
            <Grid style={{ display: "flex", justifyContent: "space-between" }}>
              {note.comments.map((comment) => (
                <div key={comment._id}>
                  <Typography style={{ color: "#ccc" }}>
                    {comment.title}
                  </Typography>
                  <Typography>{comment.description}</Typography>
                  <Typography>
                    <ReactTimeAgo date={comment.createdAt} />
                  </Typography>
                </div>
              ))}
            </Grid>
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
