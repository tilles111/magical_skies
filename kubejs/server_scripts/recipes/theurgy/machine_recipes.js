ServerEvents.recipes(event => {
    event.remove({output: 'theurgy:sal_ammoniac_accumulator'})
    event.remove({output: 'theurgy:liquefaction_cauldron'})
    event.remove({output: 'theurgy:calcination_oven'})
    event.remove({output: 'theurgy:pyromantic_brazier'})
    event.remove({output: 'theurgy:sal_ammoniac_tank'})
    event.remove({output: 'theurgy:digestion_vat'})

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
    })
    event.shaped('theurgy:liquefaction_cauldron',[
        'BAB',
        'WLW',
        'BLB'
    ],{
        A: '#forge:gems/arcane_crystal',
        L: '#forge:ingots/lead',
        B: 'minecraft:brick',
        W: '#minecraft:logs'
    })
    event.shaped('theurgy:calcination_oven',[
        ' L ',
        'BAB',
        'LTL'
    ],{
        A: '#forge:gems/arcane_crystal',
        L: '#forge:ingots/lead',
        T: 'minecraft:terracotta',
        B: 'minecraft:brick'
    })
    event.shaped('theurgy:pyromantic_brazier',[
        'B B',
        'TCT'
    ],{
        C: '#minecraft:coals',
        T: 'minecraft:terracotta',
        B: 'minecraft:brick'
    })
    event.shaped('theurgy:sal_ammoniac_tank',[
        'L L',
        'BLB',
        'W W'
    ],{
        L: '#forge:ingots/lead',
        B: 'minecraft:brick',
        W: '#forge:rods/wooden'
    })
    event.shaped('theurgy:digestion_vat',[
        ' S ',
        'L L',
        'BBB'
    ],{
        L: '#forge:ingots/lead',
        B: 'minecraft:brick',
        S: 'theurgy:sal_ammoniac_crystal'
    })
})