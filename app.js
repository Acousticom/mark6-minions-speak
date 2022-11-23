var btnTranslate = document.querySelector('#btn-translate')
var txtInput = document.querySelector('#txt-input')
var outputDiv = document.querySelector("#output")

var url ="https://api.funtranslations.com/translate/minion.json"

function getTranslationurl(text){
    return url + '?'+ "text="+ text
}

function errorhandler(error)
{
    console.log("error occured", error)
    alert("something went wrong!!! please try after sometimes")
}

function clickhandler(){
    // outputDiv.innerText = txtInput.value    
    // taking input 
    var inputText = txtInput.value;
    
    // calling server for processing 
    fetch(getTranslationurl(inputText))
    .then(response => response.json())
    .then(json=> {
        var translatedText = json.contents.translated;
        outputDiv.innerText= translatedText;
    })
    .catch(errorhandler)
}

btnTranslate.addEventListener("click",clickhandler)