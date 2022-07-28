import { InputGroup, InputLeftAddon, Input, Container } from "@chakra-ui/react";

const IpfsInput = () => {
  return (
    <Container centerContent>
      <InputGroup size="md" width={{ base: "300px", md: "500px" }}>
        <InputLeftAddon children="ipfs://" />
        <Input id="userInput" type="text" placeholder="CID" />
      </InputGroup>
    </Container>
  );
};

export default IpfsInput;
