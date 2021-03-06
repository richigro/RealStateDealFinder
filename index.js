const apiKey = "X1-ZWz1gl3l1q9s7f_8nu8h";
const zillowUrl = "https://www.zillow.com/webservice/GetRegionChildren.htm";
const corsProxy = "https://cors-anywhere.herokuapp.com/";
const corsEnabledUrl = `${corsProxy}${zillowUrl}`;
console.log(corsEnabledUrl);

function setHeader(xhrObj){
    xhr.setRequestHeader("Origin", `${zillowUrl}`);
}


function getDataFromApi(userSearch, callback){
    $.ajax({
        type: "GET",
        beforeSend: setHeader(),
        url: corsEnabledUrl,
        data: `{'zwa-id': ${apiKey}, state: ${userSearch}, Limit-warning : ${true} }`, 
        dataType: "xml",
        success: callback(data),
        error: callback(data)
    });
}

function printResult(data) {
    let parsedData = xml2json(data);
    console.log(parsedData);
}

 function appInstance(){
     // run fucntions
    const search = $(".js-input").val();
    $(".js-input").val();
    getDataFromApi(search, printResult);
 }

 $(appInstance);
