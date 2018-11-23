function btnValider_onclick()  //mettre la fonction dans un IF tester une fonction à la fois
{
   alert(verifierEntreDixTrente(document.getElementById("btnValider").value));
}

function validerNAS( Chaine )  // numéro d'assurance social 418 789 123
{
   return /^[0-9]{3} [0-9]{3} [0-9]{3}$/.test(Chaine);
}

function validerTel( Chaine )  // au format (418) 876-8373  un numéro ça change
{
   return /^<(418)> [0-9]{3}|-[0-9]{4}$/.test(Chaine);
}
function validerCar( Chaine ) // des chaînes de caractères alphabétiques majuscule et minuscule et accepte le trait d'union pas obligatoire
{
   return /^[A-Z]|-?[a-z]|$/.test(Chaine);
}

function validerNo( Chaine )   // un chiffre peut etre 0 5 25 200 etc..
{
    /^[0-9]+<0>+$|<5>+$/.test(Chaine);
}

function verifierEntreDixTrente( Chaine ) //un chiffre entre 10 et 30
{
   /^[10-30]{1}$/.test(Chaine);
}

function verifierEntreUnVingt( Chaine ) //un chiffre entre 1 et 20
{
   /^[1-20]{1}$/.test(Chaine);
}