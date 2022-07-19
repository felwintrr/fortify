import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import ConnectButton from "../components/connect-button";
import IpfsInput from "../components/ipfs-input";
import Arweave from "arweave";


export default function Home() {
  const arweave = Arweave.init({});
  console.log(arweave);
  return (
    <Box>
      <Head>
        <title>Fortify - Arweave IPFS Bridge Uploader</title>
        <meta
          name="description"
          content="Permanenty pin your IPFS files through the Arweave and IPFS bridge."
        />
      </Head>
      <Container maxW="container.xl" centerContent>
        <Heading>fortify.</Heading>
        <Text>permanently pin your IPFS files, hassle-free.</Text>
        <IpfsInput />
        <ConnectButton name="pin it!" />
      </Container>
    </Box>
  );
}

if (typeof window !== "undefined") {
  console.log(document.getElementById("userInput").value);
}
