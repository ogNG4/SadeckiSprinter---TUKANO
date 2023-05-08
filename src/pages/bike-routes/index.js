import RouteCard from "@/Routes/RouteCard/RouteCard";
import SectionWrapper from "@/UI/SectionWrapper/SectionWrapper";
import SectionHeader from "@/UI/SectionHeader/SectionHeader";
import RouteFilter from "@/Routes/RouteFilter/RouteFilter";

export default function BikeRoutes(){
    return(
        <>
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