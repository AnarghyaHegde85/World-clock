const allZone =document.getElementById('allzone');
const currentTime =document.getElementById('currentTime');
const interval=1000;

const allZone1 =document.getElementById('allzone1');
const currentTime1 =document.getElementById('currentTime1');


currentTime.innerText=new Date().toLocaleString('en-us',{timeStyle:"medium"},interval);
currentTime1.innerText=new Date().toLocaleString('en-us',{timeStyle:"medium"});


fetch('timeZone.json')
.then(res => res.json())
.then(data => {
   data.map(e => {
    const option =document.createElement('option')
    option.innerText=e.timezone
    allZone.appendChild(option)

    const option1 =document.createElement('option')
    option1.innerText=e.timezone
    allZone1.appendChild(option1)
   })
})
.catch(err => console.log(err))

allZone.oninput = () => setInterval(() => time(),1000)
allZone1.oninput = () => setInterval(() => time1(),1000)


function time() {
    console.log(allZone.value);
    const ctime =new Date().toLocaleString('en-us',{timeZone:allZone.value,timeStyle:'medium'})
    currentTime.innerText =ctime;
}

function time1() {
    console.log(allZone1.value);
    const ctime1 =new Date().toLocaleString('en-us',{timeZone:allZone1.value,timeStyle:'medium'})
    currentTime1.innerText =ctime1;
}



