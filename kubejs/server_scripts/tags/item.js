ServerEvents.tags('item', event => {
    event.add('caupona:wolfberries', 'ars_nouveau:sourceberry_bush')
    event.add('caupona:sourceberries', 'ars_nouveau:sourceberry_bush')

    // Lead or Iron tags
    event.add('forge:ingots/lead_or_iron', '#forge:ingots/iron')
    event.add('forge:ingots/lead_or_iron', '#forge:ingots/lead')
    event.add('forge:nuggets/lead_or_iron', '#forge:nuggets/iron')
    event.add('forge:nuggets/lead_or_iron', '#forge:nuggets/lead')
    event.add('forge:plates/lead_or_iron', '#forge:plates/iron')
    event.add('forge:plates/lead_or_iron', '#forge:plates/lead')
    event.add('forge:storage_blocks/lead_or_iron', '#forge:storage_blocks/iron')
    event.add('forge:storage_blocks/lead_or_iron', '#forge:storage_blocks/lead')

    // Ash Retagging
    event.remove('forge:dusts/ash', [
        'embers:ash'
    ])

})