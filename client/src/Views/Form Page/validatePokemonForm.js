const validation = (value) => {
    let errors = {};
    
    if (!value.name) errors.name = "Need a name"
    if(!/^[A-Za-z]{2,30}$/g.test(value.name)) errors.name = "Only letters"

    if (!value.img) errors.img = "Need an image"
    if (!/\.(jpeg|jpg|gif|png|bmp|svg)$/i.test(value.img)) errors.img = "Enter Url Image"

    if(!value.hp) errors.hp = "Need a hp"
    if(value.hp < 0 || value.hp > 255) errors.hp = "Hp must be between 0 and 255"

    if(!value.attack) errors.attack = "Need an attack"
    if(value.attack < 0 || value.attack > 255) errors.attack = "Attack must be between 0 and 255"

    if(!value.defense) errors.defense = "Need a defense"
    if(value.defense < 0 || value.defense > 255) errors.defense = "Defense must be between 0 and 255"

    if(!value.speed) errors.speed = "Need a speed"
    if(value.speed < 0 || value.speed > 255) errors.speed = "Speed must be between 0 and 255"

    if(!value.height) errors.height = "Need a height"
    if(value.height < 0 || value.height > 255) errors.height = "Height must be between 0 and 255"

    if(!value.weight) errors.weight = "Need a weight"
    if(value.weight < 0 || value.weight > 255) errors.weight = "Weight must be between 0 and 255"

    return errors
}

export default validation