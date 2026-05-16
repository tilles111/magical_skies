ServerEvents.recipes(event => {

    function mortar(output, inputs, id) {

        if (id == undefined) {
            let id_part = inputs.map(input => input.path)
            id = `kubejs:mortar/${id_part.join('_and_')}_to_${Item.of(output).id.split(':')[1]}`
        } // this is kind of cinge
        event.custom({
            type: 'hexalia:mortar_and_pestle',
            ingredients: inputs.map(input => Ingredient.of(input).toJson()),
            output: Item.of(output).toJson()
        }).id(id)

    }

    //Maybe a placeholder?
    mortar(
        'minecraft:gravel',
        [
            'minecraft:cobblestone'
        ]
    )
    mortar(
        Item.of('minecraft:gravel', 2),
        [
            'minecraft:cobblestone',
            'minecraft:cobblestone'
        ]
    )
    mortar(
        Item.of('minecraft:gravel', 3),
        [
            'minecraft:cobblestone',
            'minecraft:cobblestone',
            'minecraft:cobblestone'
        ]
    )
    //Also maybe a placeholder?
    mortar(
        'minecraft:sand',
        [
            'minecraft:gravel'
        ]
    )
    mortar(
        Item.of('minecraft:sand', 2),
        [
            'minecraft:gravel',
            'minecraft:gravel'
        ]
    )
    mortar(
        Item.of('minecraft:sand', 3),
        [
            'minecraft:gravel',
            'minecraft:gravel',
            'minecraft:gravel'
        ]
    )
    
    mortar(
        'forbidden_arcanus:arcane_crystal_dust',
        [
            'forbidden_arcanus:arcane_crystal'
        ]
    )
    mortar(
        Item.of('forbidden_arcanus:arcane_crystal_dust', 2),
        [
            'forbidden_arcanus:arcane_crystal',
            'forbidden_arcanus:arcane_crystal'
        ]
    )
    mortar(
        Item.of('forbidden_arcanus:arcane_crystal_dust', 3),
        [
            'forbidden_arcanus:arcane_crystal',
            'forbidden_arcanus:arcane_crystal',
            'forbidden_arcanus:arcane_crystal'
        ]
    )

    // Arcane Ashes
    event.custom({
        type: "hexalia:mortar_and_pestle",
        ingredients: [
            {
                item: "forbidden_arcanus:arcane_crystal_dust"
            },
            {
                tag: "forge:dusts/ash"
            },
            {
                tag: "forge:dusts/ash"
            }
        ],
        output: Item.of('bloodmagic:arcaneashes', '{Damage:10}').toJson()
    })
})