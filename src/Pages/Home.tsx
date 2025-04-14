import { Box, Button, Heading, Text, Center, Stack, useBreakpointValue, Icon } from '@chakra-ui/react';
import { IoRocketSharp } from 'react-icons/io5'; // Rocket icon for a nice touch
import { useColorModeValue } from '../components/ui/color-mode';
import { Link } from 'react-router-dom';

const Home = () => {
  const buttonSize = useBreakpointValue<"sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs">({ base: 'sm', md: 'lg' }) || 'md';

  // Dynamic color values based on light/dark mode
  const headingColor = useColorModeValue("teal.600", "teal.300");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const buttonColorScheme = useColorModeValue("teal", "gray");
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const boxBgColor = useColorModeValue("white", "gray.700");

  return (
    <Center h="100vh" flexDirection="column" bg={bgColor} color={textColor}>
      <Box 
        textAlign="center" 
        p={8} 
        bg={boxBgColor} 
        borderRadius="lg" 
        shadow="2xl" 
        maxW="lg"
        boxShadow="xl"
      >
        <Stack gap={4} align="center">
          <Icon as={IoRocketSharp} w={16} h={16} color={headingColor} />
          <Heading size="2xl" color={headingColor} fontWeight="bold">
            Welcome to Our Application!
          </Heading>
          <Text fontSize="lg" color={textColor} maxW="400px" mx="auto">
            Experience the future of productivity with our app. Manage your tasks, projects, and more, all in one place.
          </Text>
          <Stack mt={6} gap={4} direction={{ base: 'column', md: 'row' }} justify="center">
            <Link to="/products" style={{ textDecoration: 'none', width: '100%' }}>
              <Button
                size={buttonSize}
                colorScheme={buttonColorScheme}
                variant="solid"
                width={{ base: 'full', sm: 'auto' }}
              >
                Get Started
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', width: '100%' }}>
              <Button
                size={buttonSize}
                colorScheme="gray"
                variant="outline"
                width={{ base: 'full', sm: 'auto' }}
              >
                Learn More
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default Home;
