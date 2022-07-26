import { InputGroup, InputLeftAddon, Input, Box } from "@chakra-ui/react";

const IpfsInput = () => {
  return (
    <Box>
      <InputGroup size='md'>
        <InputLeftAddon children="ipfs://" />
        <Input id="userInput" type="text" placeholder="CID"/>
      </InputGroup>
    </Box>
  );
};

export default IpfsInput;
