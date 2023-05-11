import RouteCard from "@/Routes/RouteCard/RouteCard";
import SectionWrapper from "@/UI/SectionWrapper/SectionWrapper";
import SectionHeader from "@/UI/SectionHeader/SectionHeader";
import RouteFilter from "@/Routes/RouteFilter/RouteFilter";
import Head from "next/head";

export default function BikeRoutes(){
    return(
        <>
        <Head>
            <title>Trasy rowerowe</title>
            <meta name="opis" content="Odkryj trasy rowerowe w swojej okolicy"/>
        </Head>
        <SectionHeader title={'Trasy rowerowe'}/>
        <RouteFilter/>
        <SectionWrapper>
            <RouteCard/>
            <RouteCard/>
            <RouteCard/>
            <RouteCard/>
            <RouteCard/>
            <RouteCard/>
            <RouteCard/>
        </SectionWrapper>
        </>
    )
}