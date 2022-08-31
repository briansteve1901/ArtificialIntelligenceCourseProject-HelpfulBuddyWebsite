const firebaseConfig = {
    apiKey: "AIzaSyAwyogiMAZfKiZ0AiJZJYGXUcctbtoGI6k",
    authDomain: "proyekai.firebaseapp.com",
    projectId: "proyekai",
    storageBucket: "proyekai.appspot.com",
    messagingSenderId: "605364798486",
    appId: "1:605364798486:web:b3f57bda203e3614e96137",
    measurementId: "G-DLBNH1N01N"
  };

firebase.initializeApp(firebaseConfig);
var firestore=firebase.firestore();

const submitBtn=document.querySelector('#Submit');

let userName=document.querySelector('#userFullName');
let userEmail=document.querySelector('#userEmail');
let userPhoneNumber= document.querySelector('#userPhoneNumber');
let userComments=document.querySelector('#userComments');
let error1=document.querySelector('#first-error-message');
let error2=document.querySelector('#second-error-message');
let error3=document.querySelector('#third-error-message');
let error4=document.querySelector('#fourth-error-message');

const db=firestore.collection("Submitter");

submitBtn.addEventListener('click',function(event){
    event.preventDefault();
    error1.innerText='';
    error2.innerText='';
    error3.innerText='';
    error4.innerText='';
    let userNameInput = userName.value;
    let userEmailInput = userEmail.value;
    let userPhoneNumberInput = userPhoneNumber.value;
    let userCommentsInput = userComments.value;

    if(userNameInput.length==0){
        error1.innerText='Name must be filled';
    }

    else if((!(userEmailInput.includes('@')))||userEmailInput.length==0){
        error2.innerText='Email must be filled and include @';
    }
    
    else if((!(userPhoneNumberInput.startsWith('08')))||
    userPhoneNumberInput.length==0||
    userPhoneNumberInput.length>14){
        error3.innerText='Phone number must be filled, the first digit must be 0, the second digit must be 8, and phone number length is no more than 14 digits';
    }

    else if(userCommentsInput.split(" ").length<5||userCommentsInput.split(" ").length>100){
        error4.innerText='Comments must be in the range of 5 words to 100 words';
    }
    else{
        db.doc().set({
            Name: userNameInput,
            Email:userEmailInput,
            PhoneNumber:userPhoneNumberInput,
            Comments: userCommentsInput
         }).then(function(){
             console.log("Data Submitted");
         });
         $("#userFullName").val("");
         $("#userEmail").val("");
         $("#userPhoneNumber").val("");
         $("#userComments").val("");
         $("#successAlert").removeClass("d-none");
    }
})

const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('You can speak now!!!');
}

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    read(text);
}

