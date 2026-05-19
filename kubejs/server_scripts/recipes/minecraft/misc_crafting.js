ServerEvents.recipes(event => {
    event.shapeless('9x forbidden_arcanus:arcane_crystal_dust_speck', ['forbidden_arcanus:arcane_crystal_dust'])
    event.shapeless('kubejs:tin_ingot', ['9x #forge:nuggets/tin'])
    event.shapeless('kubejs:bronze_ingot', ['9x #forge:nuggets/bronze'])
    event.shapeless('9x #forge:nuggets/tin', ['kubejs:tin_ingot'])
    event.shapeless('9x #forge:nuggets/bronze', ['kubejs:bronze_ingot'])
})