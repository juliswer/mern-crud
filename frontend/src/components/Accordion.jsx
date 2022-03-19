import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import { Grid } from "@mui/material";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import ReactTimeAgo from 'react-time-ago'

const AccordionComponent = ({ note }) => {
  const date = new Date();

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

  const checkLike = ({liked}) => {
    if (liked === true) {
      <FavoriteBorderTwoToneIcon />;
    } else {
      <FavoriteBorderTwoToneIcon style={{color: '#ccc'}} />;
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
        <Accordion disabled>
          <AccordionSummary>
            <Typography>There are not comments yet</Typography>
          </AccordionSummary>
        </Accordion>
      )}
    </div>
  );
};

export default AccordionComponent;
