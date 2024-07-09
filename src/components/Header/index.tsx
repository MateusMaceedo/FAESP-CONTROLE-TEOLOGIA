import { Button, HStack } from "@chakra-ui/react";
import { Logo } from "../Logo";

export const Header = () => {
  const navigateTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <HStack w="full" height="full" px="8" justify="space-between" bg="gray.800">
      <Logo />
      <Button
        onClick={() => navigateTo("https://faesp-controle-teologia.vercel.app/")}
        borderRadius="0"
        colorScheme="cyan"
      >
        Sair
      </Button>
    </HStack>
  );
};
