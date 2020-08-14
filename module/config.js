// Namespace Configuration Values
export const SW5E = {};

// ASCII Artwork
SW5E.ASCII = `_______________________________
     _
    | |
 ___| |_ __ _ _ ____      ____ _ _ __ ___
/ __| __/ _\ | |__\ \ /\ / / _\ | |__/ __|
\__ \ || (_) | |   \ V  V / (_) | |  \__ \
|___/\__\__/_|_|    \_/\_/ \__/_|_|  |___/
_______________________________`;


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
 * This Object defines the various lengths of time which can occur
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
  "charges": "SW5E.Charges"
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
  "bonus": "SW5E.EquipmentBonus",
  "natural": "SW5E.EquipmentNatural",
  "shield": "SW5E.EquipmentShield",
  "clothing": "SW5E.EquipmentClothing",
  "trinket": "SW5E.EquipmentTrinket",
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
   "ammunition": "SW5E.ConsumableAmmunition",
   "trinket": "SW5E.ConsumableTrinket"
 };

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 5e system
 * @type {Object}
 */
SW5E.currencies = {
  "gc": "SW5E.CurrencyGC",
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
  "Sonic": "SW5E.DamageSonic"
};

/* -------------------------------------------- */

// armor Types
SW5E.armorpropertiesTypes = {
"Absorptive": "SW5E.ArmorProperAbsorptive",
"Agile": "SW5E.ArmorProperAgile",
"Anchor": "SW5E.ArmorProperAnchor",
"Avoidant": "SW5E.ArmorProperAvoidant",
"Barbed": "SW5E.ArmorProperBarbed",
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
"Powered": "SW5E.ArmorProperPowered",
"Reactive": "SW5E.ArmorProperReactive",
"Regulated": "SW5E.ArmorProperRegulated",
"Reinforced": "SW5E.ArmorProperReinforced",
"Responsive": "SW5E.ArmorProperResponsive",
"Rigid": "SW5E.ArmorProperRigid",
"Silent": "SW5E.ArmorProperSilent",
"Spiked": "SW5E.ArmorProperSpiked",
"Steadfast": "SW5E.ArmorProperSteadfast",
"Versatile": "SW5E.ArmorProperVersatile"
};

/* -------------------------------------------- */

SW5E.distanceUnits = {
  "none": "SW5E.None",
  "self": "SW5E.DistSelf",
  "touch": "SW5E.DistTouch",
  "ft": "SW5E.DistFt",
  "mi": "SW5E.DistMi",
  "spec": "SW5E.Special",
  "any": "SW5E.DistAny"
};

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
 * This Object defines the types of single or area targets which can be applied
 * @type {Object}
 */
