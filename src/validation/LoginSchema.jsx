import * as yup from "yup"

export const LoginSchema = () => {
    return yup.object().shape({
        username:yup.string().required("Name is required!"),
        useremail:yup.string().email().required("Email is required!"),
        password:yup.string().min(4, "Min password is 4 character").max(8, "Max password is 8 character").required("Password is required!"),
    })
}