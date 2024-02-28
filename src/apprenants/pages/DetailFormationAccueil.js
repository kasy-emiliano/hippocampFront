'use client';
import React from 'react';

import { Alert, Dropdown } from 'flowbite-react';

import axios from '@/api/axios';
import { useLocation ,Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { Rating } from 'primereact/rating';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Header from '@/components/Header';

import DetailZoom from '@/formateurs/pages/DetailZoom';
import ChapitreApprenant from '@/apprenants/pages/ChapitreApprenant';
import ZoomApprenant from '@/apprenants/pages/ZoomApprenant';
import QuizApprenant from '@/apprenants/pages/QuizApprenant';
import NavApprenant from '@/apprenants/components/NavApprenant';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';


const ListCoursApprenant = () => {
  
  const styles = {
    commentaireBloc: {
      backgroundColor: '#e0e0e0', // couleur de fond légèrement plus sombre
      borderRadius: '8px',
      padding: '10px',
      marginBottom: '10px',
      maxWidth: '600px', // ajustement de la largeur maximale du bloc de commentaire
    },
  }


  const style = {
    commentaireBloc: {
      backgroundColor: 'gray', // couleur de fond légèrement plus sombre
      borderRadius: '8px',
      padding: '10px',
      marginBottom: '10px',
      maxWidth: '600px', // ajustement de la largeur maximale du bloc de commentaire
    },
  }


  const [reponsesForComment, setReponsesForComment] = useState([]);

   
      

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idFormation = queryParams.get('idFormation');

    const [demandes, setDemandes] = useState([]);
    const [commentaires, setCommentaires] = useState([]);

    const [contentSelected, setContentSelected] = useState(null);
   
    const [Commentaire, setNouveauCommentaire] = useState("");
  
    const [activeTab, setActiveTab] = useState(0);
    const [note, setNombreEtoiles] = useState(0);
    
    const [ApprenantNote, setApprenantNote] = useState([]);
    const token = Cookies.get('token');
    const NombreCommentairesInitial = 5;
    const [nombreCommentairesAffiches, setNombreCommentairesAffiches] = useState(NombreCommentairesInitial);

    const [moyenne, setMoyenne] = useState(null);

    const handleAfficherPlus = () => {
      // Augmentez le nombre de commentaires affichés de 5
      setNombreCommentairesAffiches(nombreCommentairesAffiches+10);
    };
    
    const NombreRCommentairesInitial = 5;
    const [nombreRCommentairesAffiches, setNombreRCommentairesAffiches] = useState(NombreRCommentairesInitial);


    const handleRAfficherPlus = () => {
      // Augmentez le nombre de commentaires affichés de 5
      setNombreRCommentairesAffiches(nombreRCommentairesAffiches+10);
    };

     

    const queryParam = new URLSearchParams(location.search);
    const idCommentaire = queryParam.get('idCommentaire');

    const [reponsecommentaire, setReponsecommentaire] = useState("");
  
    const [showReplyForm, setShowReplyForm] = useState(null);
   



    const ContentDisplay = ({ content }) => {
        const createMarkup = () => {
          return { __html: content };
        };
    
        return <div dangerouslySetInnerHTML={createMarkup()} />;
      };


    useEffect(() => {
        // Effectuer une requête HTTP pour récupérer les détails de l'utilisateur et les paramètres de l'utilisateur
        axios.get(`MonFormation?idFormation=${idFormation}`)
          .then((response) => {
            setDemandes(response.data);
          })
          .catch((error) => {
            console.error('Erreur lors de la récupération des détails de l\'utilisateur :', error);
          });
          axios.get(`/LesCommentaires?idFormation=${idFormation}`)
          .then((response) => {
            setCommentaires(response.data);
          })
          .catch((error) => {
            console.error('Erreur lors de la récupération des commentaires :', error);
          });
          axios.get(`/moyenne?idFormation=${idFormation}`)
          .then((response) => {
            setMoyenne(response.data);
          })
          .catch((error) => {
            console.error('Erreur lors de la récupération des commentaires :', error);
          });
      
      }, []);

      
      const handleReplyButtonClick = (idCommentaire) => {
        console.log(idCommentaire);
        setShowReplyForm(idCommentaire);
        axios.get(`/LesReponsesCommentaires?idCommentaire=${idCommentaire}`)
          .then((response) => {
            console.log(response.data);
            setReponsesForComment( response.data);
          })
          .catch((error) => {
            console.error('Erreur lors de la récupération des commentaires :', error);
          });
      };
      

    
      const [selectedZoom, setSelectedZoom] = useState(null);

      const handleZoom = (zooms) => {
        setSelectedZoom(zooms);
      };

      

    
  
   // Fonction pour gérer l'envoi du commentaire
    

   


  

const handleFacebookShare = (formationId, titre) => {
    const currentUrl = window.location.href;
    
    // Créez l'URL de partage Facebook avec les informations appropriées
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(titre)}`;
    
    // Ouvrez une nouvelle fenêtre ou un nouvel onglet pour le partage Facebook
    window.open(facebookShareUrl, '_blank');
};
const handleLinkedInShare = (formationId, titre) => {
  const currentUrl = window.location.href;
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(titre)}`;
  window.open(linkedInShareUrl, '_blank');
};

const slid = {
   
   
 

  };

    return (

        <>
        
             <Header/>
<br></br>
<br></br>
<div className="relative">
  <div className="w-full md:w- lg:w-100 px- py-">
    {demandes.image && (
      <img
        src={`data:image/jpeg;base64,${demandes.image.toString('base64')}`}
        alt="personne"
        className="w-full h-64 object-cover rounded-t-lg"
      />
    )}
  </div>
  <div className="absolute bottom-8 left-0 w-full flex justify-center">
    <h1 style={{ color: 'Black', textAlign: 'center', fontWeight: 'bold', backgroundColor: 'rgba(255, 255, 255, 0.8)', transform: 'translateY(70%)' }} className="text-5xl font-medium w-full md:w-1/2 mr-auto">{demandes.titre}</h1>
  </div>
</div>
 <div className=" ">
 
    <div style={{marginLeft:'68%'}}>
  {moyenne !== null && (
    <div>
    <strong>Note Moyenne de cette formation</strong>
      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>
            {  parseFloat(moyenne) >= index + 1 ? ( // Utiliser Math.floor pour arrondir la moyenne à l'entier inférieur
              <FontAwesomeIcon icon={solidStar} style={{ color: 'gold' }} />
            ) : (
              <FontAwesomeIcon icon={regularStar} style={{ color: 'gold' }} />
            )}
          </span>
        ))}
      </div>
    </div>
  )}
