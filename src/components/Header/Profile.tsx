import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Anderson Roque</Text>
        <Text>andersonbarrinha18@gmail.com</Text>
      </Box>

      <Avatar
        size="md"
        name="Anderson Roque"
        src="https://github.com/andersoww.png"
      />
    </Flex>
  );
}
