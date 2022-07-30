import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";

const features = [
  { title: "Full switch from IPFS to Arweave" },
  { title: "Easy input with metadata CID" },
  { title: "Pay ONCE and store permanently" },
  { title: "Up to 2.5GB of images (you can add more of course!)" },
  { title: "Works with Ethereum, Polygon, and Solana based NFTs" },
  { title: "Support wherever needed (you won't need it most likely!)" },
  { title: "Tutorials and tips for NFT collections" },
  {
    title: "Peace of mind that you can deliver a decentralized NFT experience",
  },
  { title: "Featured collections on our site and beyond" },
];

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>10k collection stored for $8 USD.</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Permanently & Decentralized.
        </Text>
      </Stack>

      <Container maxW="container.xl" mt={10}>
        <SimpleGrid ml={10} columns={3} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
