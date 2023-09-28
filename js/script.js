function  calculateAge(){
    const today=new Date();
    const birthDateInput=document.getElementById("birthdate").value;
     const birthDateParts=birthDateInput.split("-");
     const birthYear=birthDateParts[0];
     const birthMonth=birthDateParts[1] -1;
     const birthDay=birthDateParts[2];
      const birthDate=new Date(birthYear,birthMonth,birthDay);
     console.log(birthDateInput);
     console.log(birthDateParts);
     console.log(birthDay);
     console.log(birthMonth);
     console.log(birthYear);
     console.log(birthDate);
     const ageInMilliSeconds=today-birthDate;
     const ageInSeconds=Math.floor(ageInMilliSeconds/1000);
     const ageInMinutes=Math.floor(ageInSeconds/60);
     const ageInHours=Math.floor(ageInMinutes/60);
     const ageInDays=Math.floor(ageInHours/24);
     
     const ageInWeeks=Math.floor(ageInDays/7);
     const ageInMonths=Math.floor(ageInDays/30.436875);

     const ageInYears=Math.floor(ageInDays/365.25);
     const resultcontaier=document.getElementById("rescontainer");
     const result=document.getElementById("result");
     result.innerHTML=`
     <div class="result-items">
     <h3>Age:</h3>
     <p>${ageInYears} years ${ageInMonths%12} Months ${ageInDays%30} Days </p>
      </div> 
      <div class="result-items">
      <h3>Month passed:</h3>
      <p>${ageInMonths}</p>
       </div>
       <div class="result-items">
       <h3>Weeks Passed:</h3>
       <p>${ageInWeeks}</p>
        </div>  
        <div class="result-items">
        <h3>Days Passed:</h3>
        <p>${ageInDays}</p>
         </div> 
         <div class="result-items">
         <h3>Hours Passed:</h3>
         <p>${ageInHours}</p>
          </div> 
         <div class="result-items">
         <h3>Minutes Passed:</h3>
         <p>${ageInMinutes}</p>
          </div>
          <div class="result-items">
          <h3>Seconds passed:</h3>
          <p>${ageInSeconds}</p>
           </div>  
     `;
       };
const ageCalculatorForm=document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit",(Event)=>{
   Event.preventDefault();
    calculateAge();
})