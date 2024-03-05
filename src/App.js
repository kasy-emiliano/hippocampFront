import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import '@/App.css';
 


import Layout from '@/pages/Layout';
import SignupChoice from '@/pages/SignupChoice';
import LandingPage from '@/pages/LandingPage';

import SignIn from '@/apprenants/pages/SignIn';
import SignUp from '@/apprenants/pages/SignUp';
import ProfilForm from '@/apprenants/pages/ProfilForm';
import CoursApprenant from '@/apprenants/pages/CoursApprenant';
import RechercheCours from '@/apprenants/pages/RechercheCours';
import ListCoursApprenant from '@/apprenants/pages/ListCoursApprenant';
import ListeFormationAcceuil from '@/apprenants/pages/ListeFormationAcceuil';
import DetailFormationAccueil from '@/apprenants/pages/DetailFormationAccueil';
import ChapitreApprenant from '@/apprenants/pages/ChapitreApprenant';
import QuizApprenant from '@/apprenants/pages/QuizApprenant';
import ZoomApprenant from '@/apprenants/pages/ZoomApprenant';
import SuivreCours from '@/apprenants/pages/SuivreCours';
import LessonApprenant from '@/apprenants/pages/LessonApprenant';
import ListQuizApprenant from '@/apprenants/pages/ListQuizApprenant';
import ListZoomApprenant from '@/apprenants/pages/ListZoomApprenant';
import DetailQuizApprenant from '@/apprenants/pages/DetailQuizApprenant';
import MesCoursApprenant from '@/apprenants/pages/MesCoursApprenant';
import NavExemple from '@/apprenants/pages/NavExemple';

import AdhesionForm from '@/formateurs/pages/AdhesionForm';

import PasswordReset from '@/apprenants/pages/PasswordReset';
import ForgetPassword from '@/apprenants/pages/ForgetPassword';
import InfoFormateur from '@/formateurs/pages/InfoFormateur';
import ReponseCommentaireForm from '@/formateurs/pages/ReponseCommentaireForm';
import SignUpForm from '@/formateurs/pages/SignUpForm';
import Dashboard from '@/admins/pages/Dashboard';
import SignInForm from '@/formateurs/pages/SignInForm';
import PasswordResetForm from '@/formateurs/pages/PasswordResetForm';
import ForgetPasswordForm from '@/formateurs/pages/ForgetPasswordForm';
import DashboardForm from '@/formateurs/pages/DashboardForm';
import ModifApprenant from '@/apprenants/pages/ModifApprenant';
import ModifPassword from '@/apprenants/pages/ModifPassword';
import ModifFormateur from '@/formateurs/pages/ModifFormateur';
import ModifPasswordForm from '@/formateurs/pages/ModifPasswordForm';
import Categorie from '@/admins/pages/Categorie';
import ValidFormation from '@/admins/pages/ValidFormation';
import ListFormateur from '@/admins/pages/ListFormateur';
import AjoutPublicite from '@/admins/pages/AjoutPublicite';
import DetailFormAdmin from '@/admins/pages/DetailFormAdmin';
import ChapitreAdmin from '@/admins/pages/ChapitreAdmin';
import ZoomAdmin from '@/admins/pages/ZoomAdmin';
import QuizAdmin from '@/admins/pages/QuizAdmin';
import LessonAdmin from '@/admins/pages/LessonAdmin';
import ListQuiz from '@/admins/pages/ListQuiz';
import ListApprenant from '@/admins/pages/ListApprenant';
import DetailFormateur from '@/admins/pages/DetailFormateur';
import ListFormation from '@/admins/pages/ListFormation';
import SigninAdmin from '@/admins/pages/SigninAdmin';
import ApprenantListA from '@/admins/pages/ApprenantListA';
import StatA from '@/admins/pages/StatA';
import StatAm from '@/admins/pages/StatAm';
import StatAmd from '@/admins/pages/StatAmd';

import StatF from '@/admins/pages/StatF';
import StatFm from '@/admins/pages/StatFm';
import StatFmd from '@/admins/pages/StatFmd';

import StatFo from '@/admins/pages/StatFo';
import StatFom from '@/admins/pages/StatFom';
import StatFomd from '@/admins/pages/StatFomd';

import Accueil from '@/Accueil';
import AjoutCat from '@/formateurs/pages/AjoutCat';
import Formations from '@/formateurs/pages/Formations';
import DetailFormation from '@/formateurs/pages/DetailFormation';
import DetailZoom from '@/formateurs/pages/DetailZoom';
import VoirListForm from '@/formateurs/pages/VoirListForm';
import ZoomForm from '@/formateurs/pages/ZoomForm';
import ModifierPhoto from '@/formateurs/pages/ModifierPhoto';

