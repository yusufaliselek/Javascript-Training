// Demo : Functions



var hesapA = {  //ObjectLiteral
    ad : "Sena Turan",
    hesapNo : "12345678",
    bakiye : 2000,
    ekHesap : 1000
}

var hesapB = {
    ad : "Emel Turan",
    hesapNo : "12346548",
    bakiye : 3000,
    ekHesap : 2000
}

function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);

    if(hesap.bakiye>=miktar){
        hesap.bakiye=hesap.bakiye-miktar;
        console.log("Paranızı alabilirsiniz.")
    }else{
        var toplam = hesap.bakiye+hesap.ekHesap;

        if(toplam>=miktar){
            if(confirm("Ek hesabınızı kullanmak ister misiniz?")){
                console.log("Paranızı alabilirsiniz");
                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekhesap = hesap.ekHesap - ekhesap;
            }else{
                console.log(`${hesap.hesapNo} nolu ana hesabınızda ${miktar} TL bulunmamaktadır.`);
            }
        }else{
            console.log("Üzgünüz, bakiye yetersiz.");
        }
    }
}

paraCek(hesapA,2000);
paraCek(hesapA,1000);
// paraCek(hesapB,2000);