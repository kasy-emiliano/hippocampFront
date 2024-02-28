import { useState, useEffect } from 'react';
import { Link, useLocation} from 'react-router-dom';

import axios from '@/api/axios';

const RechercheCours = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idCategorie = queryParams.get('categorie') || "";
  const idTypeAcces = queryParams.get('TypesAcces') || "";
  const idTexte = queryParams.get('mot') || "";
 

  const [categorie, setCategorie] = useState(idCategorie);
  const [typesAcces, setTypesAcces] = useState(idTypeAcces);
  const [texte, setTexte] = useState(idTexte);
  const [searchResults, setSearchResults] = useState([]);

  const [demandes, setDemandes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // 3 columns * 2 rows

  const [userDetailsResponse, setUserDetailsResponse] = useState(null);


    


  useEffect(() => {
    // Effectuer une requête HTTP pour récupérer les détails de l'utilisateur et les paramètres de l'utilisateur
    axios.get("/RechercheFormation?categorie="+idCategorie+ "&TypesAcces="+ idTypeAcces+ "&mot="+ idTexte)
      .then((response) => {
        setDemandes(response.data.recherche);
        setUserDetailsResponse(response.data.f);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des détails de l\'utilisateur :', error);
      });
  }, []);

   // Calculate the indexes of the cards to display for the current page
   const indexOfLastCard = currentPage * cardsPerPage;
   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
   const currentCards = demandes.slice(indexOfFirstCard, indexOfLastCard);
 
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
   
   const handleSearchTermChange = (event) => {
     setTexte(event.target.value);
   };


   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.get("/RechercheFormation?categorie="+categorie+ "&TypesAcces="+ typesAcces+ "&mot="+ texte);

      window.location.href="/recherchecours?categorie="+categorie+ "&TypesAcces="+ typesAcces+ "&mot="+ texte;
      // //navigate("/quiz");
    }catch (error) {
        console.error(error);
  
      }
  };

  
  return (
    <>

        <form onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-center md:items-stretch justify-between mt-20">
            <div className="flex flex-wrap justify-center gap-4">
                <div style={{marginTop: "27px"}}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={texte}
                        onChange={handleSearchTermChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mr-6"/>
                    {/* Dropdown as a select element */}
                </div>
                {userDetailsResponse && (
                    <div>
                        <label htmlFor="categorie"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Catégorie
                        </label>
                        <select id="categorie" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
      focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={categorie}
                                onChange={(e) => setCategorie(e.target.value)}>
                            <option key={0} value={""}>Aucun Filtre</option>
                            {userDetailsResponse.allCategorie.map((categorie) => (
                                <option key={categorie.idCategorie}
                                        value={categorie.idCategorie}>{categorie.nom}</option>
                            ))}
                        </select>
                    </div>
                )}


                {userDetailsResponse && (
                    <div className="flex-1 md:ml-4">
                        <label htmlFor="acces" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Type Accès
                        </label>
                        <select id="acces" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={typesAcces}
                                onChange={(e) => setTypesAcces(e.target.value)}>
                            <option key={0} value={""}>Aucun Filtre</option>
                            {userDetailsResponse.allTypesAcces.map((typesAcces) => (
                                <option key={typesAcces.idTypesAcces} value={typesAcces.idTypesAcces}>
                                    {typesAcces.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <button type="submit" className="px-8 py-2 bg-blue-500 text-white rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                    </svg>
                </button>


            </div>
        </form>


        <div className="flex flex-wrap justify-center">
      {currentCards.map((demande) => (
        <div key={demande.id} className="w-full md:w-1/2 lg:w-1/3 px-4 py-6">
          <Link to={`/listcoursapprenant?idFormation=${demande.idFormation}`}>
            <div className="bg-white shadow-lg rounded-lg transition duration-300 transform hover:scale-105">
              <img
                src={`data:image/jpeg;base64,${demande.image.toString('base64')}`}
                alt="personne"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{demande.nomCategorie}</h2>
                <p className="text-gray-700">{demande.titre}</p>
                <div className="mt-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <div className="ml-2 text-sm text-gray-600">{demandes.prix ? Number(demandes.prix).toLocaleString('en-EN').replace('.') : ''} Ariary</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}

      {/* Pagination controls */}
      <div className="w-full flex justify-center mt-4">
        {Array.from({ length: Math.ceil(demandes.length / cardsPerPage) }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => paginate(page)}
            className={`mx-2 px-3 py-2 rounded-full ${
              page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
    </>
  );
};

export default RechercheCours;