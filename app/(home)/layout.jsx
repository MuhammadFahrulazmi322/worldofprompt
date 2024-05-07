"use client"

import Loading from '@app/loading';
import React, { useEffect, useState } from 'react'

const layout = ({children}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(false);
    }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {children}
        </>
      )}
    </>
  )
}

export default layout