// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom'
import { Label, TextInput, Button, Card } from 'flowbite-react'
import { Typography } from '@material-tailwind/react'
import { useForm } from 'react-hook-form'
// import { registerUser } from '../../store/auth/authActions'
// import { errorToast, successToast } from '../../utils'

export const Register = () => {
  // const navigate = useNavigate()
  // const handleRegister = () => {
  //   navigate('/dashboard')
  // }

  // const storeData = useSelector((store) => store)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  // const dispatch = useDispatch()

  const onSubmit = (data) => {
    console.log('DATA : ', data)
    // dispatch(registerUser({ ...data }))
    //   .then(() => {
    //     console.log('ERROR : ', 'NO ERROR')
    //     successToast('User Registered Successfully')
    //   })
    //   .catch((errorData) => {
    //     errorToast(errorData.error)
    //   })
  }

  // useEffect(() => {
  //   console.log('STORE DATA : ', storeData)
  // }, [storeData])
  return (
    <section className='h-2/3 flex justify-center items-center'>
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
                required={true}
                error={errors.username?.type === 'required'}
                {...register('username', { required: true })}
                errors={errors.username}
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='email' value='Your email' />
              </div>
              <TextInput
                id='email'
                type='email'
                placeholder='name@flowbite.com'
                required={true}
                error={errors.email?.type === 'required'}
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
                error={errors.password?.type === 'required'}
                {...register('password', {
                  required: true,
                  maxLength: 50,
                  minLength: 6,
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
