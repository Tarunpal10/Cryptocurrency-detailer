import { HStack ,Button} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
    <Button variant={"unstyled"} color={"white"}>
    <Link to="/">HOME</Link>
    </Button>

    <Button variant={"unstyled"} color={"white"}>
    <Link to="/exchanges">EXCHANGES</Link>
    </Button>

    <Button variant={"unstyled"} color={"white"}>
    <Link to="/coins">COINS</Link>
    </Button>

  </HStack>
}

export default Header
