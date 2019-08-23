function tambah(){
    var angkaSatu = document.querySelector("#angka1").value;
    var angkaDua = document.querySelector("#angka2").value;
    var hasilAngka  = Number (angkaSatu) + Number (angkaDua);
    document.querySelector("#hasil").innerHTML = hasilAngka;  
}

function kurang(){
    var angkaSatu = document.querySelector("#angka1").value;
    var angkaDua = document.querySelector("#angka2").value;
    var hasilAngka  = Number (angkaSatu) - Number (angkaDua);
    document.querySelector("#hasil").innerHTML = hasilAngka;  
 }

function kali(){
    var angkaSatu = document.querySelector("#angka1").value;
    var angkaDua = document.querySelector("#angka2").value;        
    var hasilAngka  = Number (angkaSatu) * Number (angkaDua);
    document.querySelector("#hasil").innerHTML = hasilAngka;  
 }

function bagi(){
    var angkaSatu = document.querySelector("#angka1").value;
    var angkaDua = document.querySelector("#angka2").value;
    var hasilAngka  = Number (angkaSatu) / Number (angkaDua);
    document.querySelector("#hasil").innerHTML = hasilAngka;  
}

function modulo(){
    var angkaSatu = document.querySelector("#angka1").value;
    var angkaDua = document.querySelector("#angka2").value;
    var hasilAngka  = Number (angkaSatu) % Number (angkaDua);
    document.querySelector("#hasil").innerHTML = hasilAngka;  
    }
    
    
        