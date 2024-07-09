import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { IClass } from "../../entities/IClass";
import { CardClassContainer } from "../CardClassContainer";
import { HamburgerIcon } from "@chakra-ui/icons";

const classes: IClass[] = [
  {
    id: 1,
    date: new Date(),
    isPublished: true,
    type: "AULA PRÁTICA",
    title: "Aula 01 - Titulo aula ignite labs",
    slug: "aula01",
  },
  {
    id: 2,
    date: new Date(),
    isPublished: true,
    type: "LIVE",
    title: "Aula 02 - Titulo aula ignite labs",
    slug: "aula02",
  },
  {
    id: 3,
    date: new Date(),
    isPublished: false,
    type: "AULA PRÁTICA",
    title: "Aula 03 - Titulo aula ignite labs",
    slug: "aula03",
  },
  {
    id: 4,
    date: new Date(),
    isPublished: false,
    type: "AULA PRÁTICA",
    title: "Aula 03 - Titulo aula ignite labs",
    slug: "aula03",
  },
  {
    id: 5,
    date: new Date(),
    isPublished: false,
    type: "AULA PRÁTICA",
    title: "Aula 03 - Titulo aula ignite labs",
    slug: "aula03",
  },
  {
    id: 6,
    date: new Date(),
    isPublished: false,
    type: "AULA PRÁTICA",
    title: "Aula 03 - Titulo aula ignite labs",
    slug: "aula03",
  },
];

export const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Botão de menu para dispositivos móveis */}
      <Box
        position="fixed"
        top="0"
        left="0"
        p="4"
        display={{ base: "block", md: "none" }}
        zIndex="overlay"
      >
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          aria-label="Open Menu"
          bg="gray.900" // Cor de fundo do botão
          color="white" // Cor do ícone do botão
          _hover={{ bg: "gray.700" }} // Cor de fundo ao passar o mouse
        />
      </Box>

      {/* Div principal que ajusta a saída da tela quando o menu é aberto */}
      <Box>
        {/* Drawer para dispositivos móveis */}
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="gray.900" color="white">
            <DrawerCloseButton color="white" />
            <DrawerHeader>Cronograma de Aulas</DrawerHeader>
            <DrawerBody>
              <VStack w="full" spacing="8">
                {classes?.map((classProps) => (
                  <CardClassContainer key={classProps.id} classProps={classProps} />
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Visualização normal em dispositivos maiores */}
        <Box display={{ base: "none", md: "block" }} w="full" p="8" bg="gray.900" color="white">
          <VStack align="flex-start" spacing="8">
            <Text fontWeight="bold" fontSize="lg">
              Cronograma de Aulas
            </Text>
            <VStack w="full" spacing="8">
              {classes?.map((classProps) => (
                <CardClassContainer key={classProps.id} classProps={classProps} />
              ))}
            </VStack>
          </VStack>
        </Box>
      </Box>
    </>
  );
};