SW5E.targetTypes = {
  "none": "SW5E.None",
  "self": "SW5E.TargetSelf",
  "creature": "SW5E.TargetCreature",
  "humanoid": "SW5E.TargetHumanoid",
  "droid": "SW5E.TargetDroid"
  "ally": "SW5E.TargetAlly",
  "enemy": "SW5E.TargetEnemy",
  "object": "SW5E.TargetObject",
  "weapon": "SW5E.TargetWeapon",
  "space": "SW5E.TargetSpace",
  "radius": "SW5E.TargetRadius",
  "sphere": "SW5E.TargetSphere",
  "cylinder": "SW5E.TargetCylinder",
  "cone": "SW5E.TargetCone",
  "square": "SW5E.TargetSquare",
  "cube": "SW5E.TargetCube",
  "line": "SW5E.TargetLine",
  "wall": "SW5E.TargetWall"
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
 * Enumerate the denominations of hit dice which can apply to classes
 * @type {Array.<string>}
 */
SW5E.hitDieTypes = ["d6", "d8", "d10", "d12"];


/* -------------------------------------------- */

/**
 * Character senses options
 * @type {Object}
 */
SW5E.senses = {
  "bs": "SW5E.SenseBS",
  "dv": "SW5E.SenseDV",
  "ts": "SW5E.SenseTS",
  "tr": "SW5E.SenseTR"
};


/* -------------------------------------------- */

/**
 * The set of skill which can be trained
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
  "tec": "SW5E.SkillTec",
};

/* -------------------------------------------- */

SW5E.powerPreparationModes = {
  "always": "SW5E.PowerPrepAlways",
  "atwill": "SW5E.PowerPrepAtWill",
  "innate": "SW5E.PowerPrepInnate",
  "pact": "SW5E.PactMagic",
  "prepared": "SW5E.PowerPrepPrepared"
};

SW5E.powerUpcastModes = ["always", "pact", "prepared"];


SW5E.powerProgression = {
  "none": "SW5E.PowerNone",
  "full": "SW5E.PowerProgFull",
  "artificer": "SW5E.PowerProgArt"
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
  "simpleVW": "SW5E.WeaponSimpleVW",
  "simpleB": "SW5E.WeaponSimpleB",
  "simpleLW": "SW5E.WeaponSimpleLW",
  "martialVW": "SW5E.WeaponMartialVW",
  "martialB": "SW5E.WeaponMartialB",
  "martialLW": "SW5E.WeaponMartialLW",
  "natural": "SW5E.WeaponNatural",
  "improv": "SW5E.WeaponImprov",
  "siege": "SW5E.WeaponSiege"
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
  "def": "SW5E.WeaponPropertiesDef",
  "dex": "SW5E.WeaponPropertiesDex",
  "drm": "SW5E.WeaponPropertiesDRM",
  "dgd": "SW5E.WeaponPropertiesDgd",
  "dis": "SW5E.WeaponPropertiesDis",
  "dpt": "SW5E.WeaponPropertiesDpt",
  "dou": "SW5E.WeaponPropertiesDou",
  "hvy": "SW5E.WeaponPropertiesHvy",
  "hid": "SW5E.WeaponPropertiesHid",
  "fin": "SW5E.WeaponPropertiesFin",
  "fix": "SW5E.WeaponPropertiesFix",
  "foc": "SW5E.WeaponPropertiesFoc",
  "ken": "SW5E.WeaponPropertiesKen",
  "lgt": "SW5E.WeaponPropertiesLgt",
  "lum": "SW5E.WeaponPropertiesLum",
  "pic": "SW5E.WeaponPropertiesPic",
  "rap": "SW5E.WeaponPropertiesRap",
  "rch": "SW5E.WeaponPropertiesRch",
  "rel": "SW5E.WeaponPropertiesRel",
  "ret": "SW5E.WeaponPropertiesRet",
  "shk": "SW5E.WeaponPropertiesShk",
  "spc": "SW5E.WeaponPropertiesSpc",
  "str": "SW5E.WeaponPropertiesStr",
  "thr": "SW5E.WeaponPropertiesThr",
  "two": "SW5E.WeaponPropertiesTwo",
  "ver": "SW5E.WeaponPropertiesVer",
  "vic": "SW5E.WeaponPropertiesVic"
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

// Power Scroll Compendium UUIDs
SW5E.powerScrollIds = {
  0: 'Compendium.sw5e.items.rQ6sO7HDWzqMhSI3',
  1: 'Compendium.sw5e.items.9GSfMg0VOA2b4uFN',
  2: 'Compendium.sw5e.items.XdDp6CKh9qEvPTuS',
  3: 'Compendium.sw5e.items.hqVKZie7x9w3Kqds',
  4: 'Compendium.sw5e.items.DM7hzgL836ZyUFB1',
  5: 'Compendium.sw5e.items.wa1VF8TXHmkrrR35',
  6: 'Compendium.sw5e.items.tI3rWx4bxefNCexS',
  7: 'Compendium.sw5e.items.mtyw4NS1s7j2EJaD',
  8: 'Compendium.sw5e.items.aOrinPg7yuDZEuWr',
  9: 'Compendium.sw5e.items.O4YbkJkLlnsgUszZ'
};

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the power slot progression for a full power-caster.
 * @type {Array[]}
 */
SW5E.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

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
}

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
  "stunned": "SW5E.ConStunned",
  "unconscious": "SW5E.ConUnconscious"
};

