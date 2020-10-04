var CLIENT_ID = '1079416677730-fi6bkri729d1s6iv9ka6r8cap770jnka.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBiJGyS83sa8ONJei9JlJWvsjy21oWByqY';
var SCOPES ='https://www.googleapis.com/auth/calendar';
;

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function(error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    listUpcomingEvents();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}



var event = {
    'description': 'Jefferys graduation (it do be fresh and off campus)',
    'start': {
      'dateTime': '2020-10-06T09:00:00%s',
      'timeZone': 'America/Los_Angeles'
    },
    'end': {
      'dateTime': '2015-05-28T17:00:00%s',
      'timeZone': 'America/Los_Angeles'
    }
  };
  

var request = gapi.client.calendar.events.insert({
    'calendarId': 'c_lh6s4ugatmp8q7eop3n94rhnsk@group.calendar.google.com',
    'resource': event
});

request.execute(function(event) {
    appendPre('Event created: ' + event.htmlLink);
});

// $("#btn1").on("click", () => {
//     $("#pg1").text("new content");
// })


