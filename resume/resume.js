function sendData(){
    debugger;
    var formdata= document.forms.userform;
    var formdetails= new FormData(formdata);
    const gender=formdetails.get("gender");
    const name=document.getElementById('fname').value;
    const adrs =document.getElementById('faddrs').value;
    const mobn=document.getElementById('fmobno').value;
    const email=document.getElementById('fmail').value;
    const dob=document.getElementById("dob").value;
    const skills1=document.getElementById('fskill1').value;
    const skills2=document.getElementById('fskill2').value;
    const skills3=document.getElementById('fskill3').value;
    const skills4=document.getElementById('fskill4').value;
    const skills5=document.getElementById('fskill5').value;
    const tech1=document.getElementById('ftech1').value;
    const tech2=document.getElementById('ftech2').value;

    const quali1=document.getElementById('fquali1').value;
    const inst1=document.getElementById('finst1').value;
    const board1=document.getElementById('board1').value;
    const yop1=document.getElementById('yop1').value;
    const percent1=document.getElementById('percent1').value;

    const quali2=document.getElementById("fquali2").value;
    const inst2=document.getElementById('finst2').value;
   const board2=document.getElementById('fboard2').value
    const yop2=document.getElementById('yop2').value;
    const percent2=document.getElementById('percent2').value;

    const quali3=document.getElementById('fquali3').value;
    const inst3=document.getElementById('finst3').value;
    const board3=document.getElementById('fboard3').value;
    const yop3=document.getElementById("yop3").value;
    const percent3=document.getElementById('percent3').value;

    const quali4=document.getElementById('fquali4').value;
    const inst4=document.getElementById('finst4').value;
    const board4=document.getElementById('fboard3').value;
    const yop4=document.getElementById('yop4').value;
    const percent4=document.getElementById('percent4').value;

    const project1=document.getElementById('fprojects1').value;
    const project2=document.getElementById('fprojects2').value;
    const project3=document.getElementById('fprojects3').value;

    const hobby1=document.getElementById('fhobbies1').value;
    const hobby2=document.getElementById('fhobbies2').value;
    const hobby3=document.getElementById('fhobbies3').value;

 
    var resume={
        name:name,
        address:adrs,
        mobile:mobn,
        emailid:email,
        dob:dob,
        gender:gender,
        skills1:skills1,
        skills2:skills2,
        skills3:skills3,
        skills4:skills4,
        skills5:skills5,
        tech1:tech1,
        tech2:tech2,
        quali1:quali1,
        inst1:inst1,
        board1:board1,
        yop1:yop1,
        percent1:percent1,
        quali2:quali2,
        inst2:inst2,
        board2:board2,
        yop2:yop2,
        percent2:percent2,
        quali3:quali3,
        inst3:inst3,
        board3:board3,
        yop3:yop3,
        percent3:percent3,
        quali4:quali4,
        inst4:inst4,
        board4:board4,
        yop4:yop4,
        percent4:percent4,
        project1:project1,
        project2:project2,
        project3:project3,
        hobby1:hobby1,
        hobby2:hobby2,
        hobby3:hobby3
        
        };
    var arr=[];
    arr.push(resume);
    localStorage.setItem("resumedata",JSON.stringify(arr)); 
}
function showdata(){
    var keys=JSON.parse(localStorage.getItem("resumedata"));
    if(keys!=null){
        for(i=0;i<keys.length;i++)
        {
            s=keys[0];
            document.getElementById("fname").innerHTML=s.name;
            document.getElementById("faddress").innerHTML=s.address;
            document.getElementById("fmobno").innerHTML=s.mobile;
            document.getElementById("fmail").innerHTML=s.emailid;
            document.getElementById("dob").innerHTML=s.dob;
            document.getElementById("fskill1").innerHTML=s.skills1;
            document.getElementById("fskill2").innerHTML=s.skills2;
            document.getElementById("fskill3").innerHTML=s.skills3;
            document.getElementById("fskill4").innerHTML=s.skills4;
            document.getElementById("fskill5").innerHTML=s.skills5;
            document.getElementById("ftech1").innerHTML=s.tech1;
            document.getElementById("ftech2").innerHTML=s.tech2;
            document.getElementById("fquali1").innerHTML=s.quali1;
            document.getElementById("finst1").innerHTML=s.inst1;
            document.getElementById("board1").innerHTML=s.board1;
            document.getElementById("yop1").innerHTML=s.yop1;
            document.getElementById("percent1").innerHTML=s.percent1;
            document.getElementById("fquali2").innerHTML=s.quali2;
            document.getElementById("finst2").innerHTML=s.inst2;
            document.getElementById("fboard2").innerHTML=s.board2;
            document.getElementById("yop2").innerHTML=s.yop2;
            document.getElementById("percent2").innerHTML=s.percent2;
            document.getElementById("fquali3").innerHTML=s.quali3;
            document.getElementById("finst3").innerHTML=s.inst3;
            document.getElementById("fboard3").innerHTML=s.board3;
            document.getElementById("yop3").innerHTML=s.yop3;
            document.getElementById("percent3").innerHTML=s.percent3
            document.getElementById("fquali4").innerHTML=s.quali4;
            document.getElementById("finst4").innerHTML=s.inst4;
            document.getElementById("fboard4").innerHTML=s.board4;
            document.getElementById("yop4").innerHTML=s.yop4;
            document.getElementById("percent4").innerHTML=s.percent4;
            document.getElementById("fprojects1").innerHTML=s.project1;
            document.getElementById("fprojects2").innerHTML=s.project2;
            document.getElementById("fprojects3").innerHTML=s.project3;
            document.getElementById("fhobbies1").innerHTML=s.hobby1;
            document.getElementById("fhobbies2").innerHTML=s.hobby2;
            document.getElementById("fhobbies3").innerHTML=s.hobby3;
            document.getElementById("gender").innerHTML=s.gender;

 

            
            // document.write(s.name,"<br>");
            // document.write(s.address,"<br>");
            // document.write(s.mobile,"<br>");
            
        }
    }
}




















// function sendData(){
//     const name=document.getElementById('fname').value;
//     const adres =document.getElementById('faddrs').value;
//     const mobn=document.getElementById('fmobno').value;








//     localStorage.setItem("Name",name);
//     localStorage.setItem("addres",adres);
//     localStorage.setItem("mob.no",mobn);
// }