import { AspectRatio, HStack, Image } from "@chakra-ui/react";

export const Player = () => {
  return (
    <HStack
      w="full"
      justify="center"
      style={{ outline: "1px solid #2D3748" }}
      px="8"
      bg="black"
    >
      <AspectRatio maxW="container.lg" w="full" ratio={16 / 9}>
        <Image
          src="https://italo.com.br/wp-content/uploads/2018/12/curso-teologia.png"
          objectFit="cover"
        />
      </AspectRatio>
    </HStack>
  );
};
