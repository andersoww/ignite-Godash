import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showDataProfile?: boolean;
}

export default function Profile({ showDataProfile = true }: ProfileProps) {
  return (
    <Flex mr="2" align="center">
      {showDataProfile && (
        <Box textAlign="right">
          <Text>Anderson Roque</Text>
          <Text>andersonbarrinha18@gmail.com</Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Anderson Roque"
        src="https://github.com/andersoww.png"
      />
    </Flex>
  );
}
