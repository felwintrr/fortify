import { Button, Container } from "@chakra-ui/react";

const SubmitButton = () => {
  // const userInput = document.getElementById("userInput").value;

  return (
    <Container centerContent>
      <Button
        width={{ base: "300px", md: "500px" }}
        mt="1rem"
        colorScheme="blue"
      >
        Submit
      </Button>
    </Container>
  );
};

export default SubmitButton;
