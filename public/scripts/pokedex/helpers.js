export default class Helpers {
  getIDfromResourceURI(uri, noun) {
    let id = uri
      .replace(`api/v1/${noun}/`, '')
      .replace(/\//g, '');
    return (id);
  }
}
