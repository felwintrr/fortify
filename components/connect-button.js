import { Button } from "@chakra-ui/react"
import { FaMapPin } from "react-icons/fa"

const ConnectButton = (props) => {
  return (
    <Button>
        {props.name} &nbsp; <FaMapPin />
    </Button>
  )
}

export default ConnectButton