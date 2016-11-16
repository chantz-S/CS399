import './add_devices.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Notifications } from 'meteor/gfk:notifications';

Template.add_devices.onCreated(() => {
  Session.set('lightcheck', false);
  Session.set('garagecheck', false);
  Session.set('petcheck', false);
  Session.set('doorcheck', false);
  Session.set('windowcheck', false);
  Session.set('audiocheck', false);
})


Template.add_devices.events({
  'change .lightcheck' (event){
    if (Session.get('lightcheck') == true) {
      Session.set('lightcheck', false);
    } else {
      Session.set('lightcheck', true);
    }
    console.log(Session.get('lightcheck'))
  },
  'change .garagecheck' (event){
    if (Session.get('garagecheck') == true) {
      Session.set('garagecheck', false);
    } else {
      Session.set('garagecheck', true);
    }
    console.log(Session.get('garagecheck'))
  },
  'change .petcheck' (event){
    if (Session.get('petcheck') == true) {
      Session.set('petcheck', false);
    } else {
      Session.set('petcheck', true);
       Materialize.toast('Kitty is out of food!', 4000, 'rounded');
    }
    console.log(Session.get('petcheck'))
  },
  'change .doorcheck' (event){
    if (Session.get('doorcheck') == true) {
      Session.set('doorcheck', false);
    } else {
      Session.set('doorcheck', true);
    }
    console.log(Session.get('doorcheck'))
  },
  'change .windowcheck' (event){
    if (Session.get('windowcheck') == true) {
      Session.set('windowcheck', false);
    } else {
      Session.set('windowcheck', true);
      Materialize.toast("Bedroom B's window has been broken, alarm raised!", 4000, 'rounded');
    }
    console.log(Session.get('windowcheck'))
  },
  'change .audiocheck' (event){
    if (Session.get('audiocheck') == true) {
      Session.set('audiocheck', false);
    } else {
      Session.set('audiocheck', true);
    }
    console.log(Session.get('audiocheck'))
  },

})
