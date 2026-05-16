ServerEvents.recipes(event => {
    event.remove({output: 'forbidden_arcanus:arcane_crystal_dust', type: 'minecraft:smelting'})
    event.remove({output: 'forbidden_arcanus:arcane_crystal_dust', type: 'minecraft:blasting'})

    event.smelting('supplementaries:ash', '#minecraft:planks')
})