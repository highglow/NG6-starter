class AgentsController {
  constructor($http, AgentsService) {
    this.name = 'agents';
    this.agents = [];
    this.http = $http;
    this.AgentsService = AgentsService;
  }

  search(userInput){
	this.AgentsService.search(userInput)
		.then((data) => {
			console.log(data)
			this.agents = data.Results;
		})
	console.log(this.agents)
  }

}

AgentsController.$inject = ['$http', 'AgentsService'];

export default AgentsController;
