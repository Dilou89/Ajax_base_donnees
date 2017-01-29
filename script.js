$(document).ready(function(){
var client=0;
var value;
var infos = [];

$.ajax({
    type:'GET',
    url:"data.xml",
    dataType:'xml',
    success :function(xml){
              console.log("lien ok");
              
              $(xml).find('coord:first').children().each(function(){
                
                  var id = $(this).attr('id');
                  var nom = $(this).find('nom').text();
                  var prenom = $(this).find('prenom').text();
                  var city = $(this).find('city').text();
                  $('#coordonnees').append("nom :" + nom + " " + "prenom :" + prenom + " "+ "city:" + city);
               
                     
                
                       })
  

              }
                
                 
            })
 
         });            
                                                                
        