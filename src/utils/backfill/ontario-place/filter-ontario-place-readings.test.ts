import { justOntarioPlaceReadings, notOntarioPlaceReadings } from '../../../../__fixtures__/waterkeeper-response';
import { filterOntarioPlaceReadings } from './filter-ontario-place-readings';


describe('Filtering out just Ontario Place', () => {
  it('returns [] for an array of results that arent ontario place', () => {
    const got = filterOntarioPlaceReadings(notOntarioPlaceReadings);
    expect(got.length).toEqual(0);
  });

  it('returns 2 in an array of results that are just ontario place', () => {
    const got = filterOntarioPlaceReadings(justOntarioPlaceReadings);
    expect(got.length).toEqual(2);
  });
});
