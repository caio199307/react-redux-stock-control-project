import React, { useState } from 'react'
import Form from '../shared/Form'
import Input from '../shared/Input'
import Button from '../shared/Button'

const LoginForm = () => {
    const [form, setForm] = useState({
        user: '',
        pass: ''
    })

    const handleLogin = () => {
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