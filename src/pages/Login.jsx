import { Button } from 'antd'
import { useFormik } from 'formik'
import { LoginSchema } from '../validation/LoginSchema'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const {values, errors, handleBlur, handleChange, handleSubmit, touched} = useFormik({
        initialValues:{
            username:"",
            useremail:"",
            password:"",
        },
        validationSchema:LoginSchema,
        onSubmit:(data) => {
            if(data){
                navigate("/home")
            }
        }
    })


  return (
    <form onSubmit={handleSubmit} className='w-[500px] space-y-5 mx-auto mt-10 p-5 flex flex-col rounded-lg'>
        <h2 className='text-[32px] leading-[40px] text-center font-bold '>LOGIN</h2>
        <label className='w-[100%]'>
            <input value={values.username} onChange={handleChange} onBlur={handleBlur} id='username' name='username' className={`${errors.username && touched.username ? "border-red-500 placeholder:text-red-500" : ""} p-3 rounded-md border-slate-400 border-[2px] w-full outline-none`} type="text" placeholder='Enter your name'/>
            {touched.username && errors.username ? <span className='text-red-500'>{errors.username}</span> : ""}
        </label>
        <label className='w-[100%]'>
            <input value={values.useremail} onChange={handleChange} onBlur={handleBlur} id='useremail' name='useremail' className={`${errors.useremail && touched.useremail ? "border-red-500 placeholder:text-red-500" : ""} p-3 rounded-md border-slate-400 border-[2px] w-full outline-none`} type="email" placeholder='Enter your email'/>
            {touched.useremail && errors.useremail ? <span className='text-red-500'>{errors.useremail}</span> : ""}
        </label>
        <label className='w-[100%]'>
            <input value={values.password} onChange={handleChange} onBlur={handleBlur} id='password' name='password' className={`${errors.password && touched.password ? "border-red-500 placeholder:text-red-500" : ""} p-3 rounded-md border-slate-400 border-[2px] w-full outline-none`} type="password" placeholder='Enter your password'/>
            {touched.password && errors.password ? <span className='text-red-500'>{errors.password}</span> : ""}
        </label>
        <Button size='large' type='primary' htmlType='submit'>Login</Button>
    </form>
  )
}

export default Login