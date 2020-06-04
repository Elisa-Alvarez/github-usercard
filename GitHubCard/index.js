/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

//import axios from "axios";

 const myData=  axios.get(`https://api.github.com/users/Elisa-Alvarez`)
           console.log(myData)
  myData.then((response) => {
   console.log(response)
   const info= cardMaker (response.data)
   console.log(info)
   cardsGoHere.prepend(info)
}
      )
   .catch(error => {
    debugger
    console.log('something went wrong, hopefully the error tells us what', error)
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
 const cardsGoHere = document.querySelector('.cards')
 console.log(myData)
//const infoCard = cardMaker(myData)
 

 

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "bneil7",
  "laurenemick",
  "sfritz24",
  "Khalil-Foulks",
  "stephaniegatt",
];

followersArray.forEach( (data) =>{
  axios.get(`https://api.github.com/users/${data}`)
  .then((response) => {
    console.log(response)
    const newinfo= cardMaker (response.data)
    console.log(newinfo)
    cardsGoHere.appendChild(newinfo)
 }
       )
    .catch(error => {
     debugger
     console.log('something went wrong, hopefully the error tells us what', error)
   })
}
)


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker (myInfo){
  
  //card
  const card = document.createElement('div')
  card.classList.add('card')
  
    //Img 
    const profileImg = document.createElement('img')
    profileImg.src = myInfo.avatar_url
    card.appendChild(profileImg)
    
    //card-infro
    const cardInfo = document.createElement('div')
    cardInfo.classList.add('card-info')
    card.appendChild(cardInfo)

        //H3 Name
        const tileName = document.createElement('h3')
        tileName.classList.add('name')
        tileName.textContent = myInfo.name
        cardInfo.appendChild(tileName)

        //Username
        const userName =document.createElement('p')
        userName.classList.add('username')
        userName.textContent= myInfo.login
        cardInfo.appendChild(userName)

        //Location
        const theLocation = document.createElement('p')
        theLocation.textContent = myInfo.location
        cardInfo.appendChild(theLocation)

        // Profile Parent p
        const profileParent = document.createElement('p')
          profileParent.textContent ="Profile:"
          cardInfo.appendChild(profileParent)

              // Profile Link
              const profileLink = document.createElement('a')
              profileLink.href = myInfo.html_url
              profileLink.textContent= myInfo.html_url
              profileParent.appendChild(profileLink)
        //Followers
        const followers = document.createElement('p');
        followers.textContent = myInfo.followers
        cardInfo.appendChild(followers)

        //Following
        const following = document.createElement('p');
        following.textContent = myInfo.following
        cardInfo.appendChild(following)

        //User Bio
        const userBio = document.createElement('p');
        userBio.textContent= myInfo.bio
        cardInfo.appendChild(userBio)

        return card

}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
