import axios from "axios"

export const url_signin = "signin";
export const url_register = "register"
export const url_forgotPassword = "forgotPassword"
export const url_googledata = "googledata"

const api = axios.create({
    baseURL: "http://ec2-3-16-135-186.us-east-2.compute.amazonaws.com:3000/auth/"
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
        console.log("creds",credentials)
        const response = await api.post(
            `${url_forgotPassword}`, {
            email: credentials.email,
        })
        console.log(response)

    } catch (error) {
        console.log(error.response.data,"ERROR")
    }
}

export const apiGoogleDataForm = async (credentials) => {

    try {
        console.log("creds",credentials)
        const response = await api.post(
            `${url_googledata}`, {
            name: credentials.name,
            phone: credentials.phone,
            college: credentials.college,
            dept: credentials.dept,
            year: credentials.year,
        })
        console.log(response)

    } catch (error) {
        console.log(error.response.data,"ERROR")
    }
}