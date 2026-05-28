ItemEvents.toolTierRegistry(event => {
  event.add('crude', tier => {
    tier.uses = 75
    tier.speed = 2
    tier.attackDamageBonus = 0
    tier.level = 0
    tier.enchantmentValue = 5
    tier.repairIngredient = 'twigs:pebble'
  })
  event.add('slate', tier => {
    tier.uses = 150
    tier.speed = 4
    tier.attackDamageBonus = 1
    tier.level = 1
    tier.enchantmentValue = 16
    tier.repairIngredient = 'kubejs:inert_slate'
  })
  event.add('bronze', tier => {
    tier.uses = 300
    tier.speed = 6
    tier.attackDamageBonus = 2.5
    tier.level = 2
    tier.enchantmentValue = 12
    tier.repairIngredient = '#forge:ingots/bronze'
  })
})

StartupEvents.registry('item', event => {
    event.create('bronze_blend')
    event.create('inert_slate')
    event.create('alchemical_paste')

    event.create('tin_ingot')
      .texture('layer0', 'embers:item/ingot_tin')
      .tag('forge:ingots/tin')
    event.create('tin_plate')
      .texture('layer0', 'embers:item/plate_tin')
      .tag('forge:plates/tin')
    event.create('tin_nugget')
      .texture('layer0', 'embers:item/nugget_tin')
      .tag('forge:nuggets/tin')

    event.create('bronze_ingot')
      .texture('layer0', 'embers:item/ingot_bronze')
      .tag('forge:ingots/bronze')
    event.create('bronze_plate')
      .texture('layer0', 'embers:item/plate_bronze')
      .tag('forge:plates/bronze')
    event.create('bronze_nugget')
      .texture('layer0', 'embers:item/nugget_bronze')
      .tag('forge:nuggets/bronze')

    event.create('slate_sword', 'sword')
      .tier('slate')
      .tag('minecraft:swords')
    event.create('slate_pickaxe', 'pickaxe')
      .tier('slate')
      .tag('minecraft:pickaxes')
    event.create('slate_shovel', 'shovel')
      .tier('slate')
      .tag('minecraft:shovels')
    event.create('slate_axe', 'axe')
      .tier('slate')
      .tag('minecraft:axes')
    event.create('slate_hoe', 'hoe')
      .tier('slate')
      .tag('minecraft:hoes')

    event.create('bronze_sword', 'sword')
      .tier('bronze')
      .texture('layer0', 'embers:item/sword_bronze')
      .tag('minecraft:swords')
    event.create('bronze_pickaxe', 'pickaxe')
      .tier('bronze')
      .texture('layer0', 'embers:item/pickaxe_bronze')
      .tag('minecraft:pickaxes')
    event.create('bronze_shovel', 'shovel')
      .tier('bronze')
      .texture('layer0', 'embers:item/shovel_bronze')
      .tag('minecraft:shovels')
    event.create('bronze_axe', 'axe')
      .tier('bronze')
      .texture('layer0', 'embers:item/axe_bronze')
      .tag('minecraft:axes')
    event.create('bronze_hoe', 'hoe')
      .tier('bronze')
      .texture('layer0', 'embers:item/hoe_bronze')
      .tag('minecraft:hoes')
      
    event.create('crude_pickaxe', 'pickaxe')
      .tier('crude')
      .tag('minecraft:pickaxes')
    event.create('crude_shovel', 'shovel')
      .tier('crude')
      .tag('minecraft:shovels')
    event.create('crude_axe', 'axe')
      .tier('crude')
      .tag('minecraft:axes')

    event.create('sourceberry_stew')
        .maxStackSize(16)
        .food(food => { food
            .hunger(5)
            .saturation(0.3)
            .effect('ars_nouveau:mana_regen', 200, 0, 2)
            .alwaysEdible()
            .eaten(ctx => {
                ctx.player.give('minecraft:bowl')
            })
        })
})