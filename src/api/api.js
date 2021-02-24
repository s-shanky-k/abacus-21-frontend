import axios from "axios"

export const url_signin = "http://ec2-3-16-135-186.us-east-2.compute.amazonaws.com:3000/auth/signin";
export const url_register = "http://ec2-3-16-135-186.us-east-2.compute.amazonaws.com:3000/auth/register"

export const apiSignin = async (credentials) => {

    axios.post(
        `${url_signin}`, {
        email: credentials.email,
        pwd: credentials.pwd
    })
        .then(
            (result) => {
                console.log(result)
            }
        )
        .catch(
            (error) => {
                console.log("Error", error.response.data)
            }
        )

}


export const apiRegister = async (credentials) => {

    axios.post(
        `${url_register}`, {
        name: credentials.name,
        year: credentials.year,
        dept: credentials.dept,
        college: credentials.college,
        email: credentials.email,
        phone: credentials.phone,
        pwd: credentials.pwd,
        cpwd: credentials.cpwd
    })
        .then(
            (result) => {
                console.log(result)
            }
        )
        .catch(
            (error) => {
                console.log("Error", error.response.data)
            }
        )

}
