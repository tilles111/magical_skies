ServerEvents.recipes(event => {
    event.remove({id: 'theurgy:crafting/shaped/sal_ammoniac_accumulator'})
    event.remove({id: 'theurgy:crafting/shaped/liquefaction_cauldron'})
    event.remove({id: 'theurgy:crafting/shaped/calcination_oven'})
    event.remove({id: 'theurgy:crafting/shaped/pyromantic_brazier'})
    event.remove({id: 'theurgy:crafting/shaped/sal_ammoniac_tank'})
    event.remove({id: 'theurgy:crafting/shaped/digestion_vat'})

    const id_prefix = 'kubejs:shaped/'

    event.shaped('theurgy:sal_ammoniac_accumulator',[
        'SAS',
        'LGL',
        'WLW'
    ],{
        S: '#forge:stone',
        A: '#forge:gems/arcane_crystal',
        L: '#forge:ingots/lead',
        G: '#forge:glass',
        W: '#forge:rods/wooden'
    }).id('kubejs:shaped/sal_ammoniac_accumulator')
    event.shaped('theurgy:liquefaction_cauldron',[
        'BAB',
        'WLW',
        'BLB'
    ],{
        A: '#forge:gems/arcane_crystal',
        L: '#forge:ingots/lead',
        B: 'minecraft:brick',
        W: '#minecraft:logs'
    }).id('kubejs:shaped/liquefaction_cauldron')
    event.shaped('theurgy:calcination_oven',[
        ' L ',
        'BAB',
        'LTL'
    ],{
        A: '#forge:gems/arcane_crystal',
        L: '#forge:ingots/lead',
        T: 'minecraft:terracotta',
        B: 'minecraft:brick'
    }).id('kubejs:shaped/calcination_oven')
    event.shaped('theurgy:pyromantic_brazier',[
        'B B',
        'TCT'
    ],{
        C: '#minecraft:coals',
        T: 'minecraft:terracotta',
        B: 'minecraft:brick'
    }).id('kubejs:shaped/pyromantic_brazier')
    event.shaped('theurgy:sal_ammoniac_tank',[
        'L L',
        'BLB',
        'W W'
    ],{
        L: '#forge:ingots/lead',
        B: 'minecraft:brick',
        W: '#forge:rods/wooden'
    }).id('kubejs:shaped/sal_ammoniac_tank')
    event.shaped('theurgy:digestion_vat',[
        ' S ',
        'L L',
        'BBB'
    ],{
        L: '#forge:ingots/lead',
        B: 'minecraft:brick',
        S: 'theurgy:sal_ammoniac_crystal'
    }).id('kubejs:shaped/digestion_vat')
})