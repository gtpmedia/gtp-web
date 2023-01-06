import React, { useState } from "react"
import axios from "axios"
import { StyledContact, StyledResponse } from "./styles/Contact.styled.js"

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/e6be00c2-324a-4346-b258-711abff303d1",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Message sent!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  return (
    <StyledContact>
      <form
        onSubmit={handleOnSubmit}
        style={{ opacity: serverState.status ? "0.1" : "1" }}
      >
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="name" placeholder="Name" />
        <textarea type="text" name="message" placeholder="Message" />
        <button type="submit">Send</button>
      </form>
      {serverState.status && (
        <StyledResponse>{serverState.status.msg}</StyledResponse>
      )}
    </StyledContact>
  )
}

export default Contact
