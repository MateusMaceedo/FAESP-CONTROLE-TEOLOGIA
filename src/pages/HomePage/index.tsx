import { Button, HStack, Input, Text, VStack, useBreakpointValue, extendTheme, ChakraProvider } from "@chakra-ui/react";
import { Logo } from "../../components/Logo";
import { navigateTo } from "../../utils/navigateTo";

// Importando a fonte Roboto do Google Fonts
const customTheme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
});

export const HomePage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <ChakraProvider theme={customTheme}>
      <VStack
        w="full"
        bgGradient="linear(to-b, gray.900, gray.900)"
        color="gray.50"
        minH="100vh"
        spacing="8"
        px={{ base: "4", md: "8" }} // Ajuste de padding horizontal responsivo
      >
        <HStack
          w="full"
          maxW="container.lg"
          minH="50vh"
          spacing="8"
          flexDirection={{ base: "column", md: "row" }} // Empilhar em dispositivos móveis
          align="center"
        >
          <VStack w="full" align="flex-start" spacing="8">
            <Logo />

            <Text fontSize="4xl" fontWeight="bold" lineHeight={1.15} textAlign={{ base: "center", md: "left" }}>
              MATRÍCULAS ABERTAS!{" "}
              <Text as="span" color="cyan.500">
                Faça sua matrícula agora e comece a estudar Teologia!
              </Text>
            </Text>
            <Text fontSize="4xl" fontWeight="bold" lineHeight={1.15} textAlign={{ base: "center", md: "left" }}>
              Atenção, as vagas são limitadas!
            </Text>
          </VStack>

          <VStack
            w={isMobile ? "full" : "450px"} // Largura total em dispositivos móveis
            maxW={isMobile ? "full" : "450px"} // Largura máxima em dispositivos não móveis
            bg="gray.900"
            p={{ base: "6", md: "12" }} // Ajuste de padding responsivo
            style={{ outline: "1px solid #2D3748" }}
            spacing="8"
            align="center" // Centraliza conteúdo dos inputs e botão
          >
            <Text fontWeight="bold" fontSize="lg" textAlign="center">
              Acesse o seu perfil de aluno
            </Text>
            <Input
              border="1px"
              borderRadius="0"
              borderColor="#2D3748"
              bg="gray.800"
              placeholder="Nome Completo"
              mb="2"
            />
            <Input
              border="1px"
              borderRadius="0"
              borderColor="#2D3748"
              bg="gray.800"
              type="email"
              placeholder="Email"
              mb="4"
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
    </ChakraProvider>
  );
};