function read(text){
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    //1.Time
    if(text.includes('What time is it?')){
        speech.text = 'It is '+new Date().getHours() + ":" + new Date().getMinutes()+" right now";
        document.getElementById('result').innerHTML = speech.text;
    }
    //2.Songs
    //Alan Walker
    else if(text.includes('Play the spectre by Alan Walker.')){
        window.open('https://www.youtube.com/watch?v=wJnBTPUQS5A');
    }  
    else if(text.includes('Play faded by Alan Walker.')){
        window.open('https://www.youtube.com/watch?v=60ItHLz5WEA');
    }  
    else if(text.includes('Play sing me to sleep by Alan Walker.')){
        window.open('https://www.youtube.com/watch?v=2i2khp_npdE');
    }  
    else if(text.includes('Play unity by Alan Walker.')){
        window.open('https://www.youtube.com/watch?v=E3x_dLVTEuA');
    }  
    else if(text.includes('Play play by Alan Walker.')){
        window.open('https://www.youtube.com/watch?v=YQRHrco73g4');
    }  
    //Twice
    else if(text.includes('Play fancy by twice.')){
        window.open('https://www.youtube.com/watch?v=kOHB85vDuow');
    } 
    else if(text.includes('Play the feels by twice.')){
        window.open('https://www.youtube.com/watch?v=f5_wn8mexmM');
    } 
    else if(text.includes('Play heart shaker by twice.')){
        window.open('https://www.youtube.com/watch?v=rRzxEiBLQCA');
    } 
    else if(text.includes('Play yes or yes by twice.')){
        window.open('https://www.youtube.com/watch?v=mAKsZ26SabQ');
    } 
    else if(text.includes('Play likey by twice.')){
        window.open('https://www.youtube.com/watch?v=V2hlQkVJZhE');
    } 
    //Martin Garrix
    else if(text.includes('Play high on life by Martin Garrix.')){
        window.open('https://www.youtube.com/watch?v=Lpjcm1F8tY8');
    } 
    else if(text.includes('Play scared to be lonely by Martin Garrix.')){
        window.open('https://www.youtube.com/watch?v=e2vBLd5Egnk');
    } 
    else if(text.includes('Play there for you by Martin Garrix.')){
        window.open('https://www.youtube.com/watch?v=pNNMr5glICM');
    } 
    else if(text.includes('Play in the name of love by Martin Garrix.')){
        window.open('https://www.youtube.com/watch?v=RnBT9uUYb1w');
    } 
    else if(text.includes('Play burn out by Martin Garrix.')){
        window.open('https://www.youtube.com/watch?v=DylzGXE_ibU');
    }
    //BTS 
    else if(text.includes('Play DNA by BTS.')){
        window.open('https://www.youtube.com/watch?v=MBdVXkSdhwU');
    } 
    else if(text.includes('Play boy with LUV by BTS.')){
        window.open('https://www.youtube.com/watch?v=XsX3ATc3FbA');
    } 
    else if(text.includes('Play permission to dance by BTS.')){
        window.open('https://www.youtube.com/watch?v=CuklIb9d3fI');
    } 
    else if(text.includes('Play idol by BTS.')){
        window.open('https://www.youtube.com/watch?v=pBuZEGYXA6E');
    } 
    else if(text.includes('Play blood, sweat and tears by BTS.')){
        window.open('https://www.youtube.com/watch?v=hmE9f-TEutc');
    } 
    //Adele
    else if(text.includes('Play easy on me by Adele.')){
        window.open('https://www.youtube.com/watch?v=X-yIEMduRXk');
    } 
    else if(text.includes('Play hello by Adele.')){
        window.open('https://www.youtube.com/watch?v=YQHsXMglC9A');
    } 
    else if(text.includes('Play Oh my God by Adele.')){
        window.open('https://www.youtube.com/watch?v=niG3YMU6jFk');
    } 
    else if(text.includes('Play when we were young by Adele.')){
        window.open('https://www.youtube.com/watch?v=a1IuJLebHgM');
    } 
    else if(text.includes('Play Someone Like You by Adele.')){
        window.open('https://www.youtube.com/watch?v=hLQl3WQQoQ0');
    } 
    //Ardhito Pramono
    else if(text.includes('Play Plaza Ave')){
        window.open('https://www.youtube.com/watch?v=21TvQsAjkUI');
    } 
    else if(text.includes('Play bitter love')){
        window.open('https://www.youtube.com/watch?v=lbYc76YluJQ');
    } 
    else if(text.includes('Play 925')){
        window.open('https://www.youtube.com/watch?v=wCiUm5XJ_LY');
    } 
    else if(text.includes('Play fine today')){
        window.open('https://www.youtube.com/watch?v=IUDG7ok7dVk');
    } 
    //Bruno Mars
    else if(text.includes('Play the lazy song by Bruno Mars.')){
        window.open('https://www.youtube.com/watch?v=fLexgOxsZu0');
    } 
    else if(text.includes('Play when I was your man by Bruno Mars.')){
        window.open('https://www.youtube.com/watch?v=ekzHIouo8Q4');
    } 
    else if(text.includes('Play it will rain by Bruno Mars.')){
        window.open('https://www.youtube.com/watch?v=W-w3WfgpcGg');
    } 
    else if(text.includes('Play just the way you are by Bruno Mars.')){
        window.open('https://www.youtube.com/watch?v=LjhCEhWiKXk');
    } 
    else if(text.includes('Play grenade by Bruno Mars.')){
        window.open('https://www.youtube.com/watch?v=SR6iYWJxHqs');
    } 
    //Maroon 5
    else if(text.includes('Play sugar by Maroon 5.')){
        window.open('https://www.youtube.com/watch?v=09R8_2nJtjg');
    } 
    else if(text.includes('Play payphone by Maroon 5.')){
        window.open('https://www.youtube.com/watch?v=KRaWnd3LJfs');
    } 
    else if(text.includes('Play memories by Maroon 5.')){
        window.open('https://www.youtube.com/watch?v=SlPhMPnQ58k');
    } 
    else if(text.includes('Play animals by Maroon 5.')){
        window.open('https://www.youtube.com/watch?v=qpgTC9MDx1o');
    } 
    else if(text.includes('Play maps by Maroon 5.')){
        window.open('https://www.youtube.com/watch?v=Y7ix6RITXM0');
    } 
    //The Beatles
    else if(text.includes('Play, let it be by The Beatles.')){
        window.open('https://www.youtube.com/watch?v=QDYfEBY9NM4');
    } 
    else if(text.includes('Play yesterday by The Beatles.')){
        window.open('https://www.youtube.com/watch?v=wXTJBr9tt8Q');
    } 
    else if(text.includes('Play help by The Beatles.')){
        window.open('https://www.youtube.com/watch?v=2Q_ZzBGPdqE');
    } 
    else if(text.includes('Play come together by The Beatles.')){
        window.open('https://www.youtube.com/watch?v=45cYwDMibGo');
    } 
    else if(text.includes('Play girl by The Beatles.')){
        window.open('https://www.youtube.com/watch?v=-8l3ntDR_lI');
    } 
    else if(text.includes('Play Michelle by The Beatles.')){
        window.open('https://www.youtube.com/watch?v=WoBLi5eE-wY');
    }  
    //Blackpink
    else if(text.includes('Play kill this love by black pink.')){
        window.open('https://www.youtube.com/watch?v=2S24-y0Ij3Y');
    } 
    else if(text.includes('Play how you like that by black pink.')){
        window.open('https://www.youtube.com/watch?v=ioNng23DkIM');
    } 
    else if(text.includes('Play whistle by BLACKPINK.')){
        window.open('https://www.youtube.com/watch?v=dISNgvVpWlo');
    } 
    else if(text.includes('Play lovesick girls by black pink.')){
        window.open('https://www.youtube.com/watch?v=dyRsYk0LyA8');
    } 
    else if(text.includes('Play ice cream by black pink.')){
        window.open('https://www.youtube.com/watch?v=vRXZj0DzXIA');
    } 
    //Norah Jones
    else if(text.includes('Play it was you by Norah Jones.')){
        window.open('https://www.youtube.com/watch?v=JrD2OUQS8FA');
    }  
    else if(text.includes('Play after the fall by Norah Jones.')){
        window.open('https://www.youtube.com/watch?v=hFEl5wCt_k4');
    }  
    else if(text.includes('Play say goodbye by Norah Jones')){
        window.open('https://www.youtube.com/watch?v=Tposx9_DNgo');
    }  
    else if(text.includes('Play wonderful time for love by Norah Jones.')){
        window.open('https://www.youtube.com/watch?v=v1cvjzWpcNI');
    }   
    //Phil Collins
    else if(text.includes('Play another day in Paradise by Phil Collins.')){
        window.open('https://www.youtube.com/watch?v=Qt2mbGP6vFI');
    }  
    else if(text.includes('Play you will be in my heart by Phil Collins.')){
        window.open('https://www.youtube.com/watch?v=w0ZHlp6atUQ');
    }  
    else if(text.includes('Play true colors by Phil Collins.')){
        window.open('https://www.youtube.com/watch?v=2FMtxACKlYM');
    }  
    //Kenny G.
    else if(text.includes('Play the moment by Kenny G.')){
        window.open('https://www.youtube.com/watch?v=447yaU_4DF8');
    }  
    else if(text.includes('Play going home by Kenny G.')){
        window.open('https://www.youtube.com/watch?v=YZL_r3uUdD4');
    }  
    else if(text.includes('Play songbird by Kenny G.')){
        window.open('https://www.youtube.com/watch?v=QN2RnjFHmNY');
    }  
    else if(text.includes('Play silhouette by Kenny G.')){
        window.open('https://www.youtube.com/watch?v=VLn7iVQyMOo');
    }
    window.speechSynthesis.speak(speech);
    console.log(speech.text);
}