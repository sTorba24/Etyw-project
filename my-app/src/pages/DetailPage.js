import React, {useCallback, useState, useContext, useEffect} from "react";
import {useParams} from 'react-router-dom'
import {useHttp} from "../hooks/http.hooks";
import {AuthContext} from "../context/AuthContext";
import {LinkCard} from "../components/LinkCard";

export const DetailPage = () => {
  const {token} = useContext(AuthContext)
  const {request, loading} = useHttp()
  const [link, setLink] = useState(null)
  const linkId = useParams().id

  const getLink = useCallback(async () => {
    try {
      const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })

      setLink(fetched)
    } catch (e) {
    }
  })

  useEffect(() => {
    getLink()
  },[getLink])

  return (
    <>
      <h1>Detail Page</h1>
      {link && <LinkCard link={link}></LinkCard>}
    </>
  )
}
