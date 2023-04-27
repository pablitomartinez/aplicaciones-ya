import { Box, Container, Stack, Heading, Text, Button } from "@chakra-ui/react";
import Comentarios from "./Comentarios";
import Registrate from "./Registrate";

function LandingPage() {
  return (
    <>

    <Box bg="#E38162" color="white" py="12">
      <Container maxW="container.lg">
        <Stack direction={{ base: "column", lg: "row" }} spacing={{ base: 8, lg: 24 }} align="center" >
          <Box flex="1">
            <Heading as="h1" size="3xl" fontWeight="bold" mb="6">
              Estdio Origen
            </Heading>
            <Text fontSize="xl" mb="8">
              En Estudio Origen te ofrecemos soluciones personalizadas para mejorar la productividad y optimizar el desarrollo de pequeñas empresas.
            </Text>
            <Button colorScheme="orange" size="lg">
              ¡Contáctanos!
            </Button>
          </Box>
          <Box flex="1">
            <img src="https://www.zarla.com/images/zarla-ideamantes-1x1-2400x2400-20220318-fgyrmmq78y6hqxcrkrk4.png?crop=1:1,smart&width=250&dpr=2" alt="Imagen de ejemplo" />
          </Box>
        </Stack>
      </Container>
    </Box>
    <Registrate/>
    <Comentarios/>
    </>
  );
}

export default LandingPage;
