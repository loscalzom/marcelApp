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
        channels: [{ id: 4, channelName: "General" }, { id: 5, channelName: "Calendario" }, { id: 6, channelName: "Tareas" }],
    },

    {
        id: 3,
        workspaceTitle: "Propuestas",
        channels: [{ id: 7, channelName: "General" }, { id: 8, channelName: "Calendario" }, { id: 9, channelName: "Tareas" }],
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
    const workspace = workspaces.find(ws => ws.id == workspaceId)
    workspace.channels.push(newChannel)
    localStorage.setItem("workspaces", JSON.stringify(workspaces))
}

const sendMessage = (message, author, channelId) => {
    let workspaces = getWorkspaces()
    const workspace = workspaces.find(ws => ws.channels.some(ch => ch.id === channelId))
    const channel = workspace.channels.find(ch => ch.id === channelId)

    if (!channel.messages) {
        channel.messages = []
    }

    const newMessage = {
        id: uuidv4(),
        text: message,
        author: author
    }
    channel.messages.push(newMessage)

    localStorage.setItem("workspaces", JSON.stringify(workspaces))

}


export { getWorkspaces, createWorkspace, createChannel, sendMessage }    