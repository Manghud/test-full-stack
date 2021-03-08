import { LocationAPI } from './location';
import { MapBoxAPI } from './MapBoxAPI';

class GetLocationDataService {
  constructor(private locationService:LocationAPI) {
  }
  // eslint-disable-next-line no-unused-vars
  async handler(event:any, _context:any) {
    const { address } = event;
    return this.locationService.getLocationData(address);
  }
}

export default new GetLocationDataService(new MapBoxAPI());