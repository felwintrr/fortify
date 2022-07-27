import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box p="0.5rem">
      <Container maxW="container.xl">
        <Flex justifyContent="space-between">
          <Text>© 2022 Fortify | OnlyArweave. All rights reserved.</Text>
          <Flex>
            <FaTwitter />
            <FaYoutube />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
