//js script

const steps = Array.from(document.querySelectorAll('form .inner-form-container'));

const nextBtn = document.querySelectorAll('form .next-btn');

const prevBtn = document.querySelectorAll('form .prev-btn');

let form = document.querySelector("#subm");

let thankNotice = document.querySelector(".show-notice");

let require = Array.from(document.querySelectorAll("form .container-for-inner-sections .inner-form-container.active input[required]"));

let index = 0;

let i = 0;

steps[0].classList.add('active');

nextBtn.forEach(button =>(	
	
     
       button.addEventListener('click', (e) =>{	 
		changeStep('next');			
	 })

  ));


prevBtn.forEach(button =>(
     
     button.addEventListener('click', (e) =>{

		changeStep('prev');
		
	 })

  ));
  
  
 form.addEventListener('click',(event)=>{
	
	//alert("working");
	thankNotice.classList.add('show');
	event.preventDefault();
});


function changeStep(btn)
  {
      
	  
	 const active = document.querySelector('form .inner-form-container.active'); 
     index = steps.indexOf(active);
	 //empty=false;
	 steps[index].classList.remove('active');
	  
	 /* if(index == 2){
		  alert("Required fi");
		  steps[2].classList.add('active');
		  return
	  }	*/
	  
	//  Validation code below find all required fields  *********not working************
	 /*require.forEach(req =>{

		   if(req.value.length == 0){
			   
			   empty=true;
			   return
		   }
		   
		});

	
	 
	 if(empty == true){	
	      // alert("Required fill not filled out");
		   return
		}
	   else{
		   
	   }
	 Validation code below find all required fields  *********not working************/
      if(btn === 'next'){
				index++;
			 }		
	 else if(btn === 'prev'){
			   index--;
		   }
	
      steps[index].classList.add('active');	 
  }
  
 /*function move()
  {
	
	inputs2 = Array.from(document.querySelectorAll('.inner-form-container.active input'));
	HowManyRequired = 0;
	missedInputs = 0;  
	
	   alert("Length" + inputs2.length);
	   inputs2.forEach(v => {
		   
		   console.log("tags: " + v);
		   
		   if(v.hasAttribute("required"))
		    {
			   HowManyRequired++;

			  if(v.value.length == 0){
				  
				  alert("helle");
				   missedInputs++;
			   }
		    }
		   
	   });
	   
	   alert(HowManyRequired)
	   return missedInputs;
		 
		  
     }*/

 
  


