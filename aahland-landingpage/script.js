
let logoField = document.getElementById("logoField");
let textLogo = document.getElementById("textLogo");
let animationLogo = document.getElementById("animationLogo");
let nav = document.getElementById("nav");
let cv = document.getElementById("cv");
let portfolio = document.getElementById("portfolio");
let about = document.getElementById("about");



textLogo.addEventListener("click", function(){
    let cv = document.getElementById("cv");
    let portfolio = document.getElementById("portfolio");
    let about = document.getElementById("about");
    animationLogo.remove();
    textLogo.remove();

    cv.innerHTML = "<button id='cvBtn'>Experiences</button>";
    portfolio.innerHTML = "<button id='portfolioBtn'>Portfolio</button>";
    about.innerHTML = "<button id='aboutBtn'>About</button>";
    buildCV();
    buildPortfolio();
    buildAbout();
    

})

//functions for eventlistener on navbar buttons//

function buildCV(){
    cvBtn.addEventListener("click", function(){
        let content = document.getElementById("dynamicContent");
        nav.remove();
        console.log("cv clicked");

        let cvHeader = document.createElement("div");
        content.appendChild(cvHeader);
        cvHeader.id = "cvHeader";
        cvHeader.innerHTML = "<h1>ANTON </br> ÅHLANDER</h1>";
        let image = document.createElement("img");
        cvHeader.appendChild(image);
        image.id = "image";
        image.src = "anton.fb.jpg"
        let git = document.createElement("a");
        cvHeader.appendChild(git);
        git.id = "gitlink";
        git.innerHTML = "github.com/aahland";
        let mail = document.createElement("a");
        cvHeader.appendChild(mail);
        mail.id = "mail";
        mail.innerHTML = "ahlandera@hotmail.com";
        let phone = document.createElement("a");
        cvHeader.appendChild(phone);
        phone.id = "phone";
        phone.innerHTML = "+46709748277";
        let print = document.createElement("img");
        cvHeader.appendChild(print);
        print.id = "printBtn";
        print.src = "printBtn.png";
        printBtn.addEventListener("click",function(){
            //bygg om sidan för att passa utskrift, kanske lättast att bara byta content mot en bild anpassad för utskrift.
            content.remove();
            let printable = document.createElement("img");
            logoField.appendChild(printable);
            printable.id = "printableCV";
            printable.src = "printCV.jpg";
        })

        let cvAside = document.createElement("div");
        content.appendChild(cvAside);
        cvAside.id = "cvAside";
        cvAside.innerHTML = "<div id='skillsDiv'><h3 id='skills'>SKILLS</h3>";
        cvAside.innerHTML += "<ul id='skillsList'><li>HTML 5</li><li>CSS 3</li></ul>";
        cvAside.innerHTML += "<ul id= 'skillsList2'><li>JavaScript</li><li>Photoshop</li></ul>";
        cvAside.innerHTML += "<ul id='skillsList3'><li>Illustrator</li></ul>";
        cvAside.innerHTML += "<div id='outOfFive'><div id='circle'></div><div id='circle2'></div><div id='circle3'></div><div id='circle4'></div><div id='circle5'></div></div>";
        cvAside.innerHTML += "<div id='outOfFive2'><div id='circ'></div><div id='circ2'></div><div id='circ3'></div><div id='circ4'></div><div id='circ5'></div></div>";
        cvAside.innerHTML += "<div id='outOfFive3'><div id='cir'></div><div id='cir2'></div><div id='cir3'></div><div id='cir4'></div><div id='cir5'></div></div>";
        cvAside.innerHTML += "<div id='outOfFive4'><div id='ci'></div><div id='ci2'></div><div id='ci3'></div><div id='ci4'></div><div id='ci5'></div></div>";
        cvAside.innerHTML += "<div id='outOfFive5'><div id='c'></div><div id='c2'></div><div id='c3'></div><div id='c4'></div><div id='c5'></div></div></div>";
        cvAside.innerHTML += "<div id='langDiv'><h3 id='language'>LANGUAGES</h3>";
        cvAside.innerHTML += "<ul id='languageList'><li>Swedish</li><li>English</li><li>Spanish</li></ul></div>"

        


        let cvMain = document.createElement("div");
        content.appendChild(cvMain);
        cvMain.id = "cvMain";
        let experienceHeader = document.createElement("h2");
        cvMain.appendChild(experienceHeader);
        experienceHeader.id = "exHeader";
        let educationHeader = document.createElement("h2");
        cvMain.appendChild(educationHeader);
        educationHeader.id = "eduHeader";
        experienceHeader.innerHTML = "EXPERIENCE";
        educationHeader.innerHTML = "EDUCATION";

        
        let cvMainRight = document.createElement("div");
        cvMain.appendChild(cvMainRight);
        cvMainRight.id = "cvMainRight";
        let cvMainLeft = document.createElement("div");
        cvMain.appendChild(cvMainLeft);
        cvMainLeft.id = "cvMainLeft";

        let job1 = document.createElement("p");
        cvMainRight.appendChild(job1);
        job1.id = "job1";
        job1.innerHTML = "<strong>Executive Researcher, Mercuri Urval AB</strong></br><i>07.2018 - 05.2020</br>Headhunting, Executive Search and professional recruitment of manager, specialists and sales roles in varying sectors. Was responsible for the research part of the projects wich included market analysis, candidate/competence sourcing, requirement profiles, job advertisment, client and candidate contact, phone meetings, selection of applicants through review of their resumes, letters and phone interviews. Presentation of chosen candidates, directly to client or the recruitment consultant.</p> ";
        let job2 = document.createElement("p");
        cvMainRight.appendChild(job2);
        job2.id = "job2";
        job2.innerHTML = "<strong>Team Operations Coordinator, Mercuri Urval AB</strong></br><i>11.2017 - 05.2018</br>Administration and coordination of recruitment projects; handled invoices, communication with candidates and booking of meetings, reports regarding project related expenses. Support to collegues, clients and candidates. Followed-up on old projects and invoices etc.</p>";
        let job3 = document.createElement("p");
        cvMainRight.appendChild(job3);
        job3.id = "job3";
        job3.innerHTML = "<strong>Office Manager (interim), Mercuri Urval AB</strong></br><i>08.2017 - 11.2017</br>Interim position. I was responsible for the reception, purchases of office materials, handled the contact with suppliers. etc.</p>";
        let job4 = document.createElement("p");
        cvMainRight.appendChild(job4);
        job4.id = "job4";
        job4.innerHTML = "<strong>Staffing & Recruitment assistant, Academic Work</strong></br><i>02.2015 - 08.2016</br>I was part of the IT/Tech Team as a part-time job during my studies. I supported the recruiters in their processes, wrote job adverts, reviewed applicants and selected the most interesting, phone interviews and face2face meetings.</p>";

        let edu1 = document.createElement("p");
        cvMainLeft.appendChild(edu1);
        edu1.id = "edu1";
        edu1.innerHTML = "<strong>Front-End Development, Medieinstitutet</strong></br><i>12.2020 - 12.2022</br>Dynamic webb development with HTML, CSS, JavaScript. Angluar, React, Node, SQL and NoSQL. Version control with Git and Github. Usability and User Experience studies. Projects and agile methods.";
        let edu2 = document.createElement("p");
        cvMainLeft.appendChild(edu2);
        edu2.id = "edu2";
        edu2.innerHTML = "<strong>Graphic Design Print, Högskolan Kristianstad</strong></br><i>spring 2017</br>Course 7.5 hp. Graphic Design focusing on Printed productions.</p>";
        let edu3 = document.createElement("p");
        cvMainLeft.appendChild(edu3);
        edu3.id = "edu3";
        edu3.innerHTML = "<strong>Typography & Digital Publishing, Linnéuniversitetet</strong></br><i>spring 2017</br>Course 7.5 hp.</p>";
        let edu4 = document.createElement("p");
        cvMainLeft.appendChild(edu4);
        edu4.id = "edu4";
        edu4.innerHTML = "<strong>Spannish 1, Linnéuniversitetet</strong></br><i>autumn 2017</br>Lived one year in Barcelona and studied Spannish for one semester.";
        let edu5 = document.createElement("p");
        cvMainLeft.appendChild(edu5);
        edu5.id = "edu5";
        edu5.innerHTML = "<strong>Graphic Design Mobile Units, Högskolan Kristianstad</strong></br><i>spring 2016</br>Course in Graphic Design with focus on Mobile units.</p>";
        let edu6 = document.createElement("p");
        cvMainLeft.appendChild(edu6);
        edu6.id = "edu6";
        edu6.innerHTML = "<strong>Graphic Design Introduction, Högskolan Kristianstad</strong></br><i>spring 2016</br>Introduction Course to Graphic Desing at Högskolan Kristianstad.</p>";
        let edu7 = document.createElement("p");
        cvMainLeft.appendChild(edu7);
        edu7.id = "edu7";
        edu7.innerHTML = "<strong>Personalvetarprogrammet, Göteborgs Universitet</strong></br><i>09.2014 - 12.2015</br>Studied HR at Gothenburgs University for 1,5 years.</p>";

        let cvFoot = document.createElement("div");
        content.appendChild(cvFoot);
        cvFoot.id = "cvFoot";

        let cvPersonal = document.createElement("div");
        cvFoot.appendChild(cvPersonal);
        cvPersonal.id = "cvPersonal";
        cvPersonal.innerHTML = "<p id='personalText'>Hello,</br>my name is Anton and I am currently studying Front-end Development at Medieinstitutet, examining december 2022. I am looking for opportunities within the field of Web Development and Web Design, eighter as an Intern during my studies or as an employee after my exam. </p>";
        
        let findMeDiv = document.createElement("div");
        cvFoot.appendChild(findMeDiv);
        findMeDiv.id = "findMeDiv";
        findMeDiv.innerHTML = "<h3 id='findMe'>Find me here:</h3>";
        let githubButton = document.createElement("a");
        findMeDiv.appendChild(githubButton);
        githubButton.id = "githubBtn";
        githubButton.href = "https://github.com/aahland";
        githubButton.innerHTML = "<img id='gitImg'src='githublogotype.png'>";
        let instaBtn = document.createElement("a");
        instaBtn.id = "instaBtn";
        findMeDiv.appendChild(instaBtn);
        instaBtn.innerHTML += "<img id='instaImg'src='instagram-logo.png'>";
        let linkedInBtn = document.createElement("a");
        findMeDiv.appendChild(linkedInBtn);
        linkedInBtn.id = "linkedInBtn";
        linkedInBtn.innerHTML += "<img id='linkedinImg' src='linkedinLogo.png'>";

       
        


    })
}

