import React from 'react'

import { Button } from 'ui/Button'

const HelloWorld = () => (
  <>
    <h1>Hello sick sad world!</h1>
    <label htmlFor="name">
      <input id="name" name="name" type="text" />
    </label>
    <Button />
  </>
)

export default HelloWorld
