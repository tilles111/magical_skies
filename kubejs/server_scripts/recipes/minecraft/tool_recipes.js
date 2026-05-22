ServerEvents.recipes(event => {

    function tool_standard(output_material, input_primary, tool_namespace, input_secondary, handle, id, sword, pickaxe, shovel, axe, hoe) {

        if (id == undefined) {
            id = `kubejs:shaped/${output_material}`
        }
        if (input_secondary == undefined) {
            input_secondary = input_primary
        }
        if (handle == undefined) {
            handle = '#forge:rods/wooden'
        }

        if (sword || (sword == undefined)) {
            event.shaped(`${tool_namespace}:${output_material}_sword`, [
                'A',
                'B',
                'C',
            ],{
                A: input_secondary,
                B: input_primary,
                C: handle
            }).id(`${id}_sword`)
        }

        if (pickaxe || (pickaxe == undefined)) {
            event.shaped(`${tool_namespace}:${output_material}_pickaxe`, [
                'ABA',
                ' C ',
                ' C ',
            ],{
                A: input_secondary,
                B: input_primary,
                C: handle
            }).id(`${id}_pickaxe`)
        }

        if (shovel || (shovel == undefined)) {
            event.shaped(`${tool_namespace}:${output_material}_shovel`, [
                'B',
                'C',
                'C',
            ],{
                B: input_primary,
                C: handle
            }).id(`${id}_shovel`)
        }

        if (axe || (axe == undefined)) {
            event.shaped(`${tool_namespace}:${output_material}_axe`, [
                'AB',
                'AC',
                ' C',
            ],{
                A: input_secondary,
                B: input_primary,
                C: handle
            }).id(`${id}_axe`)
        }

        if (hoe || (hoe == undefined)) {
            event.shaped(`${tool_namespace}:${output_material}_hoe`, [
                'AB',
                ' C',
                ' C',
            ],{
                A: input_secondary,
                B: input_primary,
                C: handle
            }).id(`${id}_hoe`)
        }
    }

    event.shaped('kubejs:crude_pickaxe',[
        'P ',
        'SP'
    ],{
        P: 'twigs:pebble',
        S: '#forge:rods/wooden'
    })
    event.shaped('kubejs:crude_axe',[
        'P ',
        'PS'
    ],{
        P: 'twigs:pebble',
        S: '#forge:rods/wooden'
    })

    tool_standard('slate', 'bloodmagic:blankslate', 'kubejs', 'kubejs:inert_slate')
    tool_standard('bronze', '#forge:ingots/bronze', 'kubejs')

})