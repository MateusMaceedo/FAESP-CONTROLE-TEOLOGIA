import { Button, HStack, Image, Input, Text, VStack } from "@chakra-ui/react";
import { Logo } from "../../components/Logo";
import { navigateTo } from "../../utils/navigateTo";

export const HomePage = () => {
  return (
    <VStack
      w="full"
      bgGradient="linear(to-b, gray.900, gray.700)"
      color="gray.50"
      minH="100vh"
      spacing="0"
      px="8"
    >
      <HStack w="full" maxW="container.lg" minH="50vh" spacing="16">
        <VStack w="full" align="flex-start" spacing="8">
          <Logo />

          <Text fontSize="4xl" fontWeight="bold" lineHeight={1.15}>
            MATRÍCULAS ABERTAS!{" "}
            <Text as="span" color="cyan.500">
              Faça sua matrícula agora e começe a estudar Teologia!
            </Text>
          </Text>
          <Text fontSize="4xl" fontWeight="bold" lineHeight={1.15}>
            Atenção, as vagas são limitadas!
          </Text>
        </VStack>

        <VStack
          w="full"
          maxW="450px"
          bg="gray.900"
          p="12"
          style={{ outline: "1px solid #2D3748" }}
          spacing="8"
          align="flex-start"
        >
          <Text fontWeight="bold" fontSize="lg">
            Acesse o seu perfil de aluno
          </Text>
          <Input
            border="1px"
            borderRadius="0"
            borderColor="#2D3748"
            bg="gray.800"
            placeholder="Nome Completo"
          />
          <Input
            border="1px"
            borderRadius="0"
            borderColor="#2D3748"
            bg="gray.800"
            type="email"
            placeholder="Email"
          />
          <Button
            onClick={() => navigateTo("/app/course/haushsua")}
            w="full"
            colorScheme="cyan"
            borderRadius="0"
          >
            Acessar
          </Button>
        </VStack>
      </HStack>
    </VStack>
  );
};
