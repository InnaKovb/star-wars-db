import { useEffect,  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { planetsListRequest } from "../../store/apiClient/apiCliient";
import Pagination from '../Pagination/Pagination';
import { filterObjects } from "../helpers/filterObjectFields";
import Table from "../table/Table";
import {TABLE_TITLES_PLANETS} from '../constants/generalConstants';

function Planets () {
    const dispatch = useDispatch();
    const planets = useSelector((state) => state.starWarsStore.planets);
    const totalItemsCount = useSelector((state) => state.starWarsStore.totalItemsCount);
    const currentPage = useSelector((state) => state.starWarsStore.currentPage);
    const isLoading = useSelector((state) => state.starWarsStore.isLoading);
    const error = useSelector((state) => state.starWarsStore.error);

    useEffect(() => {
        dispatch(planetsListRequest(currentPage))
    }, [dispatch, currentPage]);

    const planetsPageChange = (page) => {
        const selectedPage = page.selected + 1;
        dispatch(planetsListRequest(selectedPage));
        console.log(selectedPage, "test");
      };

    if (isLoading) {
        return <div>Loading....</div>
    }
    
    if (error) {
        return <div>ERROR: {error.message}</div>
    }

    const filteredPlanets = filterObjects(planets, TABLE_TITLES_PLANETS);
    console.log(filteredPlanets,'my test')

    return (
        <>
            <h3>Planets</h3>
            <Table titles={TABLE_TITLES_PLANETS} data={filteredPlanets}/>
            <Pagination totalPages={Math.ceil(totalItemsCount/10)} handlePageChange={(data)=> planetsPageChange(data)} currentPage={currentPage} />  
        </>
    )
}

export default Planets