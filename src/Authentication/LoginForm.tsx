import React, { useState } from 'react'
import Form from '../shared/Form'
import Input from '../shared/Input'
import Button from '../shared/Button'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { login } from '../redux/Authentication/Authentication.actions'
import { useNavigate } from 'react-router-dom'


const LoginForm = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        user: '',
        pass: ''
    })

    const history = useNavigate()

    const handleLogin = async() => {
        try {
            // @ts-ignore
            await dispatch(login(form))
            history('/')
        } catch (error) {
            if(error instanceof Error) {
                console.log(error)
                Swal.fire('Error', error.message, 'error')
            }
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target
        setForm({
          ...form,
          [name]: value
        })
      }

    return <Form title='Login - algaStock' onSubmit={handleLogin}>
        <Input label='User' name='user' value={form.user} onChange={handleInputChange} placeholder='E.g.: Your_user_name'/>
        <Input type='password' name='pass' value={form.pass} onChange={handleInputChange} label='Password'/>
        <Button>
            Login
        </Button>
    </Form>
}

export default LoginForm