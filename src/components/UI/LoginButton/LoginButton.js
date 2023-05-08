import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import { Button, Flex, Text, useColorModeValue, Tooltip } from "@chakra-ui/react";
import { MdLogin, MdLogout } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginButton() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const handleClick = () => {
    if (session) {
      supabase.auth.signOut();
      router.replace("/");
    }else{
      router.replace("/login");
    }
  };

  const buttonSize= { fontSize: "1.5em" };
  const buttonColor = session? "red.300" : "green.300";
  const buttonIcon = session? <MdLogout  style={buttonSize} /> : <MdLogin style={buttonSize} />;
  const tooltipLabel = session? 'Wyloguj się' : 'Zaloguj się';

  return (
    <Tooltip hasArrow label={tooltipLabel} >
     <Button onClick={handleClick}  bg={buttonColor}>
      {buttonIcon}
    </Button>
    </Tooltip>
   
  );
 
}
