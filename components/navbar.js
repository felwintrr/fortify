import { Box, Flex, Image, Button } from "@chakra-ui/react";
import { FaWallet } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex
      p={{ base: "0.15rem", sm: "0.25rem" }}
      alignContent="center"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box ml={{ base: "0.5rem", sm: "1rem" }}>
        <Image src="webclip.png" alt="Fortify logo" boxSize="90px" />
      </Box>
      <Box mr={{ base: "0.5rem", sm: "1rem" }}>
        <Button size="md" colorScheme="green">
          Login &nbsp; <FaWallet />{" "}
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
