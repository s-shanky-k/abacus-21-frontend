import Cookies from "js-cookie"
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"
import { apiRegisterEvent, apiPayment } from "./api"


export const _register = async (history, setregistered, data) => {
    // Redirect to Login Page
    if (Cookies.get("token") === undefined) {
        toast.error("Login Required", {
            position: toast.POSITION.BOTTOM_CENTER
        })
        history.push("/login-register")
    }
    // Register Fun
    else {
        let token = Cookies.get("token")
        let response = await apiRegisterEvent({
            "event": data.purpose,
            "token": token
        })

        if (response.status === 200) {
            toast.success("Registration Successfull", {
                position: toast.POSITION.BOTTOM_CENTER
            })
            setregistered(true)
        }
        else {
            toast.error(response.message, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
    }
}

export const _paymentConfirmation = async (history, setpaymentDetails, toggleModal, data, setloading) => {
    if (Cookies.get("token") === undefined) {
        toast.success("Login Required", {
            position: toast.POSITION.BOTTOM_CENTER
        })
        history.push("/login-register")
    }
    else {

        let token = Cookies.get("token")
        let response = await apiPayment({
            "event": data.purpose,
            "token": token
        })

        if (response.status === 200) {
            setpaymentDetails(response.data)
            setloading(false)
            toggleModal()
        }
        else {
            setloading(false)
            toast.success(response.message, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
    }

}