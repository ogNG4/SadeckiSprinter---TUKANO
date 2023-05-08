import { Box, Flex, colorMode, useColorModeValue } from "@chakra-ui/react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa, ThemeMinimal } from '@supabase/auth-ui-shared'
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LoginPage(){
    const session = useSession();
    const supabase = useSupabaseClient();
    const router = useRouter();
    const isDark = colorMode == 'dark';
    const bgColor = useColorModeValue('gray.200', 'gray.900')
    
    

    useEffect(()=>{
        if(session){
            router.push('/')
        }
    }, [])

    return(
       <Box w={{base:'80%', xl: '30%'}} margin={'5rem auto'} bg={bgColor} p={'2rem'}  borderRadius={'20px'} >
        {!session ? (
            <Auth supabaseClient={supabase} appearance={{ theme:ThemeSupa }} theme={!isDark? ('dark') : ('light')}  />
        ) : (<p>Acoount page</p>)}

       </Box>
    )
}
