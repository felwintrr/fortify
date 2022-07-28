import { Container, Heading, Text } from "@chakra-ui/react"

const Hero = () => {
  return (
    <Container maxW="container.md" centerContent>
          <Heading
            fontSize={{ base: "3.5rem", sm: "4rem" }}
            fontWeight="extrabold"
            textAlign="center"
            mt={{ base: "1rem", sm: "0rem" }}
          >
            Your NFTs deserve permanent storage.
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
  )
}

export default Hero