import Resumer from '@/formateurs/pages/Resumer';

import Modalform from '@/formateurs/pages/Modalform';

import Chapitre from '@/formateurs/pages/Chapitre';
import Zoom from '@/formateurs/pages/Zoom';
import Quiz from '@/formateurs/pages/Quiz';

import Dashboardapprenant from '@/apprenants/pages/Dashboardapprenant';


import Userprofil from '@/exemple/Userprofil';

import DashboardFormateur from '@/formateurs/pages/DashboardFormateur';

import NewFormation from '@/formateurs/pages/NewFormation';

import FormationList from '@/formateurs/pages/FormationList';

import Detailform from '@/formateurs/pages/Detailform';

import ApprenantList from '@/formateurs/pages/ApprenantList';

import Profilformateur from '@/formateurs/pages/Profilformateur';


import Video from '@/formateurs/pages/Video';

import Videochoice from '@/formateurs/pages/Videochoice';

import AddLesson from '@/formateurs/pages/AddLesson';

import AddQuiz from '@/formateurs/pages/AddQuiz';

import AddReponseQuiz from '@/formateurs/pages/AddReponseQuiz';

// Exemple root
import Navlink from '@/Navlink';
import AddQuizOld2 from '@/AddQuizOld2';
import CarnotCode from '@/CarnotCode';

import Error from '@/_utils/Error';
import HeadDash from '@/formateurs/components/HeadDash';
import Asideform from '@/formateurs/components/Asideform';






