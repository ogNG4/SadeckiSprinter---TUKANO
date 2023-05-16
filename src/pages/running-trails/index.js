import SectionHeader from "@/UI/SectionHeader/SectionHeader"
import SectionWrapper from "@/UI/SectionWrapper/SectionWrapper"
import RouteCard from "@/Routes/RouteCard/RouteCard";
import ROUTES from "data-test/routes"
import RouteFilter from "components/Routes/RouteFilter/RouteFilter";
export default function RunningTrails(){
    const runningTrails = ROUTES.filter((route) => route.type === 'running');
    return(
        <>
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