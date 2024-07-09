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
        onClick={() => navigateTo("http://localhost:3001/")}
        borderRadius="0"
        colorScheme="cyan"
      >
        Sair
      </Button>
    </HStack>
  );
};
