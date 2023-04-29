import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { MdLogin, MdLogout } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginButton() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const logoutHandler = () => {
    supabase.auth.signOut();
    router.replace("/");
  };

  if (!session) {
    return (
      <Button
        w={'80%'}
        bg={"green.300"}
        onClick={() => router.replace("/login")}
      >
        <MdLogin fontSize={"1.5rem"} color={'white'} />
      </Button>
    );
  } else {
    return (
      <Button w={'80%'}  bg={"red.300"} onClick={logoutHandler}>
        <MdLogout fontSize={"1.5rem"} color={'white'} />
      </Button>
    );
  }
}
