// import TokenService from '../services/token-service'
import config from '../config'

const PromptsApiService = {
    getPrompts() {
        return fetch(`${config.API_ENDPOINT}/prompts/reveal-cards`, {
            headers: {},
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
    // fetch(`${config.API_ENDPOINT}/prompts/reveal-cards`)
    //     .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(error => {
    //     console.error(error.message)
    // })
    // getPrompt(promptId) {
    //     return fetch(`${config.API_ENDPOINT}/prompts/${promptId}`, {
    //         headers: {
    //             'authorization': `bearer ${TokenService.getAuthToken()}`,
    //         },
    //     })
    //         .then(res =>
    //             (!res.ok)
    //                 ? res.json().then(e => Promise.reject(e))
    //                 : res.json()
    //         )
    // }

}

export default PromptsApiService