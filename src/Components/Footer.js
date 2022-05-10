import React from 'react'

export default function Footer() {
  let styleComp = {
    width : "100%",
    marginTop : '56.95vh',
    position : "absolute"
  }
  return (
    <div className='bg-dark text-light p-2 rounded-top' style={styleComp}>
      <p className="text-center">Your work is up there!</p>
    </div>
  )
}
