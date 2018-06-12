// commentaire
function recupere_saisie(_premier_champ, _deuxieme_champ)
{
    
    var i;
    
    var valeur_du_champ1 = document.getElementById(_premier_champ);
    var valeur_du_champ2 = document.getElementById(_deuxieme_champ);
    
    // affiche en concatenation les champs avec leur 
    alert(valeur_du_champ1.charCodeAt(i) + valeur_du_champ2.charCodeAt(i));
    
}

// fonction qui crée une liste(tableau) et creer une variable temporaire qui contient la saisie utilisateur 
function calculSigne()
{
    
    // tableau avec tous les signes (respecter l'ordre chronologique 
    signes = ["", "Verseau","Poisson","Belier","Taureau","Gémeaux","Cancer","Lion","Vierge","Balance","Scorpion","Sagittaire","Capricorne"];
    
    // variable temporaire pour stocker la valeur du mois,jour,annee choisis , comparer par la suite avec le tableau signes
    temp = document.getElementById('anniversaire_utilisateur').value;
  
     
    // i doit etre inferieur a la longueur de signes 
    for( var i = 0 ; i < signes.length  ; i++ )
    {
        
       // mets en lien la saisie et le tableau des signes
       if(i == temp)
       {
           
        // récupère la valeur du signes et du jour saisie , puis l'affiche dans le champ_utilisateur (énoncé afficher le signe et le jour )
        document.getElementById('anniversaire_utilisateur').value = signes[i] + temp;// syntaxe resultat dans champ 
           
        document.getElementById("anniversaire_utilisateur").getAttribute("readonly");    
           
        // affichage du signes en correspondant au choix du mois !
        alert(signes[i]);// syntaxe messagebox
        
        
       }
    
    }    
    
}

function calcul_pseudo(_nom_utilisateur,_prenom_utilisateur,_anniversaire_utilisateur)
{
    
    anniversaire_utilisateur = _anniversaire_utilisateur;
    prenom_utilisateur = _prenom_utilisateur;
    nom_utilisateur = _nom_utilisateur;
    
    truc = anniversaire_utilisateur.value;
    
    if(prenom_utilisateur.length > 0 && nom_utilisateur.value > 0 && truc > 0)
    {
        
        
        
    }
    
    calculsigne.value 
 
 }

function affiche_pseudo()
{
    
    alert(truc+champ_utilisateur.charCodeAt(i));// affiche les deux variables 
    
}

