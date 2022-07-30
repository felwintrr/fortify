import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box p="1rem" mt="3rem">
      <Container maxW="container.xl">
        <Flex align="center" justifyContent="space-between">
          <Text>© 2022 Fortify | OnlyArweave. All rights reserved.</Text>
          <HStack>
            <Link href="https://twitter.com/onlyarweave" isExternal>
              <FaTwitter fontSize="1.5rem" />
            </Link>
            <Spacer />
            <Link
              href="https://www.youtube.com/channel/UC-3G4h9_PkNu9pTuHb9aw3w"
              isExternal
            >
              <FaYoutube fontSize="1.5rem" />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
