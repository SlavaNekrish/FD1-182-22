var countrysH={};

function addCountry(countryName,capitalName) {
    countrysH[countryName]=capitalName;
}

function listCountrys() {
    var res="";
    for ( var CN in countrysH )
        res+='\n'+getCountryInfo(CN);
    return res;
}

function getCountryInfo(countryName) {
    if ( countryName in countrysH )
        return 'страна: ' + countryName + ' столица: ' + countrysH[countryName] ;
    else
        return 'нет информации о стране ' + countryName + '!' ;
}

function deleteCountry(countryName) {
        delete countrysH[countryName];
    }



