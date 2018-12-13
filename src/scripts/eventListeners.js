const eventListeners = {
 handleFormSubmission () {
  console.log("button clicked");
  const creator = document.querySelector("#lego__creator").value;
  const name = document.querySelector("#lego__name").value;
  const color = document.querySelector("#lego__color").value;
  const shape = document.querySelector("#lego__shape").value;
  
  const legoObject = {
    creatorName: creator,
    legoName: name,
    legoColor: color,
    legoShape: shape
    }
    // console.log("legoToSave", legoToSave)

    //Post to API and pass legoObject to legoToSave in data.js
    data.postLego(legoObject);
  }
};
