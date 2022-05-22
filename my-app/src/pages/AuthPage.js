import React, {useCallback, useContext, useEffect, useState} from "react";
import { useHttp } from "../hooks/http.hooks";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";
import {Form, Button, Col, NavLink, Card} from "react-bootstrap";

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error,  clearError} = useHttp()
    const [registration, setRegistration] = useState(true)
    const [form, setForm] = useState({
      email: '', password: ''
    })

    useEffect(() => {
      message(error)
    }, [error, message, clearError])

    const changeHandler = event => {
      setForm({...form, [event.target.name]: event.target.value })
      clearError()
    }

    const registerHandler = async () => {
      try {
        const data = await request('/api/auth/register', 'POST', {...form})
        console.log('Data', data )
      } catch (e) {

      }
    }
    const loginHandler = async () => {
      try {
        const data = await request('/api/auth/login', 'POST', {...form})
        auth.login(data.token, data.userId)
      } catch (e) {

      }
    }

    return (
      <div className="d-flex flex-column align-items-center mt-5">
        <h1>Etyw</h1>
        <Col xs={12} md={6} lg={4} className="auth-card">
          <Card>
            <Card.Body>
              <div className="text-center">
                <h4>Login to Etyw</h4>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    value={form.email}
                    onChange={changeHandler}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={changeHandler}
                  />
                </Form.Group>
                <h5 id="error" className="text-center text-danger mb-3"></h5>
                {registration
                  ? <>
                    <Button
                      className="w-100 mb-4"
                      variant="primary"
                      type="submit"
                      onClick={loginHandler}
                      disabled={loading}
                    >
                      Login
                    </Button>
                    <div className="text-center">
                      <strong>Not a member? </strong>
                      <a
                        href="#"
                        className="text-primary"
                        onClick={() => {
                          setRegistration(false)
                        }
                        }
                        disabled={loading}
                      >
                        Register
                      </a>
                    </div>
                  </>
                  : <>
                    <Button
                      className="w-100 mb-4"
                      variant="primary"
                      type="submit"
                      onClick={registerHandler}
                      disabled={loading}
                    >
                      Register
                    </Button>
                    <div className="text-center">
                      <strong>Already have account? </strong>
                      <a
                        href="#"
                        className="text-primary"
                        onClick={() => {
                          setRegistration(true)
                        }
                        }
                        disabled={loading}
                      >
                        Login
                      </a>
                    </div>
                  </>
                }
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </div>
    )
}
