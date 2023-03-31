function showMenu(){
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right="0";
}
function hideMenu(){
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right="-110px";
}
function register(){
    var LoginForm = document.getElementById("LoginForm");
    var RegForm = document.getElementById("RegForm");   
    var Indicator = document.getElementById("Indicator"); 
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(150px)";
}
function login(){
    var LoginForm = document.getElementById("LoginForm");
    var RegForm = document.getElementById("RegForm");   
    var Indicator = document.getElementById("Indicator"); 
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(280px)";
    Indicator.style.transform = "translateX(25px)";
}
function validate_login(){
    var luname=document.getElementById("l_uname").value;
    var lpass=document.getElementById("l_pass").value;
    
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var alphanums = /^[A-Za-z0-9]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(luname === '' | luname == null){alert('Enter user name');}
    else if(!alphanums.test(luname)){alert('User name field required only alphabets and digits');}
    else if(lpass === '' | lpass == null){alert('Enter password');}
    else if(!pwd_expression.test(lpass)){alert ('Minimun 1 upper case, 1 lower case, 1 special character and 1 Numeric are required in Password');}
    else if(lpass.length < 8){alert ('Password minimum length is 8');}
    else if(lpass.length > 12){alert ('Password maximum length is 12');}
    else{window.location.reload();alert('Login Successful!!!');}
}

function validate_registration(){
    var form=document.getElementById('RegForm');
    var rname=document.getElementById("r_name").value;
    var runame=document.getElementById("r_uname").value;
    var ruemail=document.getElementById("r_email").value;
    var rupass=document.getElementById("r_pass").value;
    var rupass1=document.getElementById("r_pass_1").value;

    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+/;
    var alphanums = /^[A-Za-z0-9]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(rname === '' | rname == null){alert('Please enter full Name');}
    else if(!letters.test(rname)){alert('Only letters allowed'); setErrorFor();}
    else if(ruemail === '' | ruemail == null){alert('Please enter your user email id');}
    else if (!filter.test(ruemail)) {alert('Invalid email');}
    else if(runame === '' | runame == null){alert('Please enter the user name.');}
    else if(!alphanums.test(runame)){alert('User name field required only alphabets and digits');}
    else if(rupass === '' | rupass == null){alert('Please enter Password');}
    else if(rupass1 === '' | rupass1 == null){alert('Enter Password to confirm');}
    else if(!pwd_expression.test(rupass)){alert ('Minimun 1 upper case, 1 lower case, 1 special character and 1 Numeric are required in Password');}
    else if(rupass != rupass1){alert ('Passwords do not match');}
    else if(rupass.length < 8){alert ('Password minimum length is 8');}
    else if(rupass.length > 12){alert ('Password maximum length is 12');}
    else{window.location.reload();alert('Thank You for Registration!!!');}
}
function message_post(){
    var cname=document.getElementById("cname").value;
    var cemail=document.getElementById("cemail").value;
    var ctext=document.getElementById("ctext").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(cname.length > 0 & ctext.length > 0 & filter.test(cemail)){
        window.location.reload();
        alert('Your message is sent. Thanks for contacting us.');
    }
    else{
        alert('Please provide valid mail id, name, and comments');
    }
   
    
 }
function sendMail(){
    var mname=document.getElementById("mname").value;
    var memail=document.getElementById("memail").value;
    var mtext=document.getElementById("mtext").value;
    var msub=document.getElementById("msub").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(mname.length > 0 & mtext.length > 0 & filter.test(memail)){
        window.location.reload();
        alert('Your message is sent. Thanks for contacting us.');
    }
    else{
        alert('Please provide valid mail id, name, and message');
    }
   
    
 }
/*
        let messages = []
        e.preventDefault();
        if(rname.value ==='' | rname.value == null){
            messages.push('Name cannot be blank');
            setErrorFor();
        }
        else{
            setSuccessFor();
        }
    
        if(!letters.test(rname.value)){
            messages.push('Name field required only alphabet characters');
            setErrorFor();
        }
        else{
            setSuccessFor();
        }
        if (messages.length > 0){
            e.preventDefault();
            errorElement.innerText = messages.join(', ')
        }
}   
*/
function setErrorFor(){
    formControl.className = 'form-control-error';
}
function setSuccessFor(){
    formControl.className = 'form-control-success';
} 

function clientChart() {
    new Chart(document.getElementById("doughnut-chart"), {
      type: "doughnut",
      data: {
        labels: [
          "Asia",
          "Europe",
          "Middle East",
          "America",
        ],
        datasets: [
          {
            label: "",
            backgroundColor: [
              "#7B68EE",
              "#DAA520",
              "#8B008B",
              "#C71585",
            ],
            data: [40, 54, 32, 66],
            hoverOffset: 6,
            datalabels: {
              color: "white",
              font: {
                weight: "bold",
              },
            },
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            enabled: false,
          },
        },
        title: {
          display: true,
          text: "Number of clients we serve",
        },
      },
      plugins: [ChartDataLabels],
    });
  }

function growthChart() {
  var xValues = [
    "Newgen",
    "Foxbrite",
    "Tribble",
    "Dominix",
    "Archtek",
  ];
  var yValues = [80, 68, 58, 54, 50];
  var barColors = [
    "rgb(255, 160, 122)",
    "rgb(255, 105, 180)",
    "rgb(255, 127, 80)",
    "rgb(240, 230, 140)",
    "rgb(218, 112, 214)",
  ];

  new Chart("barChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
          label: "Newgen has got the best of us",
          datalabels: {
            color: "gray",
            font: {
              weight: "bold",
            },
          },
        },
      ],
    },
    options: {
      plugins: {
        tooltip: {
          enabled: false,
        },
      },
      legend: { display: false },
      title: {
        display: true,
        text: "Top 5 clients",
      },
    },
    plugins: [ChartDataLabels],
  });
}

function revenue(){
    new Chart(document.getElementById("revenue-chart"), {
        type: 'line',
        data: {
          labels: [2017,2018,2019,2020,2021],
          datasets: [{ 
              data: [5,12,30,70,110],
              label: "Asia",
              borderColor: "#3e95cd",
              fill: false
            }, { 
              data: [2,8,15,40,75],
              label: "Europe",
              borderColor: "#8e5ea2",
              fill: false
            }, { 
              data: [4,7,10,20,45],
              label: "Middle East",
              borderColor: "#3cba9f",
              fill: false
            }, { 
              data: [12,30,45,30,80],
              label: "America",
              borderColor: "#e8c3b9",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Our revenue for last 5 years (in USD millions)'
          }
        }
      });
}

  document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".charts")) {
      clientChart();
      growthChart();
      revenue();
    }
  });