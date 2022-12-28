import React from 'react'

function register() {
  return (
    <div>
        <form action="/api/register">
            <input type="Name" name='name' />
            <input type="Email" name='email' />
            <input type="Password" name='password' />
        </form>
    </div>
  )
}

export default register