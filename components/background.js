import { Flex, Image } from "@chakra-ui/react"

const Background = () => {
  return (
    <Flex
        justifyContent="space-between"
        display={{ base: "none", sm: "flex" }}
        mt="-400px"
      >
        <Image src="nfts-fortify-p-500.png" loading="lazy" opacity="0.2" />
        <Image src="nfts-fort-p-500.png" loading="lazy" opacity="0.2" />
      </Flex>
  )
}

export default Background