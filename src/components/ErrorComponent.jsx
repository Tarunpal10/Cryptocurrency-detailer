import { Alert, AlertIcon, Center } from '@chakra-ui/react'
import React from 'react'

const Error = ({message}) => {
  return <Alert status='error' position={"fixed"} bottom={'400'} left={"20vh"} transform={"translateX(50%"} w={"container.xl"}>

 <AlertIcon/>
 {message}

  </Alert>
}

export default Error
