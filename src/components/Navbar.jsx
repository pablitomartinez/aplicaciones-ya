import { Box, Flex, Spacer, Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        bg="#E38162"
        color="white"
      >
        <Box>
          <Link to="/">
            <Box fontWeight="bold" fontSize="xl">
              Estudio Origen
            </Box>
          </Link>
        </Box>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <Link to="/">
            <Button variant="ghost" mr={4}>
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost" mr={4}>
              Sobre nosotros
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost" mr={4}>
              Contactanos
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="ghost" mr={4}>
              Servicios
            </Button>
          </Link>
        </Box>
        <Box>
          <Button onClick={toggleColorMode} variant="outline">
            {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Box>
      </Flex>
    );
  };


export default Navbar