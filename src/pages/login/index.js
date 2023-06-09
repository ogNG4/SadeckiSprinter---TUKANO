import { Box, Flex, colorMode, useColorModeValue } from "@chakra-ui/react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa, ThemeMinimal } from "@supabase/auth-ui-shared";
import { supabase } from "lib/supabase";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LoginPage() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();
  const isDark = colorMode == "dark";
  const bgColor = useColorModeValue("gray.200", "gray.900");

  useEffect(() => {
    if (session) {
      router.push("/bike-routes");
    }
  }, [session]);

  return (
    <Box
      w={{ base: "80%", xl: "30%" }}
      margin={"5rem auto"}
      bg={bgColor}
      p={"2rem"}
      borderRadius={"20px"}
    >
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme={"light"}
          providers={["google"]}
          localization={{
            variables: {
              sign_in: {
                email_label: "Email",
                password_label: "Hasło",
                button_label: "Zaloguj się",
                email_input_placeholder: "Wprowadź swój adres e-mail",
                password_input_placeholder: "Wprowadź swoje hasło",
                link_text: "Masz już konto? Zaloguj się",
               
                social_provider_text: "Zaloguj się przez Google",
              },
              sign_up: {
                email_label: "Email",
                password_label: "Hasło",
                button_label: "Zarejestruj się",
                email_input_placeholder: "Wprowadź swój adres e-mail",
                password_input_placeholder: "Wprowadź swoje hasło",
                link_text: "Nie masz konta? Zarejestruj się",
                social_provider_text: "Zaloguj się przez Google",
                
              },
              forgotten_password: {
                link_text: "",
              },
            },
          }}
        />
      ) : null}
    </Box>
  );
}
