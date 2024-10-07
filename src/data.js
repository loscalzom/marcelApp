import { v4 as uuidv4 } from "uuid"   
export const workspaces_estado_inicial =
[{
    id: 1,
    workspaceTitle: "General",},
    
    {
        id: 2,
        workspaceTitle: "Consultas",},
        
        {
            id: 3,
            workspaceTitle: "Propuestas",},

            

]

const obtenerWorkspaces = () => {

    let workspaces= localStorage.getItem('workspaces')
    if(workspaces){return JSON.parse(workspaces)}
        else{
            localStorage.setItem("workspaces",JSON.stringify(workspaces_estado_inicial))
            return workspaces_estado_inicial
        }
   
    }
    
const crearWorkspace = (nuevoworkspace) => {
    nuevoworkspace.id=uuidv4()
    let workspaces= obtenerWorkspaces()
    workspaces.push(nuevoworkspace)
    localStorage.setItem("workspaces",JSON.stringify(workspaces))
   
}
   
   
export {obtenerWorkspaces, crearWorkspace}