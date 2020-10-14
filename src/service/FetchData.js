export default class FetchData {

  startUrl = 'https://api.spacexdata.com/v4/';

  getResource = async (url) => {
    const res = await fetch(url);

    // if (!res.ok)

    return await res.json();
  };

  getRocket = async () => await this.getResource(this.startUrl + 'rockets');

  getLaunchers = async () => await this.getResource(this.startUrl + 'launchers/past');
  
  getCompany = async () => await this.getResource(this.startUrl + 'company');
}