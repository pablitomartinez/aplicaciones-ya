import { Flex, Box, Stack, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <Flex
      bg={useColorModeValue("#E38162", 'gray.900')}
      color={useColorModeValue('gray.50', 'gray.200')}
      mt={16}
      py={8}
      justify="center"
    >
      <Box maxW="8xl" mx="auto" px={{ base: 4, md: 8 }}>

        <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 4, lg: 10 }}>

          {/* Redes sociales */}
          <Stack>
            <Box fontSize="xl" fontWeight="semibold" mb={2}>
              ¡Síguenos en redes sociales!
            </Box>
            <Box>
              <IconButton
                as="a"
                href="https://www.facebook.com/tu-pagina-de-facebook"
                aria-label="Facebook"
                icon={<FaFacebook />}
                variant="ghost"
                color="current"
                fontSize="xl"
                target="_blank"
                rel="noopener noreferrer"
              />
              <IconButton
                as="a"
                href="https://www.instagram.com/tu-pagina-de-instagram"
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                color="current"
                fontSize="xl"
                target="_blank"
                rel="noopener noreferrer"
              />
              <IconButton
                as="a"
                href="https://www.twitter.com/tu-pagina-de-twitter"
                aria-label="Twitter"
                icon={<FaTwitter />}
                variant="ghost"
                color="current"
                fontSize="xl"
                target="_blank"
                rel="noopener noreferrer"
              />
            </Box>
          </Stack>

          {/* Información de contacto */}
          <Stack>
            <Box fontSize="xl" fontWeight="semibold" mb={2}>
              ¡Contáctanos!
            </Box>
            <Box>
              <Box>Correo electrónico: info@tupagina.com</Box>
              <Box>Teléfono: +123456789</Box>
              <Box>Dirección: Calle Falsa 123</Box>
            </Box>
          </Stack>

        </Stack>

        {/* Créditos */}
        <Box textAlign={{ base: 'center', md: 'end' }} mt={{ base: 4, md: 0 }}>
          <Box fontSize="sm">
            &copy; {new Date().getFullYear()} Todos los derechos reservados. Hecho por {' '}
            <a href="https://estudio-origen.com.ar/" target="_blank" rel="noopener noreferrer">
              Estudio Origen
            </a>
          </Box>
        </Box>

      </Box>
    </Flex>
  );
}

export default Footer;
