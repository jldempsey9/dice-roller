express = Meteor.npmRequire('express');
http = Meteor.npmRequire('http');
io = Meteor.npmRequire('socket.io');

//$ = Meteor.npmRequire('jquery');
//angular = Meteor.npmRequire('angular');
//halp




Meteor.startup(function() {
  //var masterJson = JSON.parse(Assets.getText("trpg.json"));
  console.log("Hello world from the the meteor server!");
});

Meteor.methods({
  'getHelloWorld': function() {

    return "Hello world from meteor server!";
  },
  'getStaticJson': function() {
    var masterJson = JSON.parse(Assets.getText("static.json"));
    return masterJson;
  },
  'getPlayersJson': function() {
    var masterJson = JSON.parse(Assets.getText("players.json"));
    return masterJson;
  }

});
