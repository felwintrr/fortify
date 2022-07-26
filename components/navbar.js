import { Box, Flex, Image, Button } from "@chakra-ui/react";
import { FaWallet } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex
      p={4}
      alignContent="center"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box ml={12}>
        <Image src="webclip.png" alt="Fortify logo" boxSize="90px" />
      </Box>
      <Box mr={12}>
      <Button size="md" colorScheme='orange' >Login  &nbsp; <FaWallet />  </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
