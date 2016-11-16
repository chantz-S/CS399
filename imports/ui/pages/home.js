import './home.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
Template.home.events({
  'click .add-devices' (event){
    event.preventDefault();
    FlowRouter.go('/add_devices')
  }
})
Template.home.events({
  'click .view-devices' (event){
    event.preventDefault();
    FlowRouter.go('/view_devices')
  }
})
