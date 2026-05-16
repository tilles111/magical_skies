ServerEvents.tags('item', event => {
    event.add('caupona:wolfberries', 'ars_nouveau:sourceberry_bush')
    event.add('caupona:sourceberries', 'ars_nouveau:sourceberry_bush')

    // Ash Retagging
    event.remove('forge:dusts/ash', [
        'embers:ash'
    ])

})