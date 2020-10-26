// Start server: python3 -m http.server 1234 --bind 127.0.0.1
// http://127.0.0.1:1234/


// const rp = require('request-promise');
// const $ = require('cheerio');
// const url = 'https://www.pro-football-reference.com/players/T/ThomMi05/gamelog/';



const search_url = "https://www.pro-football-reference.com/search/search.fcgi?hint=Michael+Thomas&search=Michael+Thomas"
const heroku = "https://cors-anywhere.herokuapp.com/"

function find_players()
{
  console.log("submit pressed");
  var nameValue = document.getElementById("first").value;
  var teamValue = document.getElementById("this_team").value;
  console.log(nameValue);
  console.log("why is it not working");
  console.log(teamValue);

  // Cors: https://cors-anywhere.herokuapp.com/
  $(document).ready(function() 
  {
    $.get(heroku + search_url, function(data, status)
    {
      // console.log("Data: " + data + "\nStatus: " + status);


      let arr = [];
      // I need to do a toupper on first letter
      $( 'em:contains("Saints")', data ).each(function( index ) {
        arr.push($(this));
      });
      // I might need to add some more filtering here
      // This gets the correct linkage
      console.log(arr[0].parent().parent().find("a").attr("href"));

      // This gives /players/T/ThomMi05.htm
      let player_link = arr[0].parent().parent().find("a").attr("href");
      go_to_gamelog(player_link);
    });
  });
}

function go_to_gamelog(player_link)
{
  var site = "https://www.pro-football-reference.com" + player_link + "/gamelog";
  console.log(site);
}

function find_opponent()
{
  // Loops over the elements w/HTML that contains NYG and stores in an array
  let arr = [];
  $( 'a:contains("NYG")', html ).each(function( index ) {
    arr.push($(this));
  });
  console.log("here");
  console.log(arr[1].parent().parent().attr('id'));
  console.log(arr.length);
}


function get_yards()
{

}

$(document).ready(function() {
  // all custom jQuery will go here
  console.log("queery");
});

/*
// I can probably contain this get in a function, too
let global = 0;
rp(url)
  .then(function(html){
    // This does work
    // global = html;
    // console.log(global);

    // success!
    // console.log(html);
    // console.log($('#stats.1').length);
    // console.log($('#stats.1'));

    // gets all the stats (if you get rid of first)
    let stats_row = $('tr > td', html);
    console.log(stats_row.first().text());

    let stat = $('td[data-stat="opp"]', html);
    console.log(stat.first().text());

    // finds a elements that contain NYG
    let opp = $('a:contains("NYG")', html);
    console.log(opp.text());

    // Loops over the elements w/HTML that contains NYG and stores in an array
    let arr = [];
    $( 'a:contains("NYG")', html ).each(function( index ) {
      arr.push($(this));
    });
    console.log("here");
    console.log(arr[1].parent().parent().attr('id'));
    console.log(arr.length);
    // xpath to yards: //*[@id="stats.2"]/td[13]

    // get yards
    let yards = arr[1].parent().parent().attr('id').toString();
    console.log(yards)
    let pos = yards.indexOf('.');
    console.log(pos);
    yards = yards.slice(0, pos) + "\\" + yards.slice(pos);
    console.log(yards);
    yards = '#' + yards + " [data-stat='rec_yds']";
    console.log(yards);
    let row1 = $(yards, html);
    console.log(row1.text());


    // Get all a elems inside td
    a_elem = $('td > a', html);
    // console.log(a_elem.text());


    // Gets ID of the stat
    console.log(opp.parent().parent().attr('id'));


    // I have to escape the .
    let row = $("#stats\\.1 [data-stat='year_id']", html);
    console.log(row.text());
  })
  .catch(function(err){
    // handle error
  });
  */



  // $.get("https://www.pro-football-reference.com/players/T/ThomMi05/gamelog/", function(data, status){
  //   console.log("Data: " + data + "\nStatus: " + status);
  // });


