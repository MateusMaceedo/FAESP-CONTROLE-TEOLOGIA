import {
  AspectRatio,
  Avatar,
  Button,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { navigateTo } from "../../utils/navigateTo";

export const VideoInformation = () => {
  return (
    <VStack w="full" justify="center" bg="gray.900" p="8">
      <HStack w="full" maxW="container.lg" align="flex-start">
        <VStack w="full" align="flex-start" spacing="8">
          <Text fontWeight="bold" fontSize="xl">
            Aula 01 - Introdução à Teologia
          </Text>
          <Text lineHeight={1.5} color="gray.300">
             Você fez a melhor escolha ao optar por crescer na graça e no conhecimento da Palavra de Deus. Este curso é uma oportunidade única, oferecido gratuitamente por tempo limitado, para que você possa explorar profundamente os ensinamentos que fundamentam a nossa fé. Aproveite este estudo para dar os primeiros passos em uma jornada de descoberta espiritual e aprendizado transformador. Ao completar as 15 aulas cuidadosamente preparadas, você terá adquirido um entendimento mais profundo e significativo da teologia, preparando-se não apenas para aplicar esses conhecimentos em sua vida pessoal, mas também para receber um Certificado de Conclusão que reconhece seu compromisso e dedicação neste caminho de crescimento espiritual.
          </Text>
          <HStack w="full" justify="space-between" spacing="8">
            <Avatar src="https://avatars.githubusercontent.com/u/47259718?v=4" />
            <VStack w="full" align="flex-start" spacing="0">
              <Text>Pb. Neiomar</Text>
              <Text fontSize="xs" color="gray.600">
                Mestre em Teologia Biblica
              </Text>
            </VStack>
            <IconButton
              variant="ghost"
              aria-label="Email"
              fontSize={32}
              colorScheme="cyan"
              icon={<AiOutlineMail />}
              onClick={() =>
                navigateTo("https://www.linkedin.com/in/fischerafael/")
              }
            />
          </HStack>
          <Button
            borderRadius="0"
            colorScheme="cyan"
            variant="outline"
            w="full"
            p="2"
            fontSize="sm"
            mt="4"
            onClick={() =>
              navigateTo("https://seusite.com/meus-cursos")
            }
          >
            MEUS CURSOS
          </Button>
        </VStack>
        <VStack
          w="full"
          maxW="300px"
          h="full"
          align="flex-end"
          justify="flex-start"
          spacing="4"
        >
          <Button
            borderRadius="0"
            colorScheme="cyan"
            w="full"
            p="4"
            onClick={() =>
              navigateTo("https://github.com/fischerafael/coursefy")
            }
          >
            Subsídios
          </Button>
          <Button
            borderRadius="0"
            colorScheme="cyan"
            variant="outline"
            w="full"
            p="4"
            onClick={() =>
              navigateTo(
                "https://www.youtube.com/channel/UCz75xXTimMhZkbK__XOM8hQ"
              )
            }
          >
            Referências
          </Button>
        </VStack>
      </HStack>
    </VStack>
  );
};
