import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionComponent = ({ note }) => {
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
          <AccordionDetails>
            <Typography>
              {note.comments.map((comment) => (
                <div key={comment._id}>
                  <Typography>{comment.title}</Typography>
                </div>
              ))}
            </Typography>
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
