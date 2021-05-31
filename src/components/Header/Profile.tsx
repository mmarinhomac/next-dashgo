import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus Marinho</Text>
          <Text color="gray.300" fontSize="small">
            mmarinhomac@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Matheus Marinho"
        src="https://avatars.githubusercontent.com/u/47289225?v=4"
      />
    </Flex>
  );
}