// Client ID and API key from the Developer Console
var CLIENT_ID =
  "C_ID";
var API_KEY = "API_KEY";

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];

var SCOPES = "https://www.googleapis.com/auth/calendar";

var authorizeButton = document.getElementById("authorize_button");
var signoutButton = document.getElementById("signout_button");

var eventflag = false;
var startTime;
var endTime;
var EventName;

var setflag = false;
var setTime;
var setType;

function SetEventType(s,t){
    setTime = s;
    setType = t;
    setflag = true;
    handleClientLoad();
}

function CreateEvent(n,s,e){
    startTime = s;
    endTime = e;
    EventName = n;
    eventflag = true;
    handleClientLoad();
}

function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

function initClient() {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })
    .then(
      function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
      },
      function (error) {
        appendPre(JSON.stringify(error, null, 2));
      }
    );
}

function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = "none";
    signoutButton.style.display = "block";
    if (eventflag) addEventToCalander(EventName, startTime, endTime)//("Jefferys graduation", "2020-10-7T09:00:00-07:00", "2020-10-7T18:00:00-07:00")
    if (setflag) changeEventType(setTime,setType);
  } else {
    authorizeButton.style.display = "block";
    signoutButton.style.display = "none";
  }
}

function handleAuthClick(event) {
  console.log("handleAuthCalled");
  gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

function appendPre(message) {
  // var pre = document.getElementById("content");
  // var textContent = document.createTextNode(message + "\n");
  // pre.appendChild(textContent);
  console.log("Google API Pre-message", message);
}


function addEventToCalander(EventName, startTime, EndTime) {
    eventflag = false;
    var event = {
    summary: EventName,
    start: {
      dateTime: startTime,
      timeZone : "US/Eastern"
    },
    end: {
      dateTime: EndTime,
      timeZone : "US/Eastern"
    },
  };

     gapi.client.calendar.events
      .insert({
        calendarId:
          "c_lh6s4ugatmp8q7eop3n94rhnsk@group.calendar.google.com",
        resource: event,
      }).then(function (response){
       
      })
}

function changeEventType(st,nt){
    gapi.client.calendar.events
    .list({
      calendarId: "c_lh6s4ugatmp8q7eop3n94rhnsk@group.calendar.google.com",
      showDeleted: false,
      singleEvents: true,
    })
    .then(function (response) {
      var events = response.result.items;
      

      if (events.length > 0) {
        for (i = 0; i < events.length; i++) {
          
          if (events[i].start.dateTime === st){
            //changes the event somehow
          }
        }
      } 
    });

    setflag = false;
}




