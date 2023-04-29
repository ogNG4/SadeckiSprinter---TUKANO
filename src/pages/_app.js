import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import Layout from "@/components/UI/Layout/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())
  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
    <ChakraProvider>
      <Layout >
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    </SessionContextProvider>
  );
}
