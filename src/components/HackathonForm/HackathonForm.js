import React from 'react'
import styles from './HackathonForm.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Heading from '../Heading/Heading'
import NeonButton from '../NeonButton/NeonButton'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

export default function HackathonForm() {
    
    const classes = useStyles();

    return (
        <div className={styles.hackathon_form_wrapper}>
            <div className={styles.hackathon_form_container}>
                <Heading text="Hackathon Registration" fontSize="35px"></Heading>
                <div className={styles.hackathon_form_accordian_container}>
                <div className={classes.root}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Accordion 1</Typography>
                    </AccordionSummary>
                    <div>
                        <input className={styles.hackathon_form_input_field} type="text" placeholder="Name" required value={name1} onChange={(e) => setname1(e.target.value)} />
                        <input className={styles.hackathon_form_input_field} type="email" placeholder="Email" required value={email1} onChange={(e) => setemail1(e.target.value)} />
                    </div>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Accordion 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            </div>
            {/* {validationError ? (<div className={styles.google_form_data_validation_output}>{validationError}</div>) : null} */}
            <NeonButton props={{ text: "Register", color: "#26a0da" }} />
        </div>
    </div>
    )
}
