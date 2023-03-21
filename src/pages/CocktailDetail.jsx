
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchDataId } from '../redux/featuers/data/DataSlice';
import { Link, useParams } from 'react-router-dom';
import { Container } from '../components/home/Container';

function CocktailDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.data.data);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(FetchDataId({ id }))
                .then(() => setLoading(false))
                .catch(() => setLoading(false));
        }, 600);

        return () => {
            clearTimeout(timer);
        };
    }, [dispatch, id]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (loading) {
        return <img className='animation' src='https://i.pinimg.com/originals/a4/f2/cb/a4f2cb80ff2ae2772e80bf30e9d78d4c.gif' />;
    }

    const { strDrink, strDrinkThumb, strAlcoholic, strGlass, strCategory, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = data[0];
    const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
    const filteredIngredients = ingredients.filter(ingredient => ingredient)
    const ingredientList = filteredIngredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));

    return (
        <Container>
            <section className='detail'>
                <div className="prevBtn">
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                </div>
                <h5 className='top-title' >{strDrink}</h5>
                <div className="cocktail-content cocktail-detail">
                    <img src={strDrinkThumb} alt={strDrink} />
                    <div>
                        <p><span>Name:</span> {strDrink}</p>
                        <p><span>Category:</span> {strCategory}</p>
                        <p><span>Type:</span> {strAlcoholic}</p>
                        <p><span>Glass:</span> {strGlass}</p>
                        <p><span>Instructions:</span> {strInstructions}</p>
                        <ul>
                            <span>Ingredients:</span>
                            {ingredientList}
                        </ul>
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default CocktailDetail;