function App() {
  return (
    <BrowserRouter>
      <Routes>
         
      <Route element={<Layout/>}>
                <Route index element={<LandingPage/>}/>

                <Route path="/landingpage" element={<LandingPage/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/profilForm" element={<ProfilForm/>}/>
                <Route path="/adhesionform" element={<AdhesionForm/>}/>
                
           
           
                <Route path="/passwordreset" element={<PasswordReset/>}/>
                <Route path="/forgetpassword" element={<ForgetPassword/>}/>
                <Route path="/infoformateur" element={<InfoFormateur/>}/>
                <Route path="/signupform" element={<SignUpForm/>}/>
                <Route path="/signinform" element={<SignInForm/>}/>
                <Route path="/passwordresetform" element={<PasswordResetForm/>}/>
                <Route path="/forgetpasswordform" element={<ForgetPasswordForm/>}/>
                <Route path="/dashboardform" element={<DashboardForm/>}/>
                <Route path="/detailzoom" element={<DetailZoom/>}/>
           
              
               

                <Route path="/categorie" element={<Categorie/>}/>


                {/*Route dashboard admin*/}
                <Route path="" element={<Dashboard/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="validformation" element={<ValidFormation/>}/>
                    <Route path="listformateur" element={<ListFormateur/>}/>
                    <Route path="detailformadmin" element={<DetailFormAdmin/>}/>  
                    <Route path="listapprenant" element={<ListApprenant/>}/>
                    <Route path="detailformateur" element={<DetailFormateur/>}/>     
                    <Route path="listformation" element={<ListFormation/>}/>
                    <Route path="ajoutpublicite" element={<AjoutPublicite/>}/>
                    <Route path="/statA" element={<StatA/>}/>
                    <Route path="/statAm" element={<StatAm/>}/>
                    <Route path="/statAmd" element={<StatAmd/>}/>
                    <Route path="/statF" element={<StatF/>}/>
                    <Route path="/statFm" element={<StatFm/>}/>
                    <Route path="/statFmd" element={<StatFmd/>}/>
                    <Route path="/statFo" element={<StatFo/>}/>
                    <Route path="/statFom" element={<StatFom/>}/>
                    <Route path="/statFomd" element={<StatFomd/>}/>
                </Route>
                <Route path="signinadmin" element={<SigninAdmin/>}/>

                {/*Route dashboard formateur*/}
                <Route path="" element={<DashboardFormateur/>}>
                    <Route path="dashboardformateur" element={<DashboardFormateur/>}/>
                    <Route path="formationList" element={<FormationList />}/>
                    <Route path="newformation" element={<NewFormation />}/>
                    <Route path="detailform" element={<Detailform/>}/>
                    <Route path="apprenantlist" element={<ApprenantList/>}/>
                    <Route path="voirlistform" element={<VoirListForm/>}/>
                    <Route path="modifierphoto" element={<ModifierPhoto/>}/>
                    <Route path="profilformateur" element={<Profilformateur/>}/>
                </Route>

                {/*Route Formateur simple*/}
                <Route path="zoomform" element={<ZoomForm/>}/>


                 {/*Route Detailform admin*/}
                <Route path="/" element={<DetailFormAdmin/>}>
                    <Route path="/chapitreadmin" element={<ChapitreAdmin/>}/>
                    <Route path="/zoomadmin" element={<ZoomAdmin/>}/>
                    <Route path="/quizadmin" element={<QuizAdmin/>}/>
                </Route>

                   {/*Route Cours Apprenant*/}
                <Route path="" element={<Dashboardapprenant/>}>
                   <Route path="coursapprenant" element={<CoursApprenant/>}/>
                   <Route path="recherchecours" element={<RechercheCours/>}/>
                   <Route path="mescoursapprenant" element={<MesCoursApprenant/>}/>
                </Route>


                
        
        {/* Utilisez Route pour définir la route qui inclut le titre de la formation */}
        <Route path="/listcoursapprenant" element={<ListCoursApprenant />} />
        <Route path="/reponsecommentaireform" element={<ReponseCommentaireForm />} />
        <Route path="/listeFormationacceuil" element={<ListeFormationAcceuil />} />
        <Route path="/detailFormationaccueil" element={<DetailFormationAccueil />} />
       
      
                {/*<Route path="/listcoursapprenant" element={<ListCoursApprenant/>}/> */}



                <Route path="/chapitreapprenant" element={<ChapitreApprenant/>}/>
                <Route path="/zoomapprenant" element={<ZoomApprenant/>}/>
                <Route path="/quizapprenant" element={<QuizApprenant/>}/>

                <Route path="suivrecours" element={<SuivreCours/>}> 
                    <Route path="lessonapprenant" element={<LessonApprenant/>}/> 
                    <Route path="listzoomapprenant" element={<ListZoomApprenant/>}/>
              
             
                    <Route path="detailquizapprenant" element={<DetailQuizApprenant/>}/> 
        
                </Route>
                <Route path="/listquizapprenant" element={<ListQuizApprenant/>}/>
             

                {/**Exemple fotsiny */}
                <Route path="/navexemple" element={<NavExemple/>}/> 
                  
                   
       

              

                <Route path="/accueil" element={<Accueil/>}/>


                <Route path="/" element={<HeadDash/>}>
                    <Route path="/modifformateur" element={<ModifFormateur/>}/>
                    <Route path="/modifpasswordform" element={<ModifPasswordForm/>}/>
                    <Route path="/ajoutcat" element={<AjoutCat />}/>
                    <Route path="/formations" element={<Formations />}/>
                    <Route path="/detailformation" element={<DetailFormation/>}/>
                  
                </Route>

                
                <Route path="/userprofil" element={<Userprofil/>}/>
                    
                <Route path="/" element={<Dashboardapprenant/>}> 
                    <Route path="/modifapprenant" element={<ModifApprenant/>}/>
                    <Route path="/modifpassword" element={<ModifPassword/>}/>
                </Route>

             

               
                <Route path="/resumer" element={<Resumer/>}/>
                
                <Route path="/modalform" element={<Modalform/>}/>

                

                <Route path="/" element={<Asideform/>}>
                   
                </Route>

                {/** Element du Navbar formateur */}
               
                

                <Route path="/" element={<Detailform/>}>
                    <Route path="/chapitre" element={<Chapitre/>}/>
                    <Route path="/zoom" element={<Zoom/>}/>
                    <Route path="/quiz" element={<Quiz/>}/>
                </Route>


               
            
                <Route path="/video" element={<Video/>}/>

                <Route path="/videochoice" element={<Videochoice/>}/>

                <Route path="/addlesson" element={<AddLesson/>}/>

                <Route path="/addquiz" element={<AddQuiz/>}/>
                <Route path="/listquiz" element={<ListQuiz/>}/>

                <Route path="/signupchoice" element={<SignupChoice/>}/>

                <Route path="/addreponsequiz" element={<AddReponseQuiz/>}/>

                <Route path="/addquizold2" element={<AddQuizOld2/>}/>

                <Route path="/lessonadmin" element={<LessonAdmin/>}/>

                {/*Exemple de root*/}
                <Route path="/navlink" element={<Navlink/>}/>

                <Route path="/carnotcode" element={<CarnotCode/>}/>
                
                <Route path="*" element={<Error/>}/>
            </Route>


      </Routes>

    </BrowserRouter>  
  );
  
}

export default App;
