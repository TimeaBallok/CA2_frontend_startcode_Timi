import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";
//import facade from "../apiFacade.js";

function Coctails({setErrorMessage}) {

    const [coctail, setCoctail] = useState("Loading...")

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        facade.fetchData("coctail/getCoctail", data => setCoctail(data.drinks), setErrorMessage)
    }, [toggle])

    const fetchCoctail = () => {
        setToggle(!toggle);
    }

    return (
        <div className="container2">
            <button onClick={fetchCoctail}>Get a delicious Coctail</button>
            <br/><br/>
            <div>
            <img src={coctail[0].strDrinkThumb} alt="A delicious coctail" className="imgDetails"/>
            </div>
            <div>
            <h3>Coctail - {coctail[0].strDrink}</h3>
            </div>
            <div>
            <h4>Category: {coctail[0].strCategory}</h4>
            <h4>Type: {coctail[0].strAlcoholic}</h4>
            </div>

            <h4>Ingredients:</h4>
            <ul>
                <li>{coctail[0].strMeasure1} {coctail[0].strIngredient1}</li>
                <li>{coctail[0].strMeasure2} {coctail[0].strIngredient2}</li>
                <li>{coctail[0].strMeasure3} {coctail[0].strIngredient3}</li>
                <li>{coctail[0].strMeasure4} {coctail[0].strIngredient4}</li>
                <li>{coctail[0].strMeasure5} {coctail[0].strIngredient5}</li>
                <li>{coctail[0].strMeasure6} {coctail[0].strIngredient6}</li>
                <li>{coctail[0].strMeasure7} {coctail[0].strIngredient7}</li>
                <li>{coctail[0].strMeasure8} {coctail[0].strIngredient8}</li>
                <li>{coctail[0].strMeasure9} {coctail[0].strIngredient9}</li>
                <li>{coctail[0].strMeasure10} {coctail[0].strIngredient10}</li>
                <li>{coctail[0].strMeasure11} {coctail[0].strIngredient11}</li>
                <li>{coctail[0].strMeasure12} {coctail[0].strIngredient12}</li>
                <li>{coctail[0].strMeasure13} {coctail[0].strIngredient13}</li>
                <li>{coctail[0].strMeasure14} {coctail[0].strIngredient14}</li>
                <li>{coctail[0].strMeasure15} {coctail[0].strIngredient15}</li>
            </ul>

            <h4>Instructions: {coctail[0].strInstructions}</h4>

        </div>
    );
}

export default Coctails;