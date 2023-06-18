import { HasFormatter } from "../interfces/hasFormatter";

export class ListTemplate{
    constructor( private container: HTMLUListElement){}

    renderFunction(type: HasFormatter, title: string, position: 'start'|'end'){
        const li = document.createElement('li')

        const h4 = document.createElement('h4')
        h4.innerText = title
        li.append(h4)

        const p = document.createElement('p')
        p.innerText = type.format()
        li.append(p)

        if(position === 'start'){
            this.container.prepend(li)
        } else {
            this.container.append(li)
        }
    }
}