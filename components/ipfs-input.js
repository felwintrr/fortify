import { InputGroup, InputLeftAddon, Input, Box } from "@chakra-ui/react";

const IpfsInput = () => {
  return (
    <Box>
      <InputGroup size="md" width={{base: "300px", md:'500px'}} >
        <InputLeftAddon children="ipfs://" />
        <Input id="userInput" type="text" placeholder="CID" />
      </InputGroup>
    </Box>
  );
};

export default IpfsInput;
