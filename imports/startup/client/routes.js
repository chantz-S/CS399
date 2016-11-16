import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../../ui/layouts/default.js';
import '../../ui/pages/home.js';
import '../../ui/pages/add_devices.js';
import '../../ui/pages/view_devices.js';
import '../../ui/pages/lights.js';
import '../../ui/pages/garage.js';
import '../../ui/pages/pet.js';
import '../../ui/pages/doors.js';
import '../../ui/pages/windows.js';
import '../../ui/pages/audio.js';

const routes = FlowRouter.group({
  name: 'routes'
});

routes.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('default', { yield: 'home'});
  }
})

routes.route('/add_devices', {
  name: 'add_devices',
  action() {
    BlazeLayout.render('default', { yield: 'add_devices'});
  }
})

routes.route('/view_devices', {
  name: 'view_devices',
  action() {
    BlazeLayout.render('default', { yield: 'view_devices'});
  }
})

routes.route('/lights', {
  name: 'lights',
  action() {
    BlazeLayout.render('default', { yield: 'lights'});
  }
})

routes.route('/garage', {
  name: 'garage',
  action() {
    BlazeLayout.render('default', { yield: 'garage'});
  }
})

routes.route('/pet', {
  name: 'pet',
  action() {
    BlazeLayout.render('default', { yield: 'pet'});
  }
})

routes.route('/doors', {
  name: 'doors',
  action() {
    BlazeLayout.render('default', { yield: 'doors'});
  }
})

routes.route('/windows', {
  name: 'windows',
  action() {
    BlazeLayout.render('default', { yield: 'windows'});
  }
})

routes.route('/audio', {
  name: 'audio',
  action() {
    BlazeLayout.render('default', { yield: 'audio'});
  }
})