</div>
</div>

   <br></br>
    
<div className="grid grid-cols- md:grid-cols-2 gap-" >
<div  className="full" style={{marginLeft:'15%'}}>
          
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg transition duration-300 ">
            
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 ">Formation</h2>
              <p className="text-gray-700"> <ContentDisplay content={demandes.resumer} /></p>
              <br></br>
              <p>Vous pouvez également voir ci-dessous les contenues pedagogique :</p>

              <div className="w-full flex justify-center lg:space-x-16">

<div className="w-full">

    <div className="flex justify-start mt-20">
        <Dropdown label="Voir un contenu pédagogique" dismissOnClick={false}>
        <div>
            <Dropdown.Item >
                <p onClick={() => setContentSelected('chapitre')}>Chapitre</p>
            </Dropdown.Item>

            <Dropdown.Item>
                <p onClick={() => setContentSelected('webinar')}>Webinar</p>
            </Dropdown.Item>
            
            <Dropdown.Item>
                <p onClick={() => setContentSelected('quiz')}>Quiz</p>
            </Dropdown.Item>
            </div>
        </Dropdown>
    </div>

    {contentSelected === 'chapitre' && (
        <div>
        <ChapitreApprenant/>
        </div>
      )}

      {contentSelected === 'webinar' && (
        <div>
        <ZoomApprenant/>
        </div>
      )}

      {contentSelected === 'quiz' && (
        <div>
        <QuizApprenant/>
        </div>
      )}

</div>

<div>
 
</div>

</div> 
 
            </div>
          </div>
        
          <div className="flex flex-col shadow-md sm:rounded-lg justify-between items-start p-4 mt-3">
            <nav className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 w-full" aria-label="Table navigation">
                     
                    <div className="overflow-x-auto">
                        <div className="">
                                                   
                             
                                     
                                         <h1>Formteur</h1>
                                        <div className="bg-white border border-gray-300 rounded-lg p-1">
                                          <img
                                            src="https://source.unsplash.com/random"
                                            alt="Avatar"
                                            className="w-20 h-20 rounded-full object-cover"
                                          />
                                       
                                        <h2 className="mt-4 text-xl font-semibold">{demandes?.monFormateur?.nom} {demandes?.monFormateur?.prenom}</h2>
                                        <h2 className="mt-4 text-xl font-semibold">{demandes?.monFormateur?.nomOrganisme}</h2>
                                        <p className="text-gray-500">{demandes?.monFormateur?.email}</p>
                                        <p className="text-gray-500">{demandes?.monFormateur?.numero}</p>
                                      </div>
                                         
                                   
                        </div>
                    </div>
                </nav>
    </div>
    
      </div>
        
        <div className="md:w-1/2 ml-auto" style={{marginRight:'15%'}}>
  <div className="bg-white border border-gray-300 shadow-lg rounded-lg transition duration-300">
 
  <div className="">
                    <div className="overflow-x-auto">
                        <div className="grid grid-cols-3 gap-3 text-sm text-left text-gray-500 dark:text-gray-400">

                            <div className="flex flex-col items-center mt-4">
                                <h2 className="text-l font-medium text-gray-500 dark:text-white">Durée</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className="flex space-x-4">
                                <p className="text-2xl font-medium text-green-500">
                                    {demandes.duree} {demandes.nomUnite}
                                    </p>
                                    
                                </div>
                            </div> 

                            <div className="col-span-3 border-b-2 border-gray-100"></div>

                            <div className="flex flex-col items-center mt-4">
                            <h2 className="text-l font-medium text-gray-500 dark:text-white">Mode</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                <p className="text-2xl font-medium text-green-500">{demandes.nomTypesAcces}</p>
                            </div>

                            
                            <div className="flex flex-col items-center mt-4">
                            <h2 className="text-l font-medium text-gray-500 dark:text-white">Langue</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                                    stroke="currentColor" className="w-6 h-6 text-blue-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 
                                5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 
                                10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 
                                18.023 0 01-3.827-5.802" />
                                </svg>
                                <p className="text-2xl font-medium text-green-500">{demandes.nomLangues}</p>
                                <br/>
                            </div>

                            <div className="flex flex-col items-center mt-4">
                            <h2 className="text-l font-medium text-gray-500 dark:text-white">Montant</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
                            stroke="currentColor" className="w-6 h-6 text-blue-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                            </svg>

                            <p className="text-2xl font-medium text-green-500">{demandes.prix ? Number(demandes.prix).toLocaleString('en-EN').replace('.') : ''} Ariary</p>
                            <br/>
                        </div>
