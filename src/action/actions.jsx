import axios from "axios";

function watch(lastRepairing, setLastRepairing, nextRepairing, setNextRepairing, setActive){
    setLastRepairing(lastRepairing)
    setNextRepairing(nextRepairing)
    setActive(true)
}

export const allWorkshops = () => {
    if (sessionStorage.getItem("needReload") === "true"){
        sessionStorage.setItem("needReload", "false")
        document.location.reload()
    }
    try {
        if (!sessionStorage.getItem("date")){
            sessionStorage.setItem("date", new Date())
            axios.get("http://localhost:5000").then((response) => {
                sessionStorage.setItem("workshops", JSON.stringify(response.data))})
        }
        else if ((new Date()).getTime() - new Date(sessionStorage.getItem("date")).getTime() > 1000){
            if (!sessionStorage.getItem("workshops")){
                document.location.reload()
            }
            if (sessionStorage.getItem("needReload") === "true"){
                sessionStorage.setItem("needReload", "false")
                document.location.reload()
            }
            sessionStorage.setItem("date", new Date())
            axios.get("http://localhost:5000").then((response) => {
                sessionStorage.setItem("workshops", JSON.stringify(response.data))})
        }
    } catch (e) {
        console.log(1)
    }
}

export const allModes = () => {
    try {
        if (!sessionStorage.getItem("modes")){
            document.location.reload()
        }
        axios.get("http://localhost:5000/change_mode").then((response) => {
            sessionStorage.setItem("modes", JSON.stringify(response.data))})
    } catch (e) {
        console.log(1)
    }
}

export const setMode = (number) => {
    console.log(number)
    try {
        axios.get("http://localhost:5000/set_mode/" + number).then(() => {
            sessionStorage.setItem("needReload", "true")
            document.location.reload()})
    } catch (e) {
        console.log(1)
    }
}
export default watch