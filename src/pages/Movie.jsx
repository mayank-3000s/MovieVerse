import { useLoaderData, useNavigate } from "react-router-dom"
import { Card } from "../components/UI/Card";

export const Movie = ()=>{
    const apiData  = useLoaderData();
    console.log(apiData);
    const navigate = useNavigate();

    const HandleSubmit = (e)=>{
        e.preventDefault();
        let searchValue = e.target.search.value.trim();
        if (searchValue.length > 0) {
            searchValue = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
        }
        if (searchValue) {
            navigate(`/movie?q=${searchValue}`);
        }
        
    }
    return(
        <>
            <form onSubmit={HandleSubmit} className="h-[6rem] flex items-center justify-center mb-6 bg-gray-100">
                <input type="text"
                name="search"
                placeholder="Search movie or series name..."
                className="w-80 px-4 py-2 rounded-l-lg border-0 border-gray-700 focus:outline-none  bg-gray-800 text-white" />
                <button type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-r-lg text-white transition-all duration-300"
                >
                Search
                </button>
            </form>
            {apiData?.Search?.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-[5rem]">
                    {apiData.Search.map((movie) => (
                        <Card key={movie.imdbID} movie={movie} />
                    ))}
                </ul>
      ) : (
        <p className="text-center text-gray-400 text-lg">No movies found 😢</p>
      )}
        </>
    )
}