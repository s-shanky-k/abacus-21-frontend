import React, { useState, useContext, useEffect } from 'react'
import styles from './HackathonForm.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Heading from '../Heading/Heading'
import NeonButton from '../NeonButton/NeonButton'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Width } from '../../App'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Cookies from "js-cookie"
import { AuthApi } from "../../App"
import { useHistory } from 'react-router';
import { toast } from "react-toastify"
import { apiRegisterHackathon, apiGetHackathonRegistration } from "../../api/api"
import Load from '../Load/Load';
import Footer from '../Footer/Footer'


toast.configure()
export default function HackathonForm() {

    const _Width = useContext(Width);
    const _Auth = React.useContext(AuthApi)
    const history = useHistory()

    const useStyles = makeStyles((theme) => ({
        root: {
            width: _Width > 600 ? (_Width < 800 ? '40%' : _Width < 1100 ? '30%' : _Width > 800 ? '29%' : '28.5%') : '75%',
            // boxShadow : '0px 0px 10px #FE13BE, 0px 0px 15px #000052, 0px 0px 15px #8E32FF',
        },
        heading: {
            fontSize: 20,
            fontFamily: 'MainFont',
            fontWeight: 'bold'
        },
    }));

    const [name1, setname1] = useState('')
    const [email1, setemail1] = useState('')
    const [name2, setname2] = useState('')
    const [email2, setemail2] = useState('')
    const [name3, setname3] = useState(null)
    const [email3, setemail3] = useState(null)
    const [validationError1, setvalidationError1] = useState('')
    const [validationError2, setvalidationError2] = useState('')
    const [validationError3, setvalidationError3] = useState('')
    const [loading, setloading] = useState(true)

    const classes = useStyles();
    let userDetails;

    useEffect(() => {

        const fetchRegistrations = async () => {
            let token = Cookies.get("token")
            const response = await apiGetHackathonRegistration({ "token": token })

            // If already registered
            if (response.team !== null) {
                history.push("/hackathon")
                toast.error("Already Registered", {
                    position: toast.POSITION.BOTTOM_CENTER
                })
            }

            // Else
            else {
                setloading(false)
            }
        }

        // Only logged in users can register for hackathon
        if (Cookies.get("token") === undefined || Cookies.get("details") === undefined) {
            history.push("/login-register")
            toast.error("Login Required", {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        else {
            // Check if already registered
            fetchRegistrations()
            let userDetails_str = Cookies.get("details")
            userDetails = JSON.parse(userDetails_str)
            setname1(userDetails.name)
            setemail1(userDetails.email)
        }

        return () => {

        }
    }, [])

    const validate2 = () => {
        let validationError2 = '';

        if (!name2) {
            validationError2 = 'Name field cannot be blank';
        } else if (!email2) {
            validationError2 = 'Email field cannot be blank';
        } else if (!email2.includes('@')) {
            validationError2 = 'Invalid Email! Try a different one!';
        }

        if (validationError2) {
            setvalidationError2(validationError2);
            return false;
        }

        return true;
    }

    const validate3 = () => {
        let validationError3 = '';

        if (name3 || email3) {
            if (!email3) {
                validationError3 = 'Email Field cannot be blank'
            }
            if (!name3) {
                validationError3 = 'Name Field cannot be blank'
            }
        }

        if (email3 && name3) {
            if (!email3.includes('@')) {
                validationError3 = 'Invalid Email! Try a different one!';
            }
        }

        if (validationError3) {
            setvalidationError3(validationError3);
            return false;
        }

        return true;
    }

    const register = async () => {
        let token = Cookies.get("token")
        let _email3 = (email3 === "") ? null : email3
        let _name3 = (name3 === "") ? null : name3
        const response = await apiRegisterHackathon({
            "token": token,
            "user2": email2,
            "name2": name2,
            "user3": _email3,
            "name3": _name3,
        })

        if (response.status === 200) {
            history.push("/hackathon")
            toast.success(response.data.message, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        else {
            toast.error(response.message, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
    }

    const onSubmit = () => {
        setvalidationError1('')
        setvalidationError2('')
        setvalidationError3('')

        const isValid2 = validate2();
        const isValid3 = validate3();

        if (isValid2 && isValid3) {
            register()
        }

    }

    return (
        <>
            {loading ? <Load /> : <div className={`${styles.hackathon_form_wrapper} ${styles.bg}`}>
                <div className={styles.hackathon_form_container}>
                    <Heading text="Hackathon Registration" fontSize="24px"></Heading>
                    <div className={styles.hackathon_form_accordian_container}>
                        <div className={classes.root}>
                            <Accordion expanded>
                                <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Participant 1 *</Typography>
                                </AccordionSummary>
                                <div className={styles.hackathon_form_data_container}>
                                    <input className={styles.hackathon_form_input_field} type="text" placeholder="Name" disabled value={name1} onChange={(e) => setname1(e.target.value)} />
                                    <input className={styles.hackathon_form_input_field} type="email" placeholder="Email" disabled value={email1} onChange={(e) => setemail1(e.target.value)} />
                                    {validationError1 ? (<div className={styles.hackathon_form_data_validation_output_1}>{validationError1}</div>) : null}
                                </div>
                            </Accordion>
                            <Accordion expanded>
                                <AccordionSummary
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>Participant 2 *</Typography>
                                </AccordionSummary>
                                <div className={styles.hackathon_form_data_container} style={{ textAlign: 'center !important' }}>
                                    <input autoFocus className={styles.hackathon_form_input_field} type="text" placeholder="Name" required value={name2} onChange={(e) => setname2(e.target.value)} />
                                    <input className={styles.hackathon_form_input_field} type="email" placeholder="Email" required value={email2} onChange={(e) => setemail2(e.target.value)} />
                                    {validationError2 ? (<div className={styles.hackathon_form_data_validation_output_2}>{validationError2}</div>) : null}
                                </div>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>Participant 3 (Optional)</Typography>
                                </AccordionSummary>
                                <div className={styles.hackathon_form_data_container}>
                                    <input className={styles.hackathon_form_input_field} type="text" placeholder="Name" value={name3} onChange={(e) => setname3(e.target.value)} />
                                    <input className={styles.hackathon_form_input_field} type="email" placeholder="Email" value={email3} onChange={(e) => setemail3(e.target.value)} />
                                    {validationError3 ? (<div className={styles.hackathon_form_data_validation_output_3}>{validationError3}</div>) : null}
                                </div>
                            </Accordion>
                        </div>
                    </div>
                    <NeonButton props={{ text: "Register", color: "#26a0da", onClick: onSubmit }} />
                </div>
            </div>
            }
        </>

    )
}
