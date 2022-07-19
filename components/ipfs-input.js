import { InputGroup, InputLeftAddon, Input, Box } from "@chakra-ui/react";

const IpfsInput = () => {
  return (
    <Box>
      <InputGroup>
        <InputLeftAddon children="ipfs://" />
        <Input id="userInput" type="text" placeholder="CID" width="475px" />
      </InputGroup>
    </Box>
  );
};

export default IpfsInput;
