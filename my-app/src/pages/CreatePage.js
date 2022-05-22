import React, {useContext, useState} from "react";
import {Form, Button} from "react-bootstrap";
import {useHttp} from "../hooks/http.hooks";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

export const CreatePage = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = useState('')

  const pressHandler = async event => {
      event.preventDefault()
      if (event.key === 'Enter') {
        try {
          const data = await request('/api/link/generate', 'POST', {from: link}, {
            Authorization: `Bearer ${auth.token}`
          })
          // history.push(`/detail/${data.link._id}`)
          navigate(`/detail/${data.link._id}`, { replace: true })
        } catch (e) {}
      }
  }

    return (
        <>
            <h1>Create Page</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter link</Form.Label>
                <Form.Control
                  type="text"
                  id="link"
                  value={link}
                  placeholder="Enter link"
                  onChange={e => setLink(e.target.value)}
                  onKeyPress={pressHandler}
                />
              </Form.Group>

              {/*<Form.Group className="mb-3" controlId="formBasicEmail">*/}
              {/*  <Form.Label>Email address</Form.Label>*/}
              {/*  <Form.Control*/}
              {/*    type="email"*/}
              {/*    placeholder="Enter link"*/}
              {/*  />*/}
              {/*</Form.Group>*/}
              {/*<Button variant="primary" type="submit">*/}
              {/*  Submit*/}
              {/*</Button>*/}
            </Form>
        </>
    )
}
