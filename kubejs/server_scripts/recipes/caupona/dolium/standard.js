ServerEvents.recipes(event => {

    event.custom({
        type: "caupona:dolium",
        container: {
            item: 'forbidden_arcanus:arcane_crystal_speck'
        },
        density: 0.0,
        items: [],
        fluid: "theurgy:sal_ammoniac",
        amount: 1000,
        keepInfo: false,
        output: {
            type: "forge:nbt",
            count: 1,
            item: "theurgy:sal_ammoniac_crystal"
        }
    }).id('kubejs:dolium/test')

})