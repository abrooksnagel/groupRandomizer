var students = ["Brooks", "Anthony", "Charlie", "Jeremy", "Natlie", "Robby", "Joe", "Amber", "Eric", "Nathan", "Mark", "Altamir", "Zach", "Paul", "Chris", "Liz", "Scott", "Kenzie", "Sam", "Matt"];
var randomStudents = [];
var newStudents = [];
var groupButtons = 10;
var howManyGroups;
var groups = [];
var lists;
var studentsPer;

$(document).ready(function() {
  buildButtons(groupButtons);
  $('.container').on('click', '.button', listNumber);
  $('.container').on('click', '.refresh', buildLists);
});

function buildButtons(number) {
  for (var i = 2; i < number + 1; i++) {
    $('.container').append('<button id="' + i + '" class="button">' + i + ' </button>');
  }
  $('.container').append('<button class="refresh">Refresh</button>')
  $('.container').append('<div class="clearfix"></div>')
};

function copyStudents() {
  for (var i = 0; i < students.length; i++) {
    newStudents.push(students[i]);
  }
};

function randomizeStudents() {
  copyStudents();
  console.log(newStudents);
  for (var i = 0; i < students.length; i++) {
    var number = (Math.floor((Math.random() * newStudents.length) + 0));
    var transferStudent = newStudents.splice(number, 1)[0];
    randomStudents.push(transferStudent);
  };
  console.log(randomStudents);
};

function listNumber() {
  lists = $(this).attr('id');
  console.log(lists);
  clearScreen();
}

function clearScreen() {
  $('.group').remove();
};

function howManyStudents() {
  studentsPer = Math.round(students.length / lists);
  console.log(studentsPer)
}

function buildLists() {
  clearScreen();
  randomizeStudents();
  howManyStudents();
  for (var i = 0; i < lists; i++) {
    groups.push([]);
  }
  groupsCounter = 1;
  for (var i = 1; i <= lists; i++) {
    $('.container').append('<div class="group">Group ' + groupsCounter + '</div>');
    console.log(studentsPer);
    if (randomStudents.length > studentsPer) {
      for (var j = 1; j <= studentsPer; j++) {
        var $el = $('.container').children().last();
        var appendStudent = randomStudents.shift();
        $el.append('<p>' + appendStudent + '</p>').hide().slideDown();
        console.log(randomStudents.length);
      }
    } else {
      while (randomStudents.length > 0) {
        var $el = $('.container').children().last();
        var appendStudent = randomStudents.shift();
        $el.append('<p>' + appendStudent + '</p>').hide().slideDown();
      }
      console.log(randomStudents.length);
    }
    groupsCounter++;
  }

}