<br/>
<button
                  className="flex items-center mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
                  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none  
                  dark:focus:ring-blue-800 "
      >
          <Link to={`/signin`}>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
          />
        </svg>
        Suivre formation
        </Link>
      </button>
                        </div>
                    </div>
                </div>
                </div>
                
                <div className="w-full md:w-1/6 flex justify-between"> 
    <div className="bg-white shadow-lg rounded-lg transition duration-100">
        <div className="p-2">
            <p className="text-xl font-bold mb-2">Partager </p>
            <div className="flex items-center"> 
                <div onClick={() => handleFacebookShare(demandes.idFormation, demandes.titre)} className="cursor-pointer bg-blue-500 text-white px-4 py-3 rounded-md mr-4">
                    <FontAwesomeIcon icon={faFacebookSquare} className="mr-1" />
                </div>
                <div onClick={() => handleLinkedInShare(demandes.idFormation, demandes.titre)} className="cursor-pointer bg-blue-500 text-white px-4 py-3 rounded-md">
                    <FontAwesomeIcon icon={faLinkedin} className="mr-1" />
                </div>
            </div>
        </div>
    </div>
</div>


</div>
</div>


<div className="flex flex-wrap" style={{marginLeft:'3%'}}>
  {/* Section des commentaires à droite */}
  <div className="flex-grow">
    <div>
      <br></br>
      <h2 style={{ color: 'navy', fontWeight: 'bold',marginLeft:'3%' }}>COMMENTAIRES :</h2>
      <ul className="text-left ml-10">
        {commentaires.slice(0, nombreCommentairesAffiches).map((commentaire) => (
          <li key={commentaire.idcommentaire} style={styles.commentaireBloc}>
            {commentaire.nomFormateur && commentaire.prenomFormateur && (
              <strong style={{ color: 'blue' }}>
                {commentaire.nomFormateur} {commentaire.prenomFormateur}
              </strong>
            )}
            {commentaire.nomApprenant && commentaire.prenomApprenant && (
              <strong style={{ color: 'blue' }}>
                {commentaire.nomApprenant} {commentaire.prenomApprenant}
              </strong>
            )}
            <br />
            {commentaire.commentaire}
            <br />
            <br />
            {commentaire.datecommentaire}
            <br />
            
            <button onClick={() => handleReplyButtonClick(commentaire.idCommentaire)}>Voir les reponses</button>
            {showReplyForm === commentaire.idCommentaire && (
      <form onSubmit={(e) => (e, commentaire.idCommentaire)}>
         
         <div>
      <ul className="text-left ml-10">  
        {reponsesForComment.slice(0, nombreRCommentairesAffiches).map((commentaire) => (
          <li key={commentaire.idCommentaire} style={style.commentaireBloc}>
            {commentaire.nomFormateur && commentaire.prenomFormateur && (
              <strong>{commentaire.nomFormateur} {commentaire.prenomFormateur}</strong>
            )}
            {commentaire.nomApprenant && commentaire.prenomApprenant && (
              <strong>{commentaire.nomApprenant} {commentaire.prenomApprenant}</strong>
            )}

            <br />
            {commentaire.reponsecommentaire}
            <br />
            {commentaire.datereponsecommentaire}
            <br />
          </li>
        ))}
        {reponsesForComment.length > nombreRCommentairesAffiches && (
        <button onClick={handleRAfficherPlus} style={{ fontWeight: 'bold' }}>
          Afficher plus de Reponses...
        </button>
      )}
      </ul>
    </div> 
      </form>
      
      

    )}
    
           </li>
        ))}
      </ul>
      <br />
      
      {commentaires.length > nombreCommentairesAffiches && (
        <button onClick={handleAfficherPlus} style={{ fontWeight: 'bold' }}>
          Afficher plus de commentaires...
        </button>
      )}
    </div>

   
  </div>

 
   
</div>

    
<br></br>
<br></br>
      <Footer/>
    </>
    );
};

export default ListCoursApprenant;