// Languages
SW5E.languages = {
  "basic": "SW5E.LanguagesBasic",
  "binary": "SW5E.LanguagesBinary",
  "bith": "SW5E.LanguagesBith",
  "bocce": "SW5E.LanguagesBocce",
  "bothese": "SW5E.LanguagesBothese",
  "catharese": "SW5E.LanguagesCartharese",
  "cheunh": "SW5E.LanguagesCheunh",
  "durese": "SW5E.LanguagesDurese",
  "dug": "SW5E.LanguagesDug",
  "ewokese": "SW5E.LanguagesEwokese",
  "gamorrese": "SW5E.LanguagesGamorrese",
  "geonosian": "SW5E.LanguagesGeonosian",
  "hapan": "SW5E.LanguagesHapan",
  "huttese": "SW5E.LanguagesHuttese",
  "jawaese": "SW5E.LanguagesJawaese",
  "kaleesh": "SW5E.LanguagesKaleesh",
  "kaminoan": "SW5E.LanguagesKaminoan",
  "keldor": "SW5E.LanguagesKelDor",
  "mandoa": "SW5E.LanguagesMandoa",
  "moncal": "SW5E.LanguagesMonCal",
  "pakpak": "SW5E.LanguagesPakPak",
  "rodese": "SW5E.LanguagesRodese",
  "sith": "SW5E.LanguagesSith",
  "togruti": "SW5E.LanguagesTogruti",
  "dosh": "SW5E.LanguagesDosh",
  "twi'leki": "SW5E.LanguagesTwileki",
  "tusken": "SW5E.LanguagesTusken",
  "shyriiwook": "SW5E.LanguagesShyriiwook",
  "zabraki": "SW5E.LanguagesZabraki",
  "vong": "SW5E.LanguagesVong"
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

// Configure Optional Character Flags
SW5E.characterFlags = {
  "powerfulBuild": {
    name: "SW5E.FlagsPowerfulBuild",
    hint: "SW5E.FlagsPowerfulBuildHint",
    section: "Racial Traits",
    type: Boolean
  },
  "savageAttacks": {
    name: "SW5E.FlagsSavageAttacks",
    hint: "SW5E.FlagsSavageAttacksHint",
    section: "Racial Traits",
    type: Boolean
  },
  "elvenAccuracy": {
    name: "SW5E.FlagsElvenAccuracy",
    hint: "SW5E.FlagsElvenAccuracyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "halflingLucky": {
    name: "SW5E.FlagsHalflingLucky",
    hint: "SW5E.FlagsHalflingLuckyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "initiativeAdv": {
    name: "SW5E.FlagsInitiativeAdv",
    hint: "SW5E.FlagsInitiativeAdvHint",
    section: "Feats",
    type: Boolean
  },
  "initiativeAlert": {
    name: "SW5E.FlagsAlert",
    hint: "SW5E.FlagsAlertHint",
    section: "Feats",
    type: Boolean
  },
  "jackOfAllTrades": {
    name: "SW5E.FlagsJOAT",
    hint: "SW5E.FlagsJOATHint",
    section: "Feats",
    type: Boolean
  },
  "observantFeat": {
    name: "SW5E.FlagsObservant",
    hint: "SW5E.FlagsObservantHint",
    skills: ['prc','inv'],
    section: "Feats",
    type: Boolean
  },
  "reliableTalent": {
    name: "SW5E.FlagsReliableTalent",
    hint: "SW5E.FlagsReliableTalentHint",
    section: "Feats",
    type: Boolean
  },
  "remarkableAthlete": {
    name: "SW5E.FlagsRemarkableAthlete",
    hint: "SW5E.FlagsRemarkableAthleteHint",
    abilities: ['str','dex','con'],
    section: "Feats",
    type: Boolean
  },
  "weaponCriticalThreshold": {
    name: "SW5E.FlagsCritThreshold",
    hint: "SW5E.FlagsCritThresholdHint",
    section: "Feats",
    type: Number,
    placeholder: 20
  }
};

// Configure allowed status flags
SW5E.allowedActorFlags = [
  "isPolymorphed", "originalActor"
].concat(Object.keys(SW5E.characterFlags));
