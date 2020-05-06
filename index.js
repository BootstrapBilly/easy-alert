import classes from "./index.module.css"

import colours from "./Colours"

import error from "./error.svg"
import info from "./info.svg"
import success from "./success.svg"

const Alert = (text, type, options) => {

    const alert = document.getElementById("container_no_clash_9000")

    alert && alert.remove()

    //?HTML elements
    //container
    const container = document.createElement("div")
    container.classList.add(classes.container)
    container.setAttribute("id", "container_no_clash_9000")

    //inner container
    const inner_container = document.createElement("div")
    inner_container.classList.add(classes.inner_container)
    apply_custom_position(options, inner_container)

    //icon container
    const icon_container = document.createElement("div")
    icon_container.classList.add(classes.icon_container)

    //icon
    const icon = document.createElement("img")
    icon.classList.add(classes.icon)

    //message_container
    const message_container = document.createElement("div")
    message_container.classList.add(classes.message_container)

    //message
    const message = document.createTextNode("test")

    //*Appending all elements to create a component

    container.appendChild(inner_container)
    inner_container.appendChild(icon_container)
    inner_container.appendChild(message_container)
    icon_container.appendChild(icon)
    message_container.appendChild(message)

    //-Setting the icon and colour

    let icon_and_colour;

    if(options && (options.icon || options.color)){

        icon_and_colour = apply_custom_icon(options);

    }

    else icon_and_colour = set_icon_and_colour(type);

    icon_container.style.background=icon_and_colour.color
    icon.src=icon_and_colour.icon

    //document.getElementById("root").insertBefore(container, document.querySelector(".App"))
    document.getElementsByTagName("BODY")[0].appendChild(container)

    setTimeout(() => {
        alert && alert.remove()
    }, 6000); 

}

const set_icon_and_colour = type => {

    if(type === "error") return {color: colours.red, icon: error}
    if(type === "info") return {color:colours.orange, icon:info}
    if(type === "success") return {color:colours.green, icon:success}

}

const apply_custom_position = (options, inner_container) => {

    if(!options) return

    if(options.left) {inner_container.style.left=options.left}
    if(options.right) {inner_container.style.right=options.right}
    if(options.top) {inner_container.style.top=options.top}
    if(options.bottom) {inner_container.style.bottom=options.bottom}

}

const apply_custom_icon = options => {

    if(!options) return

    let icon = error;
    let color = colours.red;

    if(options.icon) icon=options.icon
    if(options.color) color=options.color

    return {icon:icon, color:color}

}


export default Alert



