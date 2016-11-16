import './navbar.html';
Template.navbar.events({
  'click .nav' (event){
    event.preventDefault();
    FlowRouter.go('/')
  }
})
