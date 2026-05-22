ServerEvents.recipes(event => {
    event.remove({id: 'forbidden_arcanus:smelting/arcane_crystal_dust_from_smelting'})
    event.remove({id: 'forbidden_arcanus:blasting/arcane_crystal_dust_from_blasting'})

    function smelt(output, input, smelting, blasting, smoking, campfireCooking, duration, xp, id, duration_fast, duration_slow) {

        // there's probably a better way to do this
        if (duration == undefined) {
            duration = 200
        }
        if (duration_fast == undefined) {
            duration_fast = duration/2
        }
        if (duration_slow == undefined) {
            duration_slow = duration*3
        }
        if (xp == undefined) {
            xp = 0
        }

        var id_end = `${Item.of(input).id.split(':')[1]}_to_${Item.of(output).id.split(':')[1]}`
        var id_full = 'kubejs:smelt/oops_lol'

        // ditto
        if (smelting == undefined || smelting) {
            if (id == undefined) {
                id_full = `kubejs:smelting/${id_end}`
            } else {
                id_full = `${id}_smelting`
            }
            event.smelting(output, input, xp, duration).id(id_full)
        }
        if (!(blasting == undefined) && blasting) {
            if (id == undefined) {
                id_full = `kubejs:blasting/${id_end}`
            } else {
                id_full = `${id}_blasting`
            }
            event.blasting(output, input, xp, duration_fast).id(id_full)
        }
        if (!(smoking == undefined) && smoking) {
            if (id == undefined) {
                id_full = `kubejs:smoking/${id_end}`
            } else {
                id_full = `${id}_smoking`
            }
            event.smoking(output, input, xp, duration_fast).id(id_full)
        }
        if (!(campfireCooking == undefined) && campfireCooking) {
            if (id == undefined) {
                id_full = `kubejs:campfire_cooking/${id_end}`
            } else {
                id_full = `${id}_campfire_cooking`
            }
            event.campfireCooking(output, input, xp, duration_slow).id(id_full)
        }

    }

    smelt('supplementaries:ash', '#minecraft:planks')
    smelt('kubejs:bronze_ingot', 'kubejs:bronze_blend', true, true)

})