import { useEffect,  useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { starshipsListRequest } from "../../store/apiClient/apiCliient";
import Pagination from '../Pagination/Pagination';
import Table from "../table/Table";
import { filterObjects } from "../helpers/filterObjectFields";
import { TABLE_TITLES_STARSHIPS} from '../constants/generalConstants';

function Starships () {

    const dispatch = useDispatch();
    const starships = useSelector((state) => state.starWarsStore.starships);
    const totalItemsCount = useSelector((state) => state.starWarsStore.totalItemsCount);
    const currentPage = useSelector((state) => state.starWarsStore.currentPage);
    const isLoading = useSelector((state) => state.starWarsStore.isLoading);
    const error = useSelector((state) => state.starWarsStore.error);
    console.log(starships);

    useEffect(() => {
        dispatch(starshipsListRequest(currentPage))
    }, [dispatch, currentPage]);

    
    const starshipsPageChange = (page) => {
        const selectedPage = page.selected + 1;
        dispatch(starshipsListRequest(selectedPage));
        console.log(selectedPage,"test")
    };

    const filteredStarships = filterObjects(starships, TABLE_TITLES_STARSHIPS);
    console.log(filteredStarships,'my test')

    if (isLoading) {
        return <div>Loading....</div>
    }
    
    if (error) {
        return <div>ERROR: {error.message}</div>
    }
    

    return (
        <>
            <h3>Starships</h3>
            <Table titles={TABLE_TITLES_STARSHIPS} data={filteredStarships}/>
             <Pagination totalPages={Math.ceil(totalItemsCount/10)} handlePageChange={(data)=> starshipsPageChange(data)} currentPage={currentPage} /> 
        </>
    )
}

export default Starships;