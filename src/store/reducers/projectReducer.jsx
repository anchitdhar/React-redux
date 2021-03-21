import { createProject } from "../actions/projectActions"

const initState = {
    projects: [
        {title: "Adssad", content: "asdasdsadasd"},
        {title: "asdsadAdssad", content: "kjljkjasdasdsadasd"},
        {title: "dasdsaAdssad", content: "jlknknasdasdsadasd"},
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case "CREATE_PROJECT":
            return{
                ...state,
                projects: state.projects.concat(action.payload)
            }
    
        default:
            return state
    }
}

export default projectReducer