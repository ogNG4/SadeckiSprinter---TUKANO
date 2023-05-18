import SectionHeader from "@/UI/SectionHeader/SectionHeader"
import SectionWrapper from "@/UI/SectionWrapper/SectionWrapper"
import RouteCard from "@/Routes/RouteCard/RouteCard";
import ROUTES from "data-test/routes"
import RouteFilter from "components/Routes/RouteFilter/RouteFilter";
import Head from "next/head";
export default function RunningTrails(){
    const runningTrails = ROUTES.filter((route) => route.type === 'running');
    return(
        <>
         <Head>
            <title>Trasy biegowe</title>
            <meta name="opis" content="Odkryj trasy biegowe swojej okolicy"/>
        </Head>
        <SectionHeader title={'Trasy biegowe'}/>
        <RouteFilter/>
        <SectionWrapper>
            { runningTrails.map((route) => (
                <RouteCard key={route.id} route={route}/>
            )) }
        </SectionWrapper>
        </>
    )
}