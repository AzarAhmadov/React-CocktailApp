import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FetchData } from '../../redux/featuers/data/DataSlice';


export const CocktailList = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.data);
    const isLoading = useSelector((state) => state.data.isLoading);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(FetchData());
    }, [dispatch]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(isLoading);
        }, 600);

        return () => {
            clearTimeout(timer);
        };

    }, [isLoading]);

    if (loading) {
        return <img className='animation' src='https://i.pinimg.com/originals/a4/f2/cb/a4f2cb80ff2ae2772e80bf30e9d78d4c.gif' />;
    }

    if (!data) {
        return <p className='not'>No Cocktails matched your search criteria...</p>;
    }

    return (
        <section id='cocktail'>
            <div className="row">
                {
                    data.map((el) => {
                        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = el
                        return (
                            <div key={idDrink}>
                                <div className="cocktail-content">
                                    <img src={strDrinkThumb} alt="" />
                                    <h5>{strDrink}</h5>
                                    <h4>{strGlass}</h4>
                                    <p>#{strAlcoholic}</p>
                                </div>
                                <Link to={`/cocktail/${idDrink}`}>
                                    Details
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}