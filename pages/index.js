import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import IpfsInput from "../components/ipfs-input";
import Arweave from "arweave";
import Navbar from "../components/navbar";

export default function Home() {
  const arweave = Arweave.init({});

  async function sendTx() {
    const userInput = document.getElementById("userInput").value;
    const tx = await arweave.createTransaction({ data: "hello" });

    tx.addTag("IPFS-Add", { userInput });

    await arweave.transactions.sign(tx);
    response = await arweave.transactions.post(tx);
    console.log(response.status);
  }

  return (
    <Box>
      <Head>
        <title>Fortify - Arweave NFT Uploader</title>
        <meta
          name="description"
          content="Permanenty switch your IPFS-stored NFT collection to Arweave."
        />
      </Head>
      <Navbar />
      <Container maxW="container.xl" centerContent>
        <Container maxW="container.md">
          <Heading fontSize="64px" fontWeight="extrabold" textAlign="center">
            Your NFTs deserve permanent storage.
          </Heading>
          <Text fontSize="22px" fontWeight="medium" textAlign="center" mt={6}>
            Get your entire collection on Arweaveⓐ with a few clicks
          </Text>
        </Container>
        <Container mt={20} >
          <Text fontWeight='bold' textAlign='center' p={2} >Enter your metadata CID to get started</Text>
          <IpfsInput />
        </Container>
      </Container>
    </Box>
  );
}
