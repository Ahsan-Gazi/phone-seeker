const searchPhone=async()=>{
    const inputField=document.getElementById('search-field');
    const searchPhone=inputField.value;
    console.log(searchPhone);

// const url='https://openapi.programming-hero.com/api/phones?search=${searchPhone}';
const url=`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;
const res=await fetch(url);
const data=await res.json();
 console.log(data.data);
displayPhoneData(data.data);
}

displayPhoneData=(phones)=>{
    phones.forEach((phone)=>{
        const displayPhone=document.getElementById('phone-details');
        const div=document.createElement('div');
        div.classList.add('col')
        div.innerHTML=`
        <div class="card" style="width:18rem">
        <img src="${phone.image}" class="card-img-top" alt="...."/>
           <div class="card-body">
           <h5 class="card-title">${phone.brand}</h5>
          <button onclick="loadPhoneDetailsByName('#')"
          data-bs-target="#modal-details"
           data-bs-toggle="modal" class="btn btn-primary">
          See Details
          </button>
           </div>
        </div>
        `;
        displayPhone.appendChild(div);
    })
}

