import React, { useRef, useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passowordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passowordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }
    
    signup(emailRef.current.value, passwordRef.current.value)
  }
  
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type='password' ref={passowordConfirmRef} required />
            </Form.Group>
            <Button className='w-100' type='submit'>Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? Log In
      </div>
    </>
  )
}

export default SignUp