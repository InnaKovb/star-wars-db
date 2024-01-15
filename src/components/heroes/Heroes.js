import { useEffect,  useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import { heroesListRequest } from "../../store/apiClient/apiCliient";
import Table from "../table/Table";
import { filterObjects } from "../helpers/filterObjectFields";
import {TABLE_TITLES_HEROES, TABLE_FIELD_HEROES} from '../constants/generalConstants';


function Heroes () {

    const dispatch = useDispatch();
    const heroes = useSelector((state) => state.starWarsStore.heroes);
    const totalItemsCount = useSelector((state) => state.starWarsStore.totalItemsCount);
    const currentPage = useSelector((state) => state.starWarsStore.currentPage);
    const isLoading = useSelector((state) => state.starWarsStore.isLoading);
    const error = useSelector((state) => state.starWarsStore.error);
    console.log(heroes);


    useEffect(() => {
        dispatch(heroesListRequest(currentPage))
    }, [dispatch, currentPage]);

    const heroesPageChange = (page) => {
        const selectedPage = page.selected + 1;
        dispatch(heroesListRequest(selectedPage));
        console.log(selectedPage, "test");
      };

    if (isLoading) {
            return <div>Loading....</div>
        }
        
    if (error) {
        return <div>ERROR: {error.message}</div>
    }
   
    const filteredHeroes = filterObjects(heroes, TABLE_FIELD_HEROES);
    console.log(filteredHeroes,'my test')


    return (
        <>
            <h3>Heroes</h3>
            <Table titles={TABLE_TITLES_HEROES} data={filteredHeroes}/>
            <Pagination totalPages={Math.ceil(totalItemsCount/10)} handlePageChange={(data)=> heroesPageChange(data)} currentPage={currentPage} />  
        </>
    )

}

export default Heroes;