import './view_devices.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

Template.view_devices.helpers({
  lightHelper() {
    return Session.get('lightcheck');
  },
  garageHelper() {
    return Session.get('garagecheck');
  },
  petHelper() {
    return Session.get('petcheck');
  },
  doorHelper() {
    return Session.get('doorcheck');
  },
  windowHelper() {
    return Session.get('windowcheck');
  },
  audioHelper() {
    return Session.get('audiocheck');
  },
})
