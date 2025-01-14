
export default function beachRouteMatch(beachID: string): number {
  const beachNamesHash = {
    'marie-curtis': 1,
    sunnyside: 2,
    'hanlans-point': 3,
    gibraltar: 4,
    'centre-island': 5,
    'wards-island': 6,
    cherry: 7,
    woodbine: 8,
    'kew-balmy': 9,
    bluffers: 10,
    rouge: 11,
    'ontario-place': 15,
  };
  return beachNamesHash[beachID];
}

export function beachIDToRouteName(id) {
  const beachNamesHash = {
    1: 'marie-curtis',
    2: 'sunnyside',
    3: 'hanlans-point',
    4: 'gibraltar',
    5: 'center-island',
    6: 'wards-island',
    7: 'cherry',
    8: 'woodbine',
    9: 'kew-balmy',
    10: 'bluffers',
    11: 'rouge',
    15: 'ontario-place',
  };
  return beachNamesHash[id];
}
const beachNames = {
  1: 'Marie Curtis',
  2: 'Sunnyside',
  3: 'Hanlan\'s Point',
  4: 'Gibraltar Point',
  5: 'Centre Island',
  6: 'Ward\'s Island',
  7: 'Cherry',
  8: 'Woodbine',
  9: 'Kew-Balmy',
  10: 'Bluffer\'s Park',
  11: 'Rouge',
  15: 'Ontario Place'
};

// Use to parse the value from the Voiceflow assistant
const beachNamesToID = {
  'marie curtis': 1,
  'sunnyside': 2,
  'hanlans': 3,
  'gibraltar': 4,
  'centre island': 5,
  'wards': 6,
  'cherry': 7,
  'woodbine': 8,
  'kew balmy': 9,
  'bluffers': 10,
}

const beachIDsWithFuzzyNames = {
  1: ['marie curtis', 'marie curies', 'marie curtis park', 'marie curies park beach'],
  2: ['sunnyside', 'sunnyside beach', 'sunnyside park'],
  3: ['hanlans', 'hanlan\'s', 'hanlans point', 'hanlans point beach', 'hanlans point park'],
  4: ['gibraltar', 'gibraltar point', 'gibraltar point beach', 'gibraltar point park'],
  5: ['centre island', 'centre island beach', 'centre island park', 'center island'],
  6: ['wards', 'wards island', 'wards island beach', 'wards island park', 'ward\'s'],
  7: ['cherry', 'cherry beach', 'cherry beach park'],
  8: ['woodbine', 'woodbine beach', 'woodbine beach park'],
  9: ['kew balmy', 'kew balmy beach', 'kew balmy beach park', 'kew balmy park'],
  10: ['bluffers', 'bluffers park', 'bluffers park beach', 'bluffers beach', 'bluffer\'s'],
  11: ['rouge', 'rouge beach', 'rouge beach park'],
  15: ['ontario place', 'ontario place beach', 'ontario place park']
}

export function beachNameToID(beachName: string) {
  return beachNamesToID[beachName];
}

export const beachIDToName = (id: number) => {
  return beachNames[id];
}



export const fuzzyMatchBeachNameToID  = (beachName: string) => {
  const fuzzyMatch = Object.keys(beachIDsWithFuzzyNames).find((beachID) => {
    return beachIDsWithFuzzyNames[beachID].includes(beachName);
  });
  return fuzzyMatch ? parseInt(fuzzyMatch) : null;
}

