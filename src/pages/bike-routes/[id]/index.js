import { useRouter } from "next/router"
import ROUTES from "data-test/routes";
import Head from "next/head";
import SectionHeader from "@/UI/SectionHeader/SectionHeader";


export default function BikeRoutes(){
    const router = useRouter();
    const { id } = router.query;
    
    const route = ROUTES.find((route) => route.id === id);
    return (
        <>
            <Head>
                <title>{route.title}</title>
                <meta name="opis" content={route.description}/>
            </Head>
            <SectionHeader title={route.title}/>
       
        </>
    )
}