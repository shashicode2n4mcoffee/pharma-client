import ReactLoading from 'react-loading'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { Label, TextInput, Button, Card } from 'flowbite-react'
import { Typography } from '@material-tailwind/react'
import { useForm } from 'react-hook-form'
import { registerUser } from '../../store/auth/authActions'
import { errorToast, successToast } from '../../utils'

export const Register = () => {
  const user = useSelector((store) => store.auth)
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(registerUser({ ...data }))
      .then((data) => {
        if (data?.payload?.success) {
          successToast('User Registered Successfully')
        }
      })
      .catch(() => {
        errorToast('Something went wrong. please try again')
      })
  }

  return (
    <section className='h-2/3 flex justify-center items-center relative'>
      <Toaster />
      {user?.loading && (
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
                <Label htmlFor='fullName' value='Your Full Name' />
              </div>
              <TextInput
                id='username'
                type='text'
                placeholder='Enter the full name'
                required={true}
                {...register('username', { required: true })}
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='phone' value='Your Mobile Number' />
              </div>
              <TextInput
                id='phone'
                type='text'
                placeholder='Enter the Mobile number'
                required={true}
                {...register('phone', { required: true })}
              />
            </div>
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
                id='password'
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
            <Button type='submit'>Submit</Button>
            <Typography variant='small' className='mt-6 flex justify-center'>
              Do have an account?
              <Typography
                as='a'
                href='#signup'
                variant='small'
                color='blue'
                className='ml-1 font-bold'
              >
                <Link to='/login'>Sign in</Link>
              </Typography>
            </Typography>
          </form>
        </Card>
      </div>
    </section>
  )
}
