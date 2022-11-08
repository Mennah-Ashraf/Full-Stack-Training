const getHoroscope = function(){
    // get valus days, month, year
    let day = Number(document.getElementById('day').value);
    let month = Number(document.getElementById("month").value);
    let year = Number(document.getElementById("year").value);

    //validate day, month, year
    if(validateDate(day,month,year)){
        //get correct horoscope
        let horoscopeName = getHoroscopeName(day,month);
        //disply horosocpe
        displayHoroscopeName(horoscopeName) 
    }
    else{
        //display error if exists
        document.getElementById("result").innerHTML = "<strong style='color:red'>Enter valid date</strong>"
    }
    
    
}

const validateDate = function(day, month, year){
    if(isNaN(day) || isNaN(month) || isNaN(year))
        return false
    
    if((day<1 || day>31) || (month<1 || month>12) || (year<1900))
        return false
    
    if((day>30)&& (month==4 || month==6 || month==9 || month==11))
        return false;

    if( day>29&& month==2)
        return false;
    
    if(day>28 && month==2 && year%4 !=0)
        return false;
    
    return true;
}

const getHoroscopeName = (day, month)=>{
    if (month == 1&& day >= 20 || month == 2 && day <= 18)
        return "Aquarius" 

    if (month == 2&& birthday >= 19 || month == 3&& day <= 20)
        return "Pisces"

    if (month == 3&& day >= 21 || month == 4 && day <= 19)
        return "Aries"

    if (month == 4&& day >= 20|| month == 5 && day <= 20)
        return "Taurus"

    if (month == 5&& day >= 21 || month == 6 && day <= 20)
        return "Gemini"

    if (month == 6&& day >= 21 || month == 7&& day <= 22)
        return "Cancer"

    if (month == 7&& day >= 23 || month == 8 && day <= 22)
        return "Leo"

    if (month == 8 && day >= 23 || month == 9 && day <= 22)
        return "Virgo"

    if (month == 9&& day >= 23 || month == 10&& day <= 22)
        return "Libra"

    if (month == 10 && day >= 23|| month == 11 && day <= 21)
        return "Scorpio"

    if (month == 11 && day >= 22 || month == 12 && day <= 21)
        return "Sagittarius"

    if(month == 12 && day >= 22 || month == 1 && day <= 19)
        return "Capricorn"
    
}

const displayHoroscopeName = (name)=>{
    document.getElementById("result").innerHTML = "<strong style='color:green'>"+name+"</strong>"
}