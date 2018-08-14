const apiKey = "X1-ZWz1gl3l1q9s7f_8nu8h";
const url = "https://www.zillow.com/webservice/GetRegionChildren.htm";

function getDataFromApi(userSearch, callback){
    const query = {
        "zwd-id": apiKey,
        state: userSearch
    };

    $.ajax({
        url: url
     });
}

function printResult(data) {
    console.log(data);
}

 function appInstance(){
     // run fucntions
    const search = "" 
    getDataFromApi();
 }

 $(appInstance);
