import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
const Spinner = ({loading}) => {
    const override = {
        display: "block",
        margin: "0 auto",
     
      };
  return (
    <>
     <ClipLoader
        color="#C586A5"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  )
}

export default Spinner
