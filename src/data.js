import { v4 as uuidv4 } from "uuid"
export const initialWorkspaces =
    [{
        id: 1,
        workspaceTitle: "General",
        channels: [{
            id: 1,
            channelName: "General",
            messages: [{ id: 1, text: "Hola", author: "Marcelo" },
            { id: 2, text: "Como estas?", author: "Juan" },
            { id: 3, text: "Todo bien. Estoy esperando para comenzar el trabajo.Ni bien lo haga, me comunicaré por WhatsApp", author: "Marcelo" }]
        },
        {
            id: 2,
            channelName: "Calendario"
        },
        {
            id: 3,
            channelName: "Tareas"
        }],
    },

    {
        id: 2,
        workspaceTitle: "Consultas",
        channels: [{ id: 1, channelName: "General" }, { id: 2, channelName: "Calendario" }, { id: 3, channelName: "Tareas" }],
    },

    {
        id: 3,
        workspaceTitle: "Propuestas",
        channels: [{ id: 1, channelName: "General" }, { id: 2, channelName: "Calendario" }, { id: 3, channelName: "Tareas" }],
    },

    ]

const getWorkspaces = () => {

    let workspaces = localStorage.getItem('workspaces')
    if (workspaces) { return JSON.parse(workspaces) }
    else {
        localStorage.setItem("workspaces", JSON.stringify(initialWorkspaces))
        return initialWorkspaces
    }

}

const createWorkspace = (newWorkspace) => {
    newWorkspace.id = uuidv4()
    let workspaces = getWorkspaces()
    workspaces.push(newWorkspace)
    localStorage.setItem("workspaces", JSON.stringify(workspaces))

}


const createChannel = (newChannel, workspaceId) => {
    newChannel.id = uuidv4()
    let workspaces = getWorkspaces()
    const workspace = workspaces.find(ws => ws.id == workspaceId);
    if (workspace) {
        
        workspace.channels.push(newChannel);
        
        
        localStorage.setItem("workspaces", JSON.stringify(workspaces));
    }
} 




export { getWorkspaces, createWorkspace, createChannel }    