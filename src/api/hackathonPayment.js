import Cookies from "js-cookie"
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"
import { apiRegisterHackathon, apiHackathonPayment } from "./api"


export const _register = async (history, setregistered) => {
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
        let response = await apiRegisterHackathon({
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

export const _paymentConfirmation = async (history, setpaymentDetails, toggleModal, setloading) => {
    if (Cookies.get("token") === undefined) {
        toast.success("Login Required", {
            position: toast.POSITION.BOTTOM_CENTER
        })
        history.push("/login-register")
    }
    else {

        let token = Cookies.get("token")
        let response = await apiHackathonPayment({
            "token": token
        })

        if (response.status === 200) {
            setpaymentDetails(response.data)
            setloading(false)
            toggleModal()
        }
        else {
            setloading(false)
            toast.error(response.message, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
    }

}