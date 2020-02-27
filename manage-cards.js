/*
 @Return void
 @Param cardID - The ID of the card being added to
 The methods adds an additional card (to store a tweet) to the body of the card whose ID was passed in
*/
function addCard(cardID)
{
    // Find the card referenced
    editCard = document.getElementById(cardID);

    // Create a new tweet card
    var tweet = document.createElement("div");
    tweet.className = "card";
    tweet.innerHTML = `
        <div class="text-right">
            <button type="button" class="btn btn-danger" onClick="removeCard('interest2body')">Remove</button>
        </div>
        <img class="card-img-top" src="https://cdn2.iconfinder.com/data/icons/social-media-square-set/960/Twitter_Sq-512.png" alt="Twitter Logo">
        <div class="card-body">
            <h5 class="card-title text-right">Tweet</h5>
            <p class="card-text text-right">Sample tweet will go here.</p>
        </div>
        `;
    editCard.appendChild(tweet);
}


/*
 @Return void
 @Param cardID - The ID of the card being added to
 The methods adds an additional card (to store a tweet) to the body of the card whose ID was passed in
*/
function removeCard(cardID)
{
}
