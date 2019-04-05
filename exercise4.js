function dataHandling2(input){
    input.splice (1,5, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/08/1989", "Pria", "SMA Internasional Metro");
    //console.log(dataHandling2(input[3]));
    
    switch(input[3].split("/")[1]){
        case "01" : console.log("January");break;
        case "02" : console.log("February");break;
        case "03" : console.log("Maret");break;
        case "04" : console.log("April");break;
        case "05" : console.log("Mei");break;
        case "06" : console.log("Juni");break;
        case "07" : console.log("Juli");break;
        case "08" : console.log("Agustus");break;
        case "09" : console.log("September");break;
        case "10" : console.log("Oktober");break;
        case "11" : console.log("November");break;
        case "12" : console.log("Desember"); break;
        default : console.log("Invalid Input");
    }
    var test = input[3].split("/");
    console.log(test);    
    console.log(input);
}

    


console.log(dataHandling2(["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]));