import { Box, Container, Heading, Text, Image, Flex } from "@chakra-ui/react";
import Head from "next/head";
import SubmitButton from "../components/connect-button";
import Footer from "../components/footer";
import IpfsInput from "../components/ipfs-input";
import Navbar from "../components/navbar";

export default function Home() {

  return (
    <Box>
      <Head>
        <title>Fortify - Make Your NFTs Permanent</title>
        <meta
          name="description"
          content="Permanenty switch your IPFS-stored NFT collection to Arweave."
        />
      </Head>
      <Navbar />
      <Container maxW="container.xl" centerContent>
        <Container maxW="container.md">
          <Heading
            fontSize={{ base: "3.5rem", sm: "4rem" }}
            fontWeight="extrabold"
            textAlign="center"
            mt={{ base: "1rem", sm: "0rem" }}
          >
            Your NFTs deserve{" "}
            <Heading
              color="green.400"
              fontSize={{ base: "3.5rem", sm: "4rem" }}
              fontWeight="extrabold"
              textAlign="center"
              mt={{ base: "1rem", sm: "0rem" }}
            >
              permanent storage.
            </Heading>
          </Heading>
          <Text
            fontSize="1.375rem"
            fontWeight="medium"
            textAlign="center"
            mt={6}
          >
            Get your entire collection on Arweaveⓐ with a few clicks
          </Text>
        </Container>
      </Container>
      <Box>
        <Container mt={20} maxW="container.xl" centerContent>
          <Text fontWeight="bold" textAlign="center" p={2}>
            Enter your metadata CID to get started
          </Text>
          <IpfsInput />
          <SubmitButton />
        </Container>
        <Flex
          justifyContent="space-between"
          display={{ base: "none", sm: "flex" }} /*mt="-250px"*/
        >
          <Image src="nfts-fortify-p-500.png" loading="lazy" opacity="0.2"/>
          <Image src="nfts-fort-p-500.png" loading="lazy" opacity="0.2" />
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
}
