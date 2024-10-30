
// teste si les champs du formulaire sont corrects et :
// - si ils le sont, retourne 'true'
// - sinon, affiche le message d'erreur adéquat dans
//   l'emplacement prévu à cet effet, et retourne 'false'
function checkform() {
    let valeur2 =document.getElementById("pass1").value
    let valeur=document.getElementById("log").value
    if((valeur.length < 3)||(valeur2.length < 4)||(valeur2 != document.getElementById("pass2").value)){
        document.getElementById("erreur").style="visibility: visible"
        let x=""
        if(valeur.length < 3) x= "Login petit"+"  "
        if(valeur2.length < 4) x+="Mdp petit"+"   "
          if(valeur2 != document.getElementById("pass2").value) x+="Pas le meme mdp"
          errormsg(x)
        return false
    };
    
  return true
}

// efface le contenu de l'élément où on affiche
// les messages d'erreur et cache cet élément
function resetform() {
     document.getElementById("erreur").innerHTML=""
 document.getElementById("erreur").style="visibility: hidden"
}

// écrit 'msg' dans l'élément où on affiche
// les messages d'erreur et montre cet élément
function errormsg(msg) { 
document.getElementById("erreur").innerHTML = msg
}