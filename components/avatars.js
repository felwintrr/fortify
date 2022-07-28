import { Avatar, AvatarGroup, Flex, Text, Container } from "@chakra-ui/react";

const Avatars = () => {
  return (
    <Container centerContent mt="3rem">
      <Flex align="center" justify="space-between">
        <AvatarGroup size="md" max={3} mr="0.5rem">
          <Avatar name="Running connection" src="running-image.png" />
          <Avatar name="Moonbird NFT" src="moonb1.jpeg" />
          <Avatar name="Noun NFT" src="noun-image.png" />
        </AvatarGroup>
        <Text>50,000+ NFTs have been fortified.</Text>
      </Flex>
    </Container>
  );
};

export default Avatars;