function buildPortfolio(){
    portfolioBtn.addEventListener("click", function() {
        let content = document.getElementById("dynamicContent");
        nav.remove();
        console.log("portfolio clicked");

        let portfolioHeader = document.createElement("div");
        content.appendChild(portfolioHeader);
        portfolioHeader.id = "portfolioHeader";
        portfolioHeader.innerHTML = "<h1>PORTFOLIO</h1>";

        let portfolioMain = document.createElement("div");
        content.appendChild(portfolioMain);
        portfolioMain.id = "portfolioMain";

        let portfolioAside = document.createElement("div");
        content.appendChild(portfolioAside);
        portfolioAside.id = "portfolioAside";

        let underConstructionSign = document.createElement("button");
        content.appendChild(underConstructionSign);
        underConstructionSign.id = "underConstructionSign";
        underConstructionSign.addEventListener("click", function(){
            location.href("https://github.com/aahland");
        })
        underConstructionSign.innerHTML = "<h1 id='underText'>Under Construction</h1>";
        underConstructionSign.innerHTML += "<a href='https://github.com/aahland'id='gitLink'>meanwhile, please visit my Github</a>";
        

    })
}



function buildAbout(){
    aboutBtn.addEventListener("click", function() {
        nav.remove();
        console.log("about clicked");
    })
}


