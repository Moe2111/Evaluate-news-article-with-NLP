function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  
  let formText = document.getElementById("name").value;
  if(Client.checkUrl(formText)) {
    console.log('::: form submitted :::');
    const getData = async(url, data={})=>{
      const allData = await fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
      try{
        const response = await allData.json();
        console.log(response)
        return response
      }catch(error){
        console.log(error)
      }
      
    }
    getData("http://localhost:8083/check", { text: formText})
    .then(function(response) {
      console.log(response)
      document.getElementById('polarity').innerHTML = response.polarity
      document.getElementById('subjectivity').innerHTML = response.subjectivity
    })
  }
  else{
    console.log('this is not a url');
  }
}

export { handleSubmit };

