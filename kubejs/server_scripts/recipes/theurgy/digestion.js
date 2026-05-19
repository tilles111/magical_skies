ServerEvents.recipes(event => {
    event.remove({id: '/theurgy:.*digestion.*/'})
    event.custom({
        type: 'theurgy:digestion',
        fluid: {
            fluid: "kubejs:sourceberry_stew"
        },
        fluidAmount: 750,
        ingredients: [
            {
                count: 4,
                item: 'theurgy:alchemical_sulfur_gravel'
            },
            {
                count: 1,
                item: 'kubejs:aqueous_salt'
            }
        ],
        result: { 
            Count: 2,
            id: 'theurgy:alchemical_sulfur_lead'
        },
        time: 600
    })

    event.custom({
        type: 'theurgy:digestion',
        fluid: {
            fluid: "kubejs:sourceberry_stew"
        },
        fluidAmount: 250,
        ingredients: [
            {
                count: 1,
                item: 'theurgy:alchemical_sulfur_lead'
            },
            {
                count: 1,
                item: 'kubejs:infernal_salt'
            },
            {
                count: 1,
                item: 'kubejs:aqueous_salt'
            }
        ],
        result: { 
            Count: 2,
            id: 'theurgy:alchemical_sulfur_tin'
        },
        time: 600
    })
    event.custom({
        type: 'theurgy:digestion',
        fluid: {
            fluid: "kubejs:sourceberry_stew"
        },
        fluidAmount: 250,
        ingredients: [
            {
                count: 1,
                item: 'theurgy:alchemical_sulfur_tin'
            },
            {
                count: 1,
                item: 'kubejs:earthen_salt'
            },
            {
                count: 1,
                item: 'kubejs:aqueous_salt'
            }
        ],
        result: { 
            Count: 2,
            id: 'theurgy:alchemical_sulfur_iron'
        },
        time: 600
    })
    event.custom({
        type: 'theurgy:digestion',
        fluid: {
            fluid: "kubejs:sourceberry_stew"
        },
        fluidAmount: 250,
        ingredients: [
            {
                count: 1,
                item: 'theurgy:alchemical_sulfur_iron'
            },
            {
                count: 1,
                item: 'kubejs:aerial_salt'
            },
            {
                count: 1,
                item: 'kubejs:aqueous_salt'
            }
        ],
        result: { 
            Count: 2,
            id: 'theurgy:alchemical_sulfur_copper'
        },
        time: 600
    })
})