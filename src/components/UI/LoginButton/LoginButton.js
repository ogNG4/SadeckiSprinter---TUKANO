import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import { Button, Flex, Text, useColorModeValue, Tooltip, useMediaQuery } from "@chakra-ui/react";
import { MdLogin, MdLogout } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginButton() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();
  const [mobileWidth] = useMediaQuery("(max-width: 992px)")

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
  const buttonText= session? 'Wyloguj się' : 'Zaloguj się';
  const buttonIcon = session? <MdLogin fontSize={"1.4em"} /> : <MdLogout fontSize={"1.4em"} />
  const tooltipLabel = session? 'Wyloguj się' : 'Zaloguj się';

  return (
    <Tooltip hasArrow label={tooltipLabel} >
     <Button onClick={handleClick}  bg={buttonColor} w={'90%'}>
      {mobileWidth? buttonIcon : buttonText}
    </Button>
    </Tooltip>
   
  );
 
}
