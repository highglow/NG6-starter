import angular from 'angular';
import uiRouter from 'angular-ui-router';
import agentsComponent from './agents.component';
import AgentsService from './agents.service';

let agentsModule = angular.module('agents', [
  uiRouter
])


.config(($stateProvider) => {
  "ngInject";
  
  $stateProvider
    .state('agents', {
      url: '/agents',
      component: 'agents'
    });
})

.component('agents', agentsComponent)

.service('AgentsService', AgentsService)

.name;

export default agentsModule;
