import { useEffect,  useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import { filmsListRequest } from "../../store/apiClient/apiCliient";
import Table from "../table/Table";
import { filterObjects } from "../helpers/filterObjectFields";
import { TABLE_TITLES_FILMS, TABLE_FILM_FIELDS} from '../constants/generalConstants';

function Films () {
    const dispatch = useDispatch();
    const films = useSelector((state) => state.starWarsStore.films);
    const totalItemsCount = useSelector((state) => state.starWarsStore.totalItemsCount);
    const currentPage = useSelector((state) => state.starWarsStore.currentPage);
    const isLoading = useSelector((state) => state.starWarsStore.isLoading);
    const error = useSelector((state) => state.starWarsStore.error);
    console.log(films);

    useEffect(() => {
        dispatch(filmsListRequest(currentPage))
    }, [dispatch, currentPage]);

    const filmsPageChange = (page) => {
        const selectedPage = page.selected + 1;
        dispatch(filmsListRequest(selectedPage));
        console.log(selectedPage, "test");
      };

    if (isLoading) {
        return <div>Loading....</div>
    }
    
    if (error) {
        return <div>ERROR: {error.message}</div>
    }

    const filteredFilms = filterObjects(films, TABLE_FILM_FIELDS);
    console.log(filteredFilms,'my test')

    return (
        <>
            <h3>Films</h3>
            <Table titles={TABLE_TITLES_FILMS} data={filteredFilms}/>
            <Pagination totalPages={Math.ceil(totalItemsCount/10)} handlePageChange={(data)=> filmsPageChange(data)} currentPage={currentPage} /> 
        </>
    )
}

export default Films