import { Text } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Text letterSpacing="1.15" fontWeight="bold" cursor="pointer">
      Academia
      <Text color="cyan.500" as="span">
        Teologica
      </Text>
    </Text>
  );
};
