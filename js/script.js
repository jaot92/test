// we could have a remote data source that call the users. jQuery one grab info from other servers.
var users = [
  {
    name: 'Lucy',
    gender:'F',
    hobby: 'pets',
    avatar: 'avatar1.png',
  },
  {
    name: 'Jose',
    gender:'M',
    hobby: 'music',
    avatar: 'avatar2.png',
  },
  {
    name: 'Nana',
    gender:'F',
    hobby: 'pets',
    avatar: 'avatar3.png',
  },
  {
    name: 'Luis',
    gender:'M',
    hobby: 'sports',
    avatar: 'avatar4.png',
  },
];

window.addEventListener('load', function() {

  var results = document.getElementById('results');

  function search() {

    //get hobby
    var hobbyField = document.getElementById('hobby');
    var hobby = hobbyField.value;

    //get gender
    var genderField = document.getElementById('gender');
    var s = genderField.selectedIndex;
    var gender = genderField.options[s].value;

    var resultsHtml = '';
    var usersLength = users.length // this is better because it will not recalculate the value everytime

// I can turn this part into a function where input is the name and return the other values.
    for (var i = 0; i < usersLength ; i++) {
      //check gender
      if (gender == 'A' || gender == users[i].gender) {
          //check hobby
          if (hobby == '' || hobby == users[i].hobby) {
            resultsHtml += '<div class="person-row">\
              <img src="images/' + users[i].avatar+ '"/>\
              <div class="person-info">\
              <div>' + users[i].name +'</div>\
              <div>' + users[i].hobby + '</div></div>\
              <button>Add as Friend</button></div>';
          }
      }
    }

    results.innerHTML = resultsHtml;

  }

  var searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', search);
  });
