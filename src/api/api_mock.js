function later(result) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(result)
        }, 1000);
    });
}


export const api = {
    async search_users(searchstring){
        const result = {
            items: [
                {login: 'joao'},
                {login: 'jose'},
            ]
        }
        return later(result)
    },
    async lista_repos(username){
        const result = [
            {name: 'Django', owner: {login: 'joao'}},
            {name: 'Vue.js', owner: {login: 'jose'}},
        ]
        return later(result)
    }
}