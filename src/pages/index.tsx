import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex width={"100vw"} height={"100vh"} align={"center"} justify={"center"}>
      <Flex
        as="form"
        width={"100%"}
        maxW={360}
        bg={"gray.800"}
        p={8}
        borderRadius={8}
        flexDir={"column"}
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              name="email"
              id="email"
              type={"email"}
              focusBorderColor={"pink.500"}
              bgColor={"gray.900"}
              variant={"filled"}
              _hover={{
                bgColor: "gray.900",
              }}
              size={"lg"}
            />
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              name="password"
              id="password"
              type={"password"}
              focusBorderColor={"pink.500"}
              bgColor={"gray.900"}
              variant={"filled"}
              _hover={{
                bgColor: "gray.900",
              }}
              size={"lg"}
            />
          </FormControl>
        </Stack>
        <Button type="submit" mt="6" colorScheme={"pink"}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}