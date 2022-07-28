import { Box, Container, Heading, Text, Image, Flex } from "@chakra-ui/react";
import Head from "next/head";
import SubmitButton from "../components/submit-button";
import Footer from "../components/footer";
import IpfsInput from "../components/ipfs-input";
import Navbar from "../components/navbar";
import Avatars from "../components/avatars";
import Hero from "../components/hero";
import Background from "../components/background"

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
      <Container maxW="container.xl">
        <Hero />
        <Text fontWeight="bold" textAlign="center" p={2} mt={20}>
          Enter your metadata CID to get started
        </Text>
        <IpfsInput />
        <SubmitButton />
        <Avatars />
      </Container>
      <Background />
      <Footer />
    </Box>
  );
}
