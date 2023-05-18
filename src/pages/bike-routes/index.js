import RouteCard from "@/Routes/RouteCard/RouteCard";
import SectionWrapper from "@/UI/SectionWrapper/SectionWrapper";
import SectionHeader from "@/UI/SectionHeader/SectionHeader";
import RouteFilter from "@/Routes/RouteFilter/RouteFilter";
import Head from "next/head";
import ROUTES from "data-test/routes";


export default function BikeRoutes(){
  
    const bikeRoutes = ROUTES.filter((route) => route.type === 'bike');
    return(
        <>
        <Head>
            <title>Trasy rowerowe</title>
            <meta name="opis" content="Odkryj trasy rowerowe w swojej okolicy"/>
        </Head>
        <SectionHeader title={'Trasy rowerowe'}/>
        <RouteFilter/>

        <SectionWrapper>
            { bikeRoutes.map((route) => (
                <RouteCard key={route.id} route={route}/>
            )) }
        </SectionWrapper>
       
        </>
    )
}