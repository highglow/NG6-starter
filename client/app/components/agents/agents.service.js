
class AgentsService {

    constructor($q, $http){
        this.$q = $q;
        this.$http = $http;
    }

	search(searchTerm){
		return this.$http
			.get("https://api.ratemyagent.com.au/autosearch/agents?SearchTerm=" + searchTerm)
			.then((response) => {
				return response.data;
			});
	}
}

AgentsService.$inject = ['$q', '$http'];

export default AgentsService;