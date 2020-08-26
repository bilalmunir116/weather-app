const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#message1')
const messageTwo=document.querySelector('#message2')
//messageOne.textContent=('From javascript')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    messageOne.textContent='Loading...'
    messageTwo.textContent=''

    fetch('/weather?address='+location).then((response)=>{

response.json().then((data)=>{
    if(data.error)
    {
        messageOne.textContent='Please Enter a Valid Location!'
        messageTwo.textContent=''

    //console.log(data.error)
    }
    else{
        messageOne.textContent=data.location
        messageTwo.textContent=data.forecastData
        // console.log(data.location)
        // console.log(data.forecastData)
    }
    
})
})

})