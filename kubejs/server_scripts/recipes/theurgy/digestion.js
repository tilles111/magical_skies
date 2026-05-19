ServerEvents.recipes(event => {

    event.remove({id: '/theurgy:.*digestion.*/'})

    function digestion(output, input_items, input_fluid, time, id) {

        if (time == undefined) {
            time = 600
        }
        if (id == undefined) {
            let id_part = input_items.map(input_item => Item.of(input_item).id.split(':')[1])
            id = `kubejs:digestion/${id_part.join('_and_')}_in_${Fluid.of(input_fluid).id.split(':')[1]}_to_${Item.of(output).id.split(':')[1]}`
        }

        event.custom({
            type: 'theurgy:digestion',
            fluid: {
                fluid: Fluid.of(input_fluid).id
            },
            fluidAmount: Fluid.of(input_fluid).amount,
            ingredients: input_items.map(input_item => Item.of(input_item).toJson()),
            result: {
                Count: Item.of(output).count,
                id: Item.of(output).id
            },
            time: time
        }).id(id)

    }

    digestion(Item.of('theurgy:alchemical_sulfur_lead', 2),
        [
            Item.of('theurgy:alchemical_sulfur_gravel', 4),
            'kubejs:aqueous_salt'
        ],
        Fluid.of('kubejs:sourceberry_stew', 750)
    )

    // event.custom({
    //     type: 'theurgy:digestion',
    //     fluid: {
    //         fluid: "kubejs:sourceberry_stew"
    //     },
    //     fluidAmount: 750,
    //     ingredients: [
    //         {
    //             count: 4,
    //             item: 'theurgy:alchemical_sulfur_gravel'
    //         },
    //         {
    //             count: 1,
    //             item: 'kubejs:aqueous_salt'
    //         }
    //     ],
    //     result: { 
    //         Count: 2,
    //         id: 'theurgy:alchemical_sulfur_lead'
    //     },
    //     time: 600
    // })

    digestion(Item.of('theurgy:alchemical_sulfur_tin', 2),
        [
            'theurgy:alchemical_sulfur_lead',
            'kubejs:infernal_salt',
            'kubejs:aqueous_salt'
        ],
        Fluid.of('kubejs:sourceberry_stew', 250)
    )
    digestion(Item.of('theurgy:alchemical_sulfur_iron', 2),
        [
            'theurgy:alchemical_sulfur_tin',
            'kubejs:earthen_salt',
            'kubejs:aqueous_salt'
        ],
        Fluid.of('kubejs:sourceberry_stew', 250)
    )
    digestion(Item.of('theurgy:alchemical_sulfur_copper', 2),
        [
            'theurgy:alchemical_sulfur_iron',
            'kubejs:aerial_salt',
            'kubejs:aqueous_salt'
        ],
        Fluid.of('kubejs:sourceberry_stew', 250)
    )
    
})