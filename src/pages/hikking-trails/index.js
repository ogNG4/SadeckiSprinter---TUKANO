import RouteCard from "@/Routes/RouteCard/RouteCard";
import SectionWrapper from "@/UI/SectionWrapper/SectionWrapper";
import SectionHeader from "@/UI/SectionHeader/SectionHeader";
import RouteFilter from "@/Routes/RouteFilter/RouteFilter";
import Head from "next/head";
import ROUTES from "data-test/routes";

export default function BikeRoutes(){
    const hikingTrails = ROUTES.filter((route) => route.type === 'hiking');
    return(
        <>
        <Head>
            <title>Szlaki piesze</title>
            <meta name="opis" content="Odkryj trasy rowerowe w swojej okolicy"/>
        </Head>
        <SectionHeader title={'Szlaki piesze'}/>
        <RouteFilter/>
        <SectionWrapper>
            { hikingTrails.map((route) => (
                <RouteCard key={route.id} route={route}/>
            )) }
        </SectionWrapper>
        </>
    )
}