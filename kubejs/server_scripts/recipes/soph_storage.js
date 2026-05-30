ServerEvents.recipes(event => {
    event.remove({id: '/sophisticatedstorage:*/'})

    function sophStorageMaterial(woodType, planks, slab) {
        event.shaped(Item.of('sophisticatedstorage:chest', `{woodType:"${woodType}"}`),[
            'PPP',
            'PAP',
            'PPP'
        ],{
            P: planks,
            A: '#forge:gems/arcane_crystal'
        })
        event.shaped(Item.of('sophisticatedstorage:barrel', `{woodType:"${woodType}"}`),[
            'PSP',
            'PAP',
            'PSP'
        ],{
            P: planks,
            S: slab,
            A: '#forge:gems/arcane_crystal'
        })
        event.shaped(Item.of('sophisticatedstorage:limited_barrel_1', `{woodType:"${woodType}"}`),[
            'PSP',
            'PAP',
            'PPP'
        ],{
            P: planks,
            S: slab,
            A: '#forge:gems/arcane_crystal'
        })
        event.shaped(Item.of('sophisticatedstorage:limited_barrel_2', `{woodType:"${woodType}"}`),[
            'SPS',
            'PAP',
            'PPP'
        ],{
            P: planks,
            S: slab,
            A: '#forge:gems/arcane_crystal'
        })
        event.shaped(Item.of('sophisticatedstorage:limited_barrel_3', `{woodType:"${woodType}"}`),[
            'SSS',
            'PAP',
            'PPP'
        ],{
            P: planks,
            S: slab,
            A: '#forge:gems/arcane_crystal'
        })
        event.shaped(Item.of('sophisticatedstorage:limited_barrel_4', `{woodType:"${woodType}"}`),[
            'SPS',
            'PAP',
            'SPS'
        ],{
            P: planks,
            S: slab,
            A: '#forge:gems/arcane_crystal'
        })
        event.shaped(Item.of(`sophisticatedstorage:${woodType}_storage_connector`, 8),[
            ' P ',
            'PAP',
            ' P '
        ],{
            P: planks,
            A: '#forge:gems/arcane_crystal'
        })
    }

    sophStorageMaterial('oak', 'ars_nouveau:archwood_planks', 'ars_nouveau:archwood_slab')
    sophStorageMaterial('spruce', 'forbidden_arcanus:edelwood_planks', 'forbidden_arcanus:edelwood_slab')
    sophStorageMaterial('birch', 'wizards_reborn:innocent_wood_planks', 'wizards_reborn:innocent_wood_slab')
    sophStorageMaterial('jungle', 'botania:dreamwood_planks', 'botania:dreamwood_planks_slab')
    sophStorageMaterial('acacia', 'wizards_reborn:arcane_wood_planks', 'wizards_reborn:arcane_wood_slab')
    sophStorageMaterial('dark_oak', 'naturesaura:ancient_planks', 'naturesaura:ancient_planks')
    sophStorageMaterial('cherry', 'eidolon:illwood_planks', 'eidolon:illwood_planks_slab')
    sophStorageMaterial('bamboo', 'eidolon:polished_planks', 'eidolon:polished_planks_slab')
    sophStorageMaterial('crimson', 'botania:livingwood_planks', 'botania:livingwood_planks_slab')
    sophStorageMaterial('warped', 'malum:runewood_planks', 'malum:runewood_planks_slab')

    // Needs revision probably
    event.shaped('sophisticatedstorage:basic_to_copper_tier_upgrade',[
        ' I ',
        'ICI',
        ' I '
    ],{
        I: '#forge:ingots/copper',
        C: '#forge:chests'
    })
    event.shaped('sophisticatedstorage:copper_to_iron_tier_upgrade',[
        ' I ',
        'ICI',
        ' I '
    ],{
        I: '#forge:ingots/pewter',
        C: '#forge:chests'
    })
    event.shaped('sophisticatedstorage:iron_to_gold_tier_upgrade',[
        ' I ',
        'ICI',
        ' I '
    ],{
        I: '#forge:ingots/arcane_gold',
        C: '#forge:chests'
    })
    event.shaped('sophisticatedstorage:gold_to_diamond_tier_upgrade',[
        ' I ',
        'ICI',
        ' I '
    ],{
        I: 'malum:soul_stained_steel_ingot',
        C: '#forge:chests'
    })
    event.shaped('sophisticatedstorage:diamond_to_netherite_tier_upgrade',[
        ' I ',
        'ICI',
        ' I '
    ],{
        I: '#forge:nuggets/terrasteel',
        C: '#forge:chests'
    })
})