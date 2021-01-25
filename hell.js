let cnames = document.getElementById("cnames")
let img = document.getElementsByTagName("img")
let position = document.getElementById("position")
let salary = document.getElementById("salary")
let apply = document.getElementById("apply")
let applicants = document.getElementById("applicants")
let location = document.getElementById("location")
let date = document.getElementById("date")
  
class CompanyD{
       constructor(cnames,src,position,location,date,salary,apply,applicants){
           this.cnames = cnames,
           this.src = src,
           this.position = position,
           this.location =location,
           this.apply=apply,
           this.date = date,
           this.salary = salary,
           this.applicants = applicants
        }
       render(){
              

location.innerText = this.location


       }


}




let cnames1 = new CompanyD("Blue Rose Publishers","","Bussiness Development Executive","Delhi"," 28 Jan' 21 ","3-3.4 LPA","Apply by 7 Feb","371 applicants")
cnames1.render()

