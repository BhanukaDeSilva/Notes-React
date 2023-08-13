
import React from 'react'

function Footer() {
  return (
    <paper>
        <p style={{
             position:"absolute",
             bottom:"0", 
             width:"100%", 
             textAlign:"center"
             }}>
                Copyright &copy;{new Date().getFullYear()}  Bhanuka Pramod</p>
    </paper>
  )
}

export default Footer