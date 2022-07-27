import { Button } from "@chakra-ui/react";

const SubmitButton = () => {
  // const userInput = document.getElementById("userInput").value;

  return (
    <Button
      width={{ base: "300px", md: "500px" }}
      mt="0.5rem"
      colorScheme="green"
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
