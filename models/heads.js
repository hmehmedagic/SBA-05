// Creating the simple data structures we'll work with.
// How we choose to store and organize this data is very important!
// Different options and techniques for storing data and
// creating relationships between different data sets will be
// explored during lessons on database integrations and techniques.

// The "heads" data will include information about head units
const heads = [{
        // id: 1,
        name: "HC-2000/BC SHADE EYE",
        classification: "Head",
        manufacturer: "Reuse and Development",
        part_info: "Custom part derived from the scout AC head developed by RaD. Comprehensively rebuilt by an anonymous independent mercenary group, this model takes some steps forward but sacrifices the minimalism of its predecessor.",
        url: "https://static.wikia.nocookie.net/armoredcore/images/0/04/Part_icon_ACVI_HC-2000_BC_SHADE_EYE.png",
    },
    {
        // id: 2,
        name: "EL-PH-00 ALBA",
        classification: "Head",
        manufacturer: "Elcano Foundry",
        part_info: "A new head part developed by Elcano. This model utilizes technology received from Furlong Dynamics to achieve improved overall balance and precise AC control.",
        url: 'https://static.wikia.nocookie.net/armoredcore/images/d/d5/Part_icon_ACVI_EL-PH-00_ALBA.png',
    },
    {
        // id: 3,
        name: "IB-C03H: HAL 826",
        classification: "Head",
        manufacturer: "Rubicon Research Institute",
        part_info: "Head part for the HAL 826 piloted AC, developed long ago by the Rubicon Research Institute. The last of the Ibis Series and the only piloted Ibis craft, it was built to be the final safety valve to prevent a Coral Collapse.",
        url: 'https://static.wikia.nocookie.net/armoredcore/images/2/2f/Part_icon_ACVI_IB-C03H_HAL_826.png',
    },
];

module.exports = heads;