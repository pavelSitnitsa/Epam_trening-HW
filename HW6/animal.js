let animal = {
    name: 'Animal',
    move(){
        return(`${this.name}, moves`)
    }
}

let cat = {
    name: 'Cat',
    __proto__: animal,

}

console.log(cat.move())