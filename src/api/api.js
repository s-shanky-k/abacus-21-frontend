import axios from "axios"
import { useHistory } from "react-router-dom"

export const baseURL = "http://ec2-3-16-135-186.us-east-2.compute.amazonaws.com:3000/"
export const url_signin = "auth/signin";
export const url_register = "auth/register"
export const url_forgotPassword = "auth/forgotPassword"
export const url_resetPassword = "auth/resetPassword"
export const url_googledata = "auth/googledata"
export const url_gAuth = "auth/googlesignin"
export const url_getRegistrations = "event/getRegistrations"
export const url_registerEvent = "event/register"
export const url_payment = "payment/pay"
export const url_registerHackathon = "hackathon/register"
export const url_paymentHackathon = "hackathon/pay"
export const url_getRegistrationHackathon = "hackathon/getRegistration"

const api = axios.create({
    baseURL: "http://ec2-3-16-135-186.us-east-2.compute.amazonaws.com:3000/"
})

export const apiSignin = async (credentials) => {

    try {
        const response = await api.post(
            `${url_signin}`, {
            email: credentials.email,
            pwd: credentials.pwd
        })
        return response.data

    } catch (error) {
        return error.response.data
    }
}


export const apiRegister = async (credentials) => {

    try {
        const response = await api.post(
            `${url_register}`, {
            name: credentials.name,
            year: credentials.year,
            dept: credentials.dept,
            college: credentials.college,
            email: credentials.email,
            phone: credentials.phone,
            pwd: credentials.pwd
        })

        return response.data

    }
    catch (error) {
        return error.response.data
    }

}

export const apiForgotPassword = async (credentials) => {

    try {
        const response = await api.post(
            `${url_forgotPassword}`, {
            email: credentials.email,
        })

    } catch (error) {
    }
}

export const apiResetPassword = async (credentials) => {

    try {
        const response = await api.post(
            `${url_resetPassword}`, {
            user: credentials.user,
            key: credentials.key,
            pwd: credentials.pwd,
        })

    } catch (error) {
    }
}


export const apiGoogleDataForm = async (credentials) => {

    try {
        const response = await api.post(
            `${url_googledata}`, {
            name: credentials.name,
            phone: credentials.phone,
            college: credentials.college,
            dept: credentials.dept,
            year: credentials.year,
        }, {
            headers: {
                Authorization: credentials.token
            }
        })
        return response.data

    } catch (error) {
        return error.response.data
    }
}

export const apiGetRegistrations = async (credentials) => {
    try {
        const response = await api.post(
            `${url_getRegistrations}`, {}, {
            headers: {
                Authorization: credentials.token
            }
        }
        )

        return response.data
    }

    catch (error) {
        return error.response.data
    }
}

export const apiRegisterEvent = async (data) => {
    try {
        const response = await api.post(
            `${url_registerEvent}`,
            {
                "event": data.event
            },
            {
                headers: {
                    Authorization: data.token
                }
            }
        )
        return response
    } catch (error) {
        return error.response.data
    }
}

export const apiPayment = async (data) => {
    try {
        const response = await api.post(
            `${url_payment}`,
            {
                "event": data.event
            },
            {
                headers: {
                    Authorization: data.token
                }
            }
        )
        return response
    } catch (error) {
        return error.response.data
    }
}

export const apiRegisterHackathon = async (data) => {
    try {
        const response = await api.post(
            `${url_registerHackathon}`,
            {
                "user2": data.user2,
                "name2": data.name2,
                "user3": data.user3,
                "name3": data.name3
            },
            {
                headers: {
                    Authorization: data.token
                }
            }
        )
        return response
    } catch (error) {
        return error.response.data
    }
}

export const apiGetHackathonRegistration = async (data) => {
    try {
        const response = await api.post(
            `${url_getRegistrationHackathon}`, {},
            {
                headers: {
                    Authorization: data.token
                }
            }
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export const apiHackathonPayment = async (data) => {
    try {
        const response = await api.post(
            `${url_paymentHackathon}`, {},
            {
                headers: {
                    Authorization: data.token
                }
            }
        )
        return response
    } catch (error) {
        return error.response.data
    }
}