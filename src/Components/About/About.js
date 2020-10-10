import React, { useState } from 'react';
import ApiContext from "../../ApiContext";
import config from "../../config";
import PromptsApiService from "../../services/prompts-api-service"


// const About = () => {
export default function About(props) {

    // const [prompts, setPrompts] = useState([])

    //this shows prompts in console:
    //but how do i show those prompts on yhe page?
    // fetch(`${config.API_ENDPOINT}/prompts/reveal-cards`)
    //     .then(res => res.json())
    //     .then(data => setPrompts(data))
    //     .catch(error => {
    //         console.error(error.message)
    //     })

    //below doesnt work:

    // Promise.all([
    //     fetch(`${config.API_ENDPOINT}/prompts/reveal-cards`),
    //     // fetch(`${config.API_ENDPOINT}/folders`)
    // ])
    //     .then(([promptsRes]) => {
    //         if (!promptsRes.ok) return promptsRes.json().then((e) => Promise.reject(e));
    //         // if (!foldersRes.ok)
    //         //     return foldersRes.json().then((e) => Promise.reject(e));

    //         return Promise.all([promptsRes.json()]);
    //     })
    //     // .then(([prompts]) => {
    //     //     console.log('this is notes/folders in .then', notes, folders);
    //     //     this.setState({ prompts });
    //     // })
    //     .catch((error) => {
    //         console.error({ error });
    //     });

    //     // renderPrompts = () => {
    //     //     const promptsList = []
    //     //     return promptsList.map(prompt => 
    //     //         <PrompListItem key={prompt.id} prompt={prompt} />
    //     //     )
    //     // }


    return (
        <ApiContext.Consumer>
            {context => {
                // console.log('this is context', context);
                return (
                    <>
                        <h1>More About the Developer<br />
                        & Getting Started on this App!</h1>
                        <h2>Here's a list of card prompts:</h2>
                        {context.prompts.map(p => (<p key={p.id}>{p.prompt_descr}</p>))}
                    </>
                )
            }}
        </ApiContext.Consumer>




    )
}

// return (
//     <ErrorBoundary>
//         <ApiContext.Consumer>
//             {(context) => {
//                 // console.log(context);
//                 console.log("add folder is running");
//                 return (
//                     <>
//                         <form
//                             className="form-submission"
//                             onSubmit={(e) => {
//                                 e.preventDefault();
//                                 console.log("the form has been submitted");
//                                 handleSubmit(context.value);
//                             }}
//                         >
//                             <label htmlFor="folderName">
//                                 Folder Name:
//                   <input
//                                     type="text"
//                                     id="folderName"
//                                     name="folderName"
//                                     onChange={(e) =>
//                                         context.handleFolderNameChange(e.target.value)
//                                     }
//                                     required
//                                 />
//                             </label>
//                             <button type="submit">Submit</button>
//                         </form>
//                     </>
//                 );
//             }}
//         </ApiContext.Consumer>
//     </ErrorBoundary>
// );
