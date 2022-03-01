document.getElementById('spinner').style.display = 'none';


const searchPhone=async()=>{
    
    const inputField=document.getElementById('search-field');
    const searchPhone=inputField.value;
    //console.log(searchPhone);


// const url=`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;
// const res=await fetch(url);
// const data=await res.json();
 

  if(searchPhone==''){
alert('Please search a phone');
return false;
  }
  else{
    document.getElementById('spinner').style.display='block'
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;
const res=await fetch(url);
const data=await res.json();
displayPhoneData(data.data);
document.getElementById('search-field').value='';
  }

// displayPhoneData(data.data);
// document.getElementById('search-field').value='';

}

const displayPhoneData=(phones)=>{
    document.getElementById('spinner').style.display = 'block';
console.log(phones);
    const displayPhone=document.getElementById('phone-details');
    displayPhone.textContent='';

    if(!phones || phones.length==0){
        alert('Result could not be found');
    }
 

    const sliceData=phones.slice(0,20)
    sliceData.forEach((phone)=>{
        
       

        const div=document.createElement('div');
        div.classList.add('col')
        div.innerHTML=`
        <div class="card" style="width:18rem">
        <img src="${phone.image}" class="card-img-top" alt="...."/>
           <div class="card-body">
           <h5 class="card-title">Brand: ${phone.brand}</h5>
           <h5 class="card-title"> Model Name: ${phone.phone_name}</h5>
           <button onclick="loadDetailByName('${phone.slug}')" data-bs-target="#modal-details" 
           data-bs-toggle="modal" href="#" class="btn btn-primary">Go Details</button>
           </div>
        </div>
        `;
        displayPhone.appendChild(div);
    });
 
    document.getElementById('spinner').style.display = 'none';

}




const toggleSpinner=displayStyle=>{
    document.getElementById('spinner').style.display=displayStyle;

}

const toggleSearchResult=displayStyle=>{
    document.getElementById('phone-details').style.display=displayStyle;

}




const loadDetailByName=async (idPhone)=>{
    // console.log(idPhone)
 
   const url=`https://openapi.programming-hero.com/api/phone/${idPhone}`;
   const res=await fetch(url);
const data=await res.json();
displayDetailByIdName(data.data)
};

const displayDetailByIdName=phones=>{
    const modal=document.getElementById('modal-details');
    modal.textContent='';
    console.log(phones.slug);
 
        
        const div=document.createElement('div');
       div.classList.add('modal-dialog')
     
        div.innerHTML=`
        <div class="modal-dialog">
            
          
          <div class="modal-content">
            <div class="modal-header">
              
              
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
             
            </div>
            <div class="modal-body">
            <img src="${phones.image? phones.image:'Image not found'}" class="card-img-top" alt="...."/>
            <p class="modal-title"><b>Brand Name</b>: ${phones.brand? phones.brand:'Brand not found'}</p>
              <p class="card-text"><b>Model</b>: ${phones.name? phones.name:'Model not found'}</p>
              
              <p class="card-text"><b>Release Date</b>: ${phones.releaseDate? phones.releaseDate:'Release date Not Found'}</p>
              <p class="card-text"><b>Main feature:</b></br>
             <b>Storage</b>: ${phones.mainFeatures.storage? phones.mainFeatures.storage:'Storage  Not Found'}</br>
             <b>Display Size</b>: ${phones.mainFeatures.displaySize? phones.mainFeatures.displaySize:'Display size  Not Found'}</br>
             <b>ChipSet</b>: ${phones.mainFeatures.chipSet? phones.mainFeatures.chipSet:'Chipset Not Found'}</br>
            <b>Memory</b>: ${phones.mainFeatures.memory? phones.mainFeatures.memory:'Memory Not Found'}</br>
              </p>
              <p class="card-text"><b>Sensor</b> : ${phones.sensors? phones.sensors:'Sensor date Not Found'}</p>
               <p><b>Others:</b></br>  
             <b>WLAN</b>:  ${phones.others.WLAN? phones.others.WLAN:'WLAN Not Found'}</br>
             <b>Bluetooth</b>:  ${phones.others.Bluetooth? phones.others.Bluetooth:'Bluetooth Not Found'}</br>
             <b>GPS</b>: ${phones.others.GPS? phones.others.GPS:'GPS Not Found'}</br>
             <b>NFC</b>: ${phones.others.NFC? phones.others.NFC:'NFC Not Found'}</br>
             <b>Radio</b>:  ${phones.others.Radio? phones.others.Radio:'Radio  Not Found'}</br>
             <b>USB</b>:  ${phones.others.USB? phones.others.USB:'USB Not Found'}</br>
               </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <a type="button" href="${'#'}" class="btn btn-primary">
                See Video
              </a>
            </div>
          </div>
          </div>
        `;
        modal.appendChild(div)
   
  
}




// Show all phone function and details


// const searchAllPhone=async()=>{
//     const inputField=document.getElementById('search-field');
//     const searchPhone=inputField.value;
//     //console.log(searchPhone);

// // const url='https://openapi.programming-hero.com/api/phones?search=${searchPhone}';
// const url=`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;
// const res=await fetch(url);
// const data=await res.json();
//   console.log(data.data);

//   if(searchPhone==''){
// alert('Please search a phone');
// return false;
//   }


//         // toggleSpinner('block');
//         // toggleSearchResult('none');
// displayPhoneDataAll(data.data);

// // toggleSpinner('none');
// // toggleSearchResult('block');
// document.getElementById('search-field').value='';

// }

// displayPhoneDataAll=(phones)=>{

//     const displayPhone=document.getElementById('showAll');
//     displayPhone.textContent='';

// //     const filtered=phones.filter(function(item){
// // if(this.count<21 && item>0){
// //     this.count++;
// //     return true;
// //    }
// //    return false;
// //     });
// //     console.log(filtered);
// if(phones.length>21){
//     phones.slice(0,21);
// }



    
//     if(!phones || phones.length==0){
//         alert('Result could not be found');
//     }
    
//     phones.forEach((phone)=>{
        
       

//         const div=document.createElement('div');
//         div.classList.add('col')
//         div.innerHTML=`
//         <div class="card" style="width:18rem">
//         <img src="${phone.image}" class="card-img-top" alt="...."/>
//            <div class="card-body">
//            <h5 class="card-title">Brand: ${phone.brand}</h5>
//            <h5 class="card-title"> Model Name: ${phone.phone_name}</h5>
//            <button onclick="loadDetailByName('${phone.slug}')" data-bs-target="#modal-details" 
//            data-bs-toggle="modal" href="#" class="btn btn-primary">Go Details</button>
//            </div>
//         </div>
//         `;
//         displayPhone.appendChild(div);
//     });
 

//     // toggleSpinner('none');
//     // toggleSearchResult('block');
// }


