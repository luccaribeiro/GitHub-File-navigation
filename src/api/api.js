import axios from 'axios';

async function fetch_all_pages(url){
    let vaiindo = true
    let result = []
    let page = 1
    while(vaiindo){
        const response = await fetch(`${url}?page=${page}`)
        const tmpitems = await response.json()
        if(tmpitems.length > 0){
            result = result.concat(tmpitems)
            page++
        } else {
            vaiindo = false
        }
    }
    return result
}

export const api = {
    async search_users(searchstring){
        const url = `https://api.github.com/search/users?q=${searchstring}`
        const response = await fetch(url)
        return await response.json()
    },
    async lista_repos(username){
        const url = `https://api.github.com/users/${username}/repos`
        const data = await fetch_all_pages(url)
        return data
    },
    async listaFiles(owner, name, mais) {
        let url = `https://api.github.com/repos/${owner}/${name}/contents`
        if(mais){
            url = url + mais
        }
        const response = await fetch(url)
        return await response.json()
    },
    async listaInfos(user){
        let url = `https://api.github.com/users/${user}`
        const response = await fetch(url)
        return await response.json()
    },
    async conteudoArquivo(url) {
        const response = await axios.get(url)
        return response.data
    },
}
