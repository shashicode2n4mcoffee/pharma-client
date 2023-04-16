import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import ReactLoading from 'react-loading'
import { Label, TextInput, Button, Checkbox, Card } from 'flowbite-react'
import { Typography } from '@material-tailwind/react'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../store/auth/authActions'
import { errorToast, successToast } from '../../utils'

export const Login = () => {
  const { loading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    dispatch(loginUser({ ...data }))
      .then((data) => {
        if (data?.payload?.success) {
          navigate('/dashboard', { successLogin: true })
          successToast('User Login Successfully')
        }
      })
      .catch(() => {
        errorToast('Something went wrong. please try again')
      })
  }

  return (
    <section className='h-2/3 flex justify-center items-center relative'>
      <Toaster />
      {loading && (
        <div className='absolute inset-2/4 z-10'>
          <ReactLoading type='bars' color='#1A56DB' />
        </div>
      )}
      <div className='max-w-sm'>
        <Card>
          <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='email' value='Your email' />
              </div>
              <TextInput
                id='email'
                type='email'
                placeholder='Enter the email'
                required={true}
                {...register('email', { required: true, maxLength: 50 })}
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='password' value='Your password' />
              </div>
              <TextInput
                id='password1'
                type='password'
                required={true}
                placeholder='Enter the password'
                {...register('password', {
                  required: true,
                  maxLength: 50,
                  minLength: 1,
                })}
              />
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox id='remember' />
              <Label htmlFor='remember'>Remember me</Label>
            </div>
            <Button type='submit'>Submit</Button>
            <Typography variant='small' className='mt-6 flex justify-center'>
              Don't have an account?
            </Typography>
            <Link to='/register'>Sign up</Link>
          </form>
        </Card>
      </div>
    </section>
  )
}
