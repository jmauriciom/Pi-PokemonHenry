const validation = (value) => {
    let errors = {};
    
    if(!/^[A-Za-z]{2,30}$/g.test(value.name)) errors.name = "Only letters"
    if (!value.name) errors.name = "Need a name"

    if (!/\.(jpeg|jpg|gif|png|bmp|svg)$/i.test(value.img)) errors.img = "Enter Url Image"
    if (!value.img) errors.img = "Need an image"

    if(!value.hp) errors.hp = "Need hp"
    if(value.hp < 0 || value.hp > 255) errors.hp = "Hp must be between 0 and 255"

    if(!value.attack) errors.attack = "Need attack"
    if(value.attack < 0 || value.attack > 255) errors.attack = "Attack must be between 0 and 255"

    if(!value.defense) errors.defense = "Need defense"
    if(value.defense < 0 || value.defense > 255) errors.defense = "Defense must be between 0 and 255"

    // if(!value.speed) errors.speed = "Need speed"
    if(value.speed < 0 || value.speed > 255) errors.speed = "Speed must be between 0 and 255"

    // if(!value.height) errors.height = "Need height"
    if(value.height < 0 || value.height > 255) errors.height = "Height must be between 0 and 255"

    // if(!value.weight) errors.weight = "Need weight"
    if(value.weight < 0 || value.weight > 255) errors.weight = "Weight must be between 0 and 255"

    
    return errors
}

export default validation