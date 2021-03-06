import {ClassFeatures} from "./classFeatures.js"	

// Namespace SW5e Configuration Values
export const SW5E = {};

// ASCII Artwork
SW5E.ASCII = `
 ___________      ___________       
/   _____/  \\    /  \\   ____/ ____  
\\_____  \\\\   \\/\\/   /____  \\_/ __ \\ 
/        \\\\        //       \\  ___/ 
\\______  / \\__/\\  //______  /\\__  >
       \\/       \\/        \\/    \\/ `;


/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
SW5E.abilities = {
  "str": "SW5E.AbilityStr",
  "dex": "SW5E.AbilityDex",
  "con": "SW5E.AbilityCon",
  "int": "SW5E.AbilityInt",
  "wis": "SW5E.AbilityWis",
  "cha": "SW5E.AbilityCha"
};

SW5E.abilityAbbreviations = {
  "str": "SW5E.AbilityStrAbbr",
  "dex": "SW5E.AbilityDexAbbr",
  "con": "SW5E.AbilityConAbbr",
  "int": "SW5E.AbilityIntAbbr",
  "wis": "SW5E.AbilityWisAbbr",
  "cha": "SW5E.AbilityChaAbbr"
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
SW5E.alignments = {
  'll': "SW5E.AlignmentLL",
  'nl': "SW5E.AlignmentNL",
  'cl': "SW5E.AlignmentCL",
  'lb': "SW5E.AlignmentLB",
  'bn': "SW5E.AlignmentBN",
  'cb': "SW5E.AlignmentCB",
  'ld': "SW5E.AlignmentLD",
  'nd': "SW5E.AlignmentND",
  'cd': "SW5E.AlignmentCD"
};

/* -------------------------------------------- */

/**
 * An enumeration of item attunement types
 * @enum {number}
 */
SW5E.attunementTypes = {
  NONE: 0,
  REQUIRED: 1,
  ATTUNED: 2,
}

/**
 * An enumeration of item attunement states
 * @type {{"0": string, "1": string, "2": string}}
 */
SW5E.attunements = {
  0: "SW5E.AttunementNone",
  1: "SW5E.AttunementRequired",
  2: "SW5E.AttunementAttuned"
};

/* -------------------------------------------- */


SW5E.weaponProficiencies = {
  "sim": "SW5E.WeaponSimpleProficiency",
  "mar": "SW5E.WeaponMartialProficiency"
};

SW5E.toolProficiencies = {
  "armor": "SW5E.ToolArmormech",
  "arms": "SW5E.ToolArmstech",
  "arti": "SW5E.ToolArtificer",
  "art": "SW5E.ToolArtist",
  "astro": "SW5E.ToolAstrotech",
  "bio": "SW5E.ToolBiotech",
  "con": "SW5E.ToolConstructor",
  "cyb": "SW5E.ToolCybertech",
  "jew": "SW5E.ToolJeweler",
  "sur": "SW5E.ToolSurveyor",
  "syn": "SW5E.ToolSynthweaver",
  "tin": "SW5E.ToolTinker",
  "ant": "SW5E.ToolAntitoxkit",
  "arc": "SW5E.ToolArchaeologistKit",
  "aud": "SW5E.ToolAudiotechKit",
  "bioa": "SW5E.ToolBioanalysisKit",
  "brew": "SW5E.ToolBrewerKit",
  "chef": "SW5E.ToolChefKit",
  "demo": "SW5E.ToolDemolitionKit",
  "disg": "SW5E.ToolDisguiseKit",
  "forg": "SW5E.ToolForgeryKit",
  "mech": "SW5E.ToolMechanicKit",
  "game": "SW5E.ToolGamingSet",
  "poi": "SW5E.ToolPoisonKit",
  "scav": "SW5E.ToolScavengingKit",
  "secur": "SW5E.ToolSecurityKit",
  "slic": "SW5E.ToolSlicerKit",
  "spice": "SW5E.ToolSpiceKit",
  "music": "SW5E.ToolMusicalInstrument",
  "vehicle": "SW5E.ToolVehicle"
};


/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur in SW5e
 * @type {Object}
 */
SW5E.timePeriods = {
  "inst": "SW5E.TimeInst",
  "turn": "SW5E.TimeTurn",
  "round": "SW5E.TimeRound",
  "minute": "SW5E.TimeMinute",
  "hour": "SW5E.TimeHour",
  "day": "SW5E.TimeDay",
  "month": "SW5E.TimeMonth",
  "year": "SW5E.TimeYear",
  "perm": "SW5E.TimePerm",
  "spec": "SW5E.Special"
};


/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
SW5E.abilityActivationTypes = {
  "none": "SW5E.None",
  "action": "SW5E.Action",
  "bonus": "SW5E.BonusAction",
  "reaction": "SW5E.Reaction",
  "minute": SW5E.timePeriods.minute,
  "hour": SW5E.timePeriods.hour,
  "day": SW5E.timePeriods.day,
  "special": SW5E.timePeriods.spec,
  "legendary": "SW5E.LegAct",
  "lair": "SW5E.LairAct",
  "crew": "SW5E.VehicleCrewAction"
};

/* -------------------------------------------- */


SW5E.abilityConsumptionTypes = {
  "ammo": "SW5E.ConsumeAmmunition",
  "attribute": "SW5E.ConsumeAttribute",
  "material": "SW5E.ConsumeMaterial",
  "charges": "SW5E.ConsumeCharges"
};


/* -------------------------------------------- */

// Creature Sizes
SW5E.actorSizes = {
  "tiny": "SW5E.SizeTiny",
  "sm": "SW5E.SizeSmall",
  "med": "SW5E.SizeMedium",
  "lg": "SW5E.SizeLarge",
  "huge": "SW5E.SizeHuge",
  "grg": "SW5E.SizeGargantuan"
};

SW5E.tokenSizes = {
  "tiny": 1,
  "sm": 1,
  "med": 1,
  "lg": 2,
  "huge": 3,
  "grg": 4
};

/* -------------------------------------------- */

/**
 * Classification types for item action types
 * @type {Object}
 */
SW5E.itemActionTypes = {
  "mwak": "SW5E.ActionMWAK",
  "rwak": "SW5E.ActionRWAK",
  "mpak": "SW5E.ActionMPAK",
  "rpak": "SW5E.ActionRPAK",
  "save": "SW5E.ActionSave",
  "heal": "SW5E.ActionHeal",
  "abil": "SW5E.ActionAbil",
  "util": "SW5E.ActionUtil",
  "other": "SW5E.ActionOther"
};

/* -------------------------------------------- */

SW5E.itemCapacityTypes = {
  "items": "SW5E.ItemContainerCapacityItems",
  "weight": "SW5E.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
SW5E.limitedUsePeriods = {
  "sr": "SW5E.ShortRest",
  "lr": "SW5E.LongRest",
  "day": "SW5E.Day",
  "charges": "SW5E.Charges",
  "recharge": "SW5E.Recharge",
  "refitting": "SW5E.Refitting"
};


/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
 * @type {Object}
 */
SW5E.equipmentTypes = {
  "light": "SW5E.EquipmentLight",
  "medium": "SW5E.EquipmentMedium",
  "heavy": "SW5E.EquipmentHeavy",
  "hyper": "SW5E.EquipmentHyperdrive",
  "bonus": "SW5E.EquipmentBonus",
  "natural": "SW5E.EquipmentNatural",
  "powerc": "SW5E.EquipmentPowerCoupling",
  "reactor": "SW5E.EquipmentReactor",  
  "shield": "SW5E.EquipmentShield",
  "clothing": "SW5E.EquipmentClothing",
  "trinket": "SW5E.EquipmentTrinket",
  "ssarmor": "SW5E.EquipmentStarshipArmor",
  "ssshield": "SW5E.EquipmentStarshipShield",
  "vehicle": "SW5E.EquipmentVehicle"
};


/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
SW5E.armorProficiencies = {
  "lgt": SW5E.equipmentTypes.light,
  "med": SW5E.equipmentTypes.medium,
  "hvy": SW5E.equipmentTypes.heavy,
  "shl": "SW5E.EquipmentShieldProficiency"
};


/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
SW5E.consumableTypes = {
  "adrenal": "SW5E.ConsumableAdrenal",
  "poison": "SW5E.ConsumablePoison",
  "explosive": "SW5E.ConsumableExplosive",
  "food": "SW5E.ConsumableFood",
  "medpac": "SW5E.ConsumableMedpac",
  "technology": "SW5E.ConsumableTechnology",
  "ammo": "SW5E.ConsumableAmmunition",
  "trinket": "SW5E.ConsumableTrinket",
  "force": "SW5E.ConsumableForce",
  "tech": "SW5E.ConsumableTech"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 5e system
 * @type {Object}
 */
SW5E.currencies = {
  "CR": "SW5E.CurrencyCR",
  };

/* -------------------------------------------- */


// Damage Types
SW5E.damageTypes = {
  "acid": "SW5E.DamageAcid",
  "cold": "SW5E.DamageCold",
  "energy": "SW5E.DamageEnergy",
  "fire": "SW5E.DamageFire",
  "force": "SW5E.DamageForce",
  "ion": "SW5E.DamageIon",
  "kinetic": "SW5E.DamageKinetic",
  "lightning": "SW5E.DamageLightning",
  "necrotic": "SW5E.DamageNecrotic",
  "poison": "SW5E.DamagePoison",
  "psychic": "SW5E.DamagePsychic",
  "sonic": "SW5E.DamageSonic"
};

// Damage Resistance Types
SW5E.damageResistanceTypes = duplicate(SW5E.damageTypes);

/* -------------------------------------------- */


// armor Types
SW5E.armorPropertiesTypes = {
"Absorptive": "SW5E.ArmorProperAbsorptive",
"Agile": "SW5E.ArmorProperAgile",
"Anchor": "SW5E.ArmorProperAnchor",
"Avoidant": "SW5E.ArmorProperAvoidant",
"Barbed": "SW5E.ArmorProperBarbed",
"Bulky": "SW5E.ArmorProperBulky",
"Charging": "SW5E.ArmorProperCharging",
"Concealing": "SW5E.ArmorProperConcealing",
"Cumbersome": "SW5E.ArmorProperCumbersome",
"Gauntleted": "SW5E.ArmorProperGauntleted",
"Imbalanced": "SW5E.ArmorProperImbalanced",
"Impermeable": "SW5E.ArmorProperImpermeable",
"Insulated": "SW5E.ArmorProperInsulated",
"Interlocking": "SW5E.ArmorProperInterlocking",
"Lambent": "SW5E.ArmorProperLambent",
"Lightweight": "SW5E.ArmorProperLightweight",
"Magnetic": "SW5E.ArmorProperMagnetic",
"Obscured": "SW5E.ArmorProperObscured",
"Obtrusive": "SW5E.ArmorProperObtrusive",
"Powered": "SW5E.ArmorProperPowered",
"Reactive": "SW5E.ArmorProperReactive",
"Regulated": "SW5E.ArmorProperRegulated",
"Reinforced": "SW5E.ArmorProperReinforced",
"Responsive": "SW5E.ArmorProperResponsive",
"Rigid": "SW5E.ArmorProperRigid",
"Silent": "SW5E.ArmorProperSilent",
"Spiked": "SW5E.ArmorProperSpiked",
"Strength": "SW5E.ArmorProperStrength",
"Steadfast": "SW5E.ArmorProperSteadfast",
"Versatile": "SW5E.ArmorProperVersatile"
};

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
SW5E.movementTypes = {
  "burrow": "SW5E.MovementBurrow",
  "climb": "SW5E.MovementClimb",
  "fly": "SW5E.MovementFly",
  "swim": "SW5E.MovementSwim",
  "walk": "SW5E.MovementWalk",
}

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
SW5E.movementUnits = {
  "ft": "SW5E.DistFt",
  "mi": "SW5E.DistMi"
}

/**
 * The valid units of measure for the range of an action or effect.
 * This object automatically includes the movement units from SW5E.movementUnits
 * @type {Object<string,string>}
 */
SW5E.distanceUnits = {
  "none": "SW5E.None",
  "self": "SW5E.DistSelf",
  "touch": "SW5E.DistTouch",
  "spec": "SW5E.Special",
  "any": "SW5E.DistAny"
};
for ( let [k, v] of Object.entries(SW5E.movementUnits) ) {
  SW5E.distanceUnits[k] = v;
}

/* -------------------------------------------- */


/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules
 * @type {Object}
 */
SW5E.encumbrance = {
  currencyPerWeight: 50,
  strMultiplier: 15,
  vehicleWeightMultiplier: 2000 // 2000 lbs in a ton
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied in SW5e
 * @type {Object}
 */
SW5E.targetTypes = {
  "none": "SW5E.None",
  "self": "SW5E.TargetSelf",
  "creature": "SW5E.TargetCreature",
  "droid": "SW5E.TargetDroid",
  "ally": "SW5E.TargetAlly",
  "enemy": "SW5E.TargetEnemy",
  "object": "SW5E.TargetObject",
  "space": "SW5E.TargetSpace",
  "radius": "SW5E.TargetRadius",
  "sphere": "SW5E.TargetSphere",
  "cylinder": "SW5E.TargetCylinder",
  "cone": "SW5E.TargetCone",
  "square": "SW5E.TargetSquare",
  "cube": "SW5E.TargetCube",
  "line": "SW5E.TargetLine",
  "starship": "SW5E.TargetStarship",
  "wall": "SW5E.TargetWall",
  "weapon": "SW5E.TargetWeapon"   
};


/* -------------------------------------------- */


/**
 * Map the subset of target types which produce a template area of effect
 * The keys are SW5E target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
SW5E.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};


/* -------------------------------------------- */

// Healing Types
SW5E.healingTypes = {
  "healing": "SW5E.Healing",
  "temphp": "SW5E.HealingTemp"
};


/* -------------------------------------------- */


/**
 * Enumerate the denominations of hit dice which can apply to classes in the SW5E system
 * @type {Array.<string>}
 */
SW5E.hitDieTypes = ["d4", "d6", "d8", "d10", "d12", "d20"];


/* -------------------------------------------- */

/**
 * The set of possible sensory perception types which an Actor may have
 * @type {object}
 */
SW5E.senses = {
  "blindsight": "SW5E.SenseBlindsight",
  "darkvision": "SW5E.SenseDarkvision",
  "tremorsense": "SW5E.SenseTremorsense",
  "truesight": "SW5E.SenseTruesight"
};

/* -------------------------------------------- */

/**
 * The set of skill which can be trained in SW5e
 * @type {Object}
 */
SW5E.skills = {
  "acr": "SW5E.SkillAcr",
  "ani": "SW5E.SkillAni",
  "ath": "SW5E.SkillAth",
  "dec": "SW5E.SkillDec",
  "ins": "SW5E.SkillIns",
  "itm": "SW5E.SkillItm",
  "inv": "SW5E.SkillInv",
  "lor": "SW5E.SkillLor",
  "med": "SW5E.SkillMed",
  "nat": "SW5E.SkillNat",
  "prc": "SW5E.SkillPrc",
  "prf": "SW5E.SkillPrf",
  "per": "SW5E.SkillPer",
  "pil": "SW5E.SkillPil",
  "slt": "SW5E.SkillSlt",
  "ste": "SW5E.SkillSte",
  "sur": "SW5E.SkillSur",
  "tec": "SW5E.SkillTec"
};

/* -------------------------------------------- */

/**
 * The set of starship skills which can be trained in SW5e
 * @type {Object}
 */
SW5E.starshipSkills = {
  "ast": "SW5E.StarshipSkillAst",
  "bst": "SW5E.StarshipSkillBst",
  "dat": "SW5E.StarshipSkillDat",
  "hid": "SW5E.StarshipSkillHid",
  "imp": "SW5E.StarshipSkillImp",
  "int": "SW5E.StarshipSkillInt",
  "man": "SW5E.StarshipSkillMan",
  "men": "SW5E.StarshipSkillMen",
  "pat": "SW5E.StarshipSkillPat",
  "prb": "SW5E.StarshipSkillPrb",
  "ram": "SW5E.StarshipSkillRam",
  "reg": "SW5E.StarshipSkillReg",
  "scn": "SW5E.StarshipSkillScn",
  "swn": "SW5E.StarshipSkillSwn"
};


/* -------------------------------------------- */

SW5E.powerPreparationModes = {
  "prepared": "SW5E.PowerPrepPrepared",
  "always": "SW5E.PowerPrepAlways",
  "atwill": "SW5E.PowerPrepAtWill",
  "innate": "SW5E.PowerPrepInnate"
};

SW5E.powerUpcastModes = ["always", "prepared"];

/**
 * The available choices for power progression for a character class
 * @type {Object}
 */

SW5E.powerProgression = {
  "none": "SW5E.PowerNone",
  "consular": "SW5E.PowerProgCns",
  "engineer": "SW5E.PowerProgEng",
  "guardian": "SW5E.PowerProgGrd",
  "scout": "SW5E.PowerProgSct",
  "sentinel": "SW5E.PowerProgSnt"
};

/**
 * The max number of known powers available to each class per level
 */

SW5E.powersKnown = {
  "none": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "consular": [9,11,13,15,17,19,21,23,25,26,28,29,31,32,34,35,37,38,39,40],
  "engineer": [6,7,9,10,12,13,15,16,18,19,21,22,23,24,25,26,27,28,29,30],
  "guardian": [5,7,9,10,12,13,14,15,17,18,19,20,22,23,24,25,27,28,29,30],
  "scout": [0,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23],
  "sentinel": [7,9,11,13,15,17,18,19,21,22,24,25,26,28,29,30,32,33,34,35]
};

/**
 * The max number of powers cast for each power level per long rest
 */

SW5E.powerLimit = {
  "none": [0,0,0,0,0,0,0,0,0],
  "consular": [1000,1000,1000,1000,1000,1,1,1,1],
  "engineer": [1000,1000,1000,1000,1000,1,1,1,1],
  "guardian": [1000,1000,1000,1000,1,0,0,0,0],
  "scout": [1000,1000,1000,1,1,0,0,0,0],
  "sentinel": [1000,1000,1000,1000,1,1,1,0,0],
  "innate": [1000,1000,1000,1000,1000,1000,1000,1000,1000],
  "dual": [1000,1000,1000,1000,1000,1,1,1,1]
};

/**
 * The max level of a known/overpowered power available to each class per level
 */

SW5E.powerMaxLevel = {
  "none": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "consular": [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,9,9],
  "engineer": [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,9,9],
  "guardian": [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5],
  "scout": [0,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5],
  "sentinel": [1,1,2,2,2,3,3,3,4,4,5,5,5,6,6,6,7,7,7,7],
  "multi": [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,9,9],
  "innate": [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,9,9],
  "dual": [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,9,9]
};

/**
 * The number of base force/tech points available to each class per level
 */

SW5E.powerPoints = {
  "none": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "consular": [4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80],
  "engineer": [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40],
  "guardian": [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40],
  "scout": [0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  "sentinel": [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60]
};

/* -------------------------------------------- */

/**
 * The available choices for how power damage scaling may be computed
 * @type {Object}
 */
SW5E.powerScalingModes = {
  "none": "SW5E.PowerNone",
  "atwill": "SW5E.PowerAtWill",
  "level": "SW5E.PowerLevel"
};

/* -------------------------------------------- */


/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 */
SW5E.weaponTypes = {

  "ammo": "SW5E.WeaponAmmo",
  "improv": "SW5E.WeaponImprov",  
  "martialVW": "SW5E.WeaponMartialVW",
  "martialB": "SW5E.WeaponMartialB",
  "martialLW": "SW5E.WeaponMartialLW",
  "natural": "SW5E.WeaponNatural",  
  "siege": "SW5E.WeaponSiege",
  "simpleVW": "SW5E.WeaponSimpleVW",
  "simpleB": "SW5E.WeaponSimpleB",
  "simpleLW": "SW5E.WeaponSimpleLW",
  "primary (starship)": "SW5E.WeaponPrimarySW",
  "secondary (starship)": "SW5E.WeaponSecondarySW",
  "tertiary (starship)": "SW5E.WeaponTertiarySW",
  "quaternary (starship)": "SW5E.WeaponQuaternarySW"
};


/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
SW5E.weaponProperties = {
  "amm": "SW5E.WeaponPropertiesAmm",
  "aut": "SW5E.WeaponPropertiesAut",
  "bur": "SW5E.WeaponPropertiesBur",
  "con": "SW5E.WeaponPropertiesCon",
  "def": "SW5E.WeaponPropertiesDef",
  "dex": "SW5E.WeaponPropertiesDex",
  "dir": "SW5E.WeaponPropertiesDir",
  "drm": "SW5E.WeaponPropertiesDrm",
  "dgd": "SW5E.WeaponPropertiesDgd",
  "dis": "SW5E.WeaponPropertiesDis",
  "dpt": "SW5E.WeaponPropertiesDpt",
  "dou": "SW5E.WeaponPropertiesDou",
  "exp": "SW5E.WeaponPropertiesExp",
  "fin": "SW5E.WeaponPropertiesFin",
  "fix": "SW5E.WeaponPropertiesFix",
  "foc": "SW5E.WeaponPropertiesFoc",
  "hvy": "SW5E.WeaponPropertiesHvy",
  "hid": "SW5E.WeaponPropertiesHid",
  "hom": "SW5E.WeaponPropertiesHom",
  "ion": "SW5E.WeaponPropertiesIon",
  "ken": "SW5E.WeaponPropertiesKen",
  "lgt": "SW5E.WeaponPropertiesLgt",
  "lum": "SW5E.WeaponPropertiesLum",
  "mlt": "SW5E.WeaponPropertiesMlt",
  "mig": "SW5E.WeaponPropertiesMig",
  "ovr": "SW5E.WeaponPropertiesOvr",
  "pic": "SW5E.WeaponPropertiesPic",
  "pow": "SW5E.WeaponPropertiesPow",
  "rap": "SW5E.WeaponPropertiesRap",
  "rch": "SW5E.WeaponPropertiesRch",
  "rel": "SW5E.WeaponPropertiesRel",
  "ret": "SW5E.WeaponPropertiesRet",
  "sat": "SW5E.WeaponPropertiesSat",
  "shk": "SW5E.WeaponPropertiesShk",
  "sil": "SW5E.WeaponPropertiesSil",
  "spc": "SW5E.WeaponPropertiesSpc",
  "str": "SW5E.WeaponPropertiesStr",
  "thr": "SW5E.WeaponPropertiesThr",
  "two": "SW5E.WeaponPropertiesTwo",
  "ver": "SW5E.WeaponPropertiesVer",
  "vic": "SW5E.WeaponPropertiesVic",
  "zon": "SW5E.WeaponPropertiesZon"
};

/* -------------------------------------------- */

/**
 * Define the set of starship weapon size flags which can exist on a weapon
 * @type {Object}
 */
SW5E.weaponSizes = {
  "tiny": "SW5E.SizeTiny",
  "sm": "SW5E.SizeSmall",
  "med": "SW5E.SizeMedium",
  "lg": "SW5E.SizeLarge",
  "huge": "SW5E.SizeHuge",
  "grg": "SW5E.SizeGargantuan"
};	

// Power Components
SW5E.powerComponents = {
  "V": "SW5E.ComponentVerbal",
  "S": "SW5E.ComponentSomatic",
  "M": "SW5E.ComponentMaterial"
};

// Power Schools
SW5E.powerSchools = {
  "lgt": "SW5E.SchoolLgt",
  "uni": "SW5E.SchoolUni",
  "drk": "SW5E.SchoolDrk",
  "tec": "SW5E.SchoolTec",
  "enh": "SW5E.SchoolEnh"
};

// Power Levels
SW5E.powerLevels = {
  0: "SW5E.PowerLevel0",
  1: "SW5E.PowerLevel1",
  2: "SW5E.PowerLevel2",
  3: "SW5E.PowerLevel3",
  4: "SW5E.PowerLevel4",
  5: "SW5E.PowerLevel5",
  6: "SW5E.PowerLevel6",
  7: "SW5E.PowerLevel7",
  8: "SW5E.PowerLevel8",
  9: "SW5E.PowerLevel9"
};

// Polymorph options.
SW5E.polymorphSettings = {
  keepPhysical: 'SW5E.PolymorphKeepPhysical',
  keepMental: 'SW5E.PolymorphKeepMental',
  keepSaves: 'SW5E.PolymorphKeepSaves',
  keepSkills: 'SW5E.PolymorphKeepSkills',
  mergeSaves: 'SW5E.PolymorphMergeSaves',
  mergeSkills: 'SW5E.PolymorphMergeSkills',
  keepClass: 'SW5E.PolymorphKeepClass',
  keepFeats: 'SW5E.PolymorphKeepFeats',
  keepPowers: 'SW5E.PolymorphKeepPowers',
  keepItems: 'SW5E.PolymorphKeepItems',
  keepBio: 'SW5E.PolymorphKeepBio',
  keepVision: 'SW5E.PolymorphKeepVision'
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
SW5E.proficiencyLevels = {
  0: "SW5E.NotProficient",
  1: "SW5E.Proficient",
  0.5: "SW5E.HalfProficient",
  2: "SW5E.Expertise"
};

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object.
 * In cases where multiple pieces of cover are
 * in play, we take the highest value.
 */
SW5E.cover = {
  0: 'SW5E.None',
  .5: 'SW5E.CoverHalf',
  .75: 'SW5E.CoverThreeQuarters',
  1: 'SW5E.CoverTotal'
};

/* -------------------------------------------- */


// Condition Types
SW5E.conditionTypes = {
  "blinded": "SW5E.ConBlinded",
  "charmed": "SW5E.ConCharmed",
  "deafened": "SW5E.ConDeafened",
  "diseased": "SW5E.ConDiseased",
  "exhaustion": "SW5E.ConExhaustion",
  "frightened": "SW5E.ConFrightened",
  "grappled": "SW5E.ConGrappled",
  "incapacitated": "SW5E.ConIncapacitated",
  "invisible": "SW5E.ConInvisible",
  "paralyzed": "SW5E.ConParalyzed",
  "petrified": "SW5E.ConPetrified",
  "poisoned": "SW5E.ConPoisoned",
  "prone": "SW5E.ConProne",
  "restrained": "SW5E.ConRestrained",
  "shocked": "SW5E.ConShocked",
  "slowed": "SW5E.ConSlowed",
  "stunned": "SW5E.ConStunned",
  "unconscious": "SW5E.ConUnconscious"
};

// Languages
SW5E.languages = {
  "abyssin": "SW5E.LanguagesAbyssin",	
  "aleena": "SW5E.LanguagesAleena",
  "antarian": "SW5E.LanguagesAntarian",  
  "anzellan": "SW5E.LanguagesAnzellan",
  "aqualish": "SW5E.LanguagesAqualish",
  "arconese": "SW5E.LanguagesArconese",
  "ardennian": "SW5E.LanguagesArdennian",
  "arkanian": "SW5E.LanguagesArkanian",  
  "balosur": "SW5E.LanguagesBalosur",
  "barabel": "SW5E.LanguagesBarabel",
  "basic": "SW5E.LanguagesBasic",
  "besalisk": "SW5E.LanguagesBesalisk",
  "binary": "SW5E.LanguagesBinary",
  "bith": "SW5E.LanguagesBith",
  "bocce": "SW5E.LanguagesBocce",
  "bothese": "SW5E.LanguagesBothese",
  "catharese": "SW5E.LanguagesCatharese",
  "cerean": "SW5E.LanguagesCerean",
  "chadra-fan": "SW5E.LanguagesChadra-Fan",
  "chagri": "SW5E.LanguagesChagri",
  "cheunh": "SW5E.LanguagesCheunh",
  "chevin": "SW5E.LanguagesChevin",
  "chironan": "SW5E.LanguagesChironan",
  "clawdite": "SW5E.LanguagesClawdite",
  "codruese": "SW5E.LanguagesCodruese",
  "colicoid": "SW5E.LanguagesColicoid",
  "dashadi": "SW5E.LanguagesDashadi",
  "defel": "SW5E.LanguagesDefel",
  "devaronese": "SW5E.LanguagesDevaronese",
  "dosh": "SW5E.LanguagesDosh",  
  "draethos": "SW5E.LanguagesDraethos",
  "durese": "SW5E.LanguagesDurese",
  "dug": "SW5E.LanguagesDug",
  "ewokese": "SW5E.LanguagesEwokese",
  "falleen": "SW5E.LanguagesFalleen",
  "felucianese": "SW5E.LanguagesFelucianese",
  "gamorrese": "SW5E.LanguagesGamorrese",
  "gand": "SW5E.LanguagesGand",
  "geonosian": "SW5E.LanguagesGeonosian",
  "givin": "SW5E.LanguagesGivin",
  "gran": "SW5E.LanguagesGran",
  "gungan": "SW5E.LanguagesGungan",
  "hapan": "SW5E.LanguagesHapan",
  "harchese": "SW5E.LanguagesHarchese",
  "herglese": "SW5E.LanguagesHerglese",
  "honoghran": "SW5E.LanguagesHonoghran",
  "huttese": "SW5E.LanguagesHuttese",
  "iktotchese": "SW5E.LanguagesIktotchese",
  "ithorese": "SW5E.LanguagesIthorese",
  "jawaese": "SW5E.LanguagesJawaese",
  "kaleesh": "SW5E.LanguagesKaleesh",
  "kaminoan": "SW5E.LanguagesKaminoan",
  "karkaran": "SW5E.LanguagesKarkaran",
  "keldor": "SW5E.LanguagesKelDor",
  "kharan": "SW5E.LanguagesKharan",
  "killik": "SW5E.LanguagesKillik",
  "klatooinian": "SW5E.LanguagesKlatooinian",
  "kubazian": "SW5E.LanguagesKubazian",
  "kushiban": "SW5E.LanguagesKushiban",
  "kyuzo": "SW5E.LanguagesKyuzo",
  "lannik": "SW5E.LanguagesLannik",
  "lasat": "SW5E.LanguagesLasat",
  "lowickese": "SW5E.LanguagesLowickese",
  "lurmese": "SW5E.LanguagesLurmese",
  "mandoa": "SW5E.LanguagesMandoa",
  "miralukese": "SW5E.LanguagesMiralukese",
  "mirialan": "SW5E.LanguagesMirialan",
  "moncal": "SW5E.LanguagesMonCal",
  "mustafarian": "SW5E.LanguagesMustafarian",
  "muun": "SW5E.LanguagesMuun",
  "nautila": "SW5E.LanguagesNautila",
  "ortolan": "SW5E.LanguagesOrtolan",
  "pakpak": "SW5E.LanguagesPakPak",
  "pyke": "SW5E.LanguagesPyke",
  "quarrenese": "SW5E.LanguagesQuarrenese",
  "rakata": "SW5E.LanguagesRakata",
  "rattataki": "SW5E.LanguagesRattataki",
  "rishii": "SW5E.LanguagesRishii",
  "rodese": "SW5E.LanguagesRodese",
  "ryn": "SW5E.LanguagesRyn",
  "selkatha": "SW5E.LanguagesSelkatha",
  "semblan": "SW5E.LanguagesSemblan",
  "shistavanen": "SW5E.LanguagesShistavanen",
  "shyriiwook": "SW5E.LanguagesShyriiwook",  
  "sith": "SW5E.LanguagesSith",
  "squibbian": "SW5E.LanguagesSquibbian",
  "sriluurian": "SW5E.LanguagesSriluurian",
  "ssi-ruuvi": "SW5E.LanguagesSsi-ruuvi",
  "sullustese": "SW5E.LanguagesSullustese",
  "talzzi": "SW5E.LanguagesTalzzi",
  "tarasinese": "SW5E.LanguagesTarasinese",
  "thisspiasian": "SW5E.LanguagesThisspiasian",
  "togorese": "SW5E.LanguagesTogorese",
  "togruti": "SW5E.LanguagesTogruti",
  "toydarian": "SW5E.LanguagesToydarian",
  "tusken": "SW5E.LanguagesTusken",
  "twi'leki": "SW5E.LanguagesTwileki",
  "ugnaught": "SW5E.LanguagesUgnaught",
  "umbaran": "SW5E.LanguagesUmbaran",
  "utapese": "SW5E.LanguagesUtapese",
  "verpine": "SW5E.LanguagesVerpine",
  "vong": "SW5E.LanguagesVong",
  "voss": "SW5E.LanguagesVoss",
  "yevethan": "SW5E.LanguagesYevethan",
  "zabraki": "SW5E.LanguagesZabraki",
  "zygerrian": "SW5E.LanguagesZygerrian"
};

// Character Level XP Requirements
SW5E.CHARACTER_EXP_LEVELS =  [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]
;

// Challenge Rating XP Levels
SW5E.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

// Character Features Per Class And Level
SW5E.classFeatures = ClassFeatures;

// Configure Optional Character Flags
SW5E.characterFlags = {
  "adaptiveResilience": {
    name: "SW5E.FlagsAdaptiveResilience",
    hint: "SW5E.FlagsAdaptiveResilienceHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "aggressive": {
    name: "SW5E.FlagsAggressive",
    hint: "SW5E.FlagsAggressiveHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "amphibious": {
    name: "SW5E.FlagsAmphibious",
    hint: "SW5E.FlagsAmphibiousHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean	
  },
  "armorIntegration": {
	  name: "SW5E.FlagsArmorIntegration",
    hint: "SW5E.FlagsArmorIntegrationHint",
    section: "SW5E.SpeciesTraits",
	  type: Boolean
  },
  "businessSavvy": {
    name: "SW5E.FlagsBusinessSavvy",
    hint: "SW5E.FlagsBusinessSavvyHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "cannibalize": {
	  name: "SW5E.FlagsCannibalize",
    hint: "SW5E.FlagsCannibalizeHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean	
  },
  "closedMind": {
  	name: "SW5E.FlagsClosedMind",
    hint: "SW5E.FlagsClosedMindHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "crudeWeaponSpecialists": {
    name: "SW5E.FlagsCrudeWeaponSpecialists",
    hint: "SW5E.FlagsCrudeWeaponSpecialistsHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "defiant": {
    name: "SW5E.FlagsDefiant",
    hint: "SW5E.FlagsDefiantHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "detailOriented": {
    name: "SW5E.FlagsDetailOriented",
    hint: "SW5E.FlagsDetailOrientedHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "enthrallingPheromones": {
	  name: "SW5E.FlagsEnthrallingPheromones",
    hint: "SW5E.FlagsEnthrallingPheromonesHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "extraArms": {
  	name: "SW5E.FlagsExtraArms",
    hint: "SW5E.FlagsExtraArmsHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },  
  "forceContention": {
  	name: "SW5E.FlagsForceContention",
    hint: "SW5E.FlagsForceContentionHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "forceInsensitive": {
    name: "SW5E.FlagsForceInsensitive",
    hint: "SW5E.FlagsForceInsensitiveHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "foreignBiology": {
	  name: "SW5E.FlagsForeignBiology",
    hint: "SW5E.FlagsForeignBiologyHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "furyOfTheSmall": {
	  name: "SW5E.FlagsFuryOfTheSmall",
    hint: "SW5E.FlagsFuryOfTheSmallHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean	
  },
  "grovelCowerAndBeg": {
    name: "SW5E.FlagsGrovelCowerAndBeg",
    hint: "SW5E.FlagsGrovelCowerAndBegHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "inscrutable": {
	  name: "SW5E.FlagsInscrutable",
    hint: "SW5E.FlagsInscrutableHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean	
  },
  "keenSenses": {
    name: "SW5E.FlagsKeenSenses",
    hint: "SW5E.FlagsKeenSensesHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "longlimbed": {
    name: "SW5E.FlagsLongLimbed",
    hint: "SW5E.FlagsLongLimbedHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "maintenanceMode": {
    name: "SW5E.FlagsMaintenanceMode",
    hint: "SW5E.FlagsMaintenanceModeHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "maskOfTheWild": {
    name: "SW5E.FlagsMaskOfTheWild",
    hint: "SW5E.FlagsMaskOfTheWildHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "multipleHearts": {
	  name: "SW5E.FlagsMultipleHearts",
    hint: "SW5E.FlagsMultipleHeartsHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean	
  },
  "naturallyStealthy": {
    name: "SW5E.FlagsNaturallyStealthy",
    hint: "SW5E.FlagsNaturallyStealthyHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "nimbleAgility": {
    name: "SW5E.FlagsNimbleAgility",
    hint: "SW5E.FlagsNimbleAgilityHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "nimbleEscape": {
    name: "SW5E.FlagsNimbleEscape",
    hint: "SW5E.FlagsNimbleEscapeHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "nimbleness": {
    name: "SW5E.FlagsNimbleness",
    hint: "SW5E.FlagsNimblenessHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "pintsized": {
    name: "SW5E.FlagsPintsized",
    hint: "SW5E.FlagsPintsizedHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "powerfulBuild": {
    name: "SW5E.FlagsPowerfulBuild",
    hint: "SW5E.FlagsPowerfulBuildHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "precognition": {
	  name: "SW5E.FlagsPrecognition",
    hint: "SW5E.FlagsPrecognitionHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean	
  },
  "programmer": {
    name: "SW5E.FlagsProgrammer",
    hint: "SW5E.FlagsProgrammerHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "puny": {
    name: "SW5E.FlagsPuny",
	  hint: "SW5E.FlagsPunyHint",
	  section: "SW5E.SpeciesTraits",
	  type: Boolean
  },
  "rapidReconstruction": {
    name: "SW5E.FlagsRapidReconstruction",
    hint: "SW5E.FlagsRapidReconstructionHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "rapidlyRegenerative": {
	  name: "SW5E.FlagsRapidlyRegenerative",
    hint: "SW5E.FlagsRapidlyRegenerativeHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean	
  },
  "regenerative": {
    name: "SW5E.FlagsRegenerative",
    hint: "SW5E.FlagsRegenerativeHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "savageAttacks": {
	  name: "SW5E.FlagsSavageAttacks",
    hint: "SW5E.FlagsSavageAttacksHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean	
  },
  "shapechanger": {
    name: "SW5E.FlagsShapechanger",
    hint: "SW5E.FlagsShapechangerHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },	
  "strongLegged": {
	  name: "SW5E.FlagsStrongLegged",
    hint: "SW5E.FlagsStrongLeggedHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean	
  },
  "sunlightSensitivity": {
	  name: "SW5E.FlagsSunlightSensitivity",
    hint: "SW5E.FlagsSunlightSensitivityHint",
	  section: "SW5E.SpeciesTraits",
	type: Boolean
  },
  "surpriseAttack": {
    name: "SW5E.FlagsSurpriseAttack",
    hint: "SW5E.FlagsSurpriseAttackHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },	  
  "techImpaired": {
    name: "SW5E.FlagsTechImpaired",
    hint: "SW5E.FlagsTechImpairedHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "techResistance": {
    name: "SW5E.FlagsTechResistance",
    hint: "SW5E.FlagsTechResistanceHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "tinker": {
	  name: "SW5E.FlagsTinker",
    hint: "SW5E.FlagsTinkerHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean	
  },
  "toughness": {
    name: "SW5E.FlagsToughness",
    hint: "SW5E.FlagsToughnessHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "trance": {
    name: "SW5E.FlagsTrance",
    hint: "SW5E.FlagsTranceHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "unarmedCombatant": {
    name: "SW5E.FlagsUnarmedCombatant",
    hint: "SW5E.FlagsUnarmedCombatantHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "undersized": {
    name: "SW5E.FlagsUndersized",
    hint: "SW5E.FlagsUndersizedHint",
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "unsettlingVisage": {
    name: "SW5E.FlagsUnsettlingVisage",
    hint: "SW5E.FlagsUnsettlingVisageHint", 
    section: "SW5E.SpeciesTraits",
    type: Boolean
  },
  "initiativeAdv": {
    name: "SW5E.FlagsInitiativeAdv",
    hint: "SW5E.FlagsInitiativeAdvHint",
    section: "SW5E.Features",
    type: Boolean
  },
  "initiativeAlert": {
    name: "SW5E.FlagsAlert",
    hint: "SW5E.FlagsAlertHint",
    section: "SW5E.Features",
    type: Boolean
  },
  "jackOfAllTrades": {
    name: "SW5E.FlagsJOAT",
    hint: "SW5E.FlagsJOATHint",
    section: "SW5E.Features",
    type: Boolean
  },
  "observantFeat": {
    name: "SW5E.FlagsObservant",
    hint: "SW5E.FlagsObservantHint",
    skills: ['prc','inv'],
    section: "SW5E.Features",
    type: Boolean
  },
  "reliableTalent": {
    name: "SW5E.FlagsReliableTalent",
    hint: "SW5E.FlagsReliableTalentHint",
    section: "SW5E.Features",
    type: Boolean
  },
  "remarkableAthlete": {
    name: "SW5E.FlagsRemarkableAthlete",
    hint: "SW5E.FlagsRemarkableAthleteHint",
    abilities: ['str','dex','con'],
    section: "SW5E.Features",
    type: Boolean
  },
  "weaponCriticalThreshold": {
    name: "SW5E.FlagsWeaponCritThreshold",
    hint: "SW5E.FlagsWeaponCritThresholdHint",
    section: "SW5E.Features",
    type: Number,
    placeholder: 20
  },
  "powerCriticalThreshold": {
    name: "SW5E.FlagsPowerCritThreshold",
    hint: "SW5E.FlagsPowerCritThresholdHint",
    section: "SW5E.Features",
    type: Number,
    placeholder: 20
  },
  "meleeCriticalDamageDice": {
    name: "SW5E.FlagsMeleeCriticalDice",
    hint: "SW5E.FlagsMeleeCriticalDiceHint",
    section: "SW5E.Features",
    type: Number,
    placeholder: 0
  }
};

// Configure allowed status flags
SW5E.allowedActorFlags = ["isPolymorphed", "originalActor", "dataVersion"].concat(Object.keys(SW5E.characterFlags));
