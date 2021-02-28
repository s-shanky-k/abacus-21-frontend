import {React, Component, useState, forwardRef, useImperativeHandle, useRef} from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// import NeonButton from '../NeonButton/NeonButton'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomSnackBar = forwardRef ((props, ref) => {

    const [open, setopen] = useState(false)
    const [snackbar_text, setsnackbar_text] = useState('')

    useImperativeHandle(ref, () => ({
        handleClick(message) {
            setopen(true);
            setsnackbar_text(message)
        }
    }));

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setopen(false);
    };

    return (
        <div>
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    {snackbar_text}
                </Alert>
            </Snackbar>
        </div>
    )
});

// export default function CustomSnackBar({props}) {

//     const [open, setopen] = useState(false)

//     const handleClick = () => {
//         setopen(true);
//     };

//     const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }

//         setopen(false);
//     };

//     return (
//         <div>
//             <NeonButton props={{ text: "Boom Events", color: "#26a0da", onClick: handleClick }} />
//             <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
//                 <Alert onClose={handleClose} severity="success">
//                     {props.text}
//                 </Alert>
//             </Snackbar>
//         </div>
//     )
// }

export default CustomSnackBar;