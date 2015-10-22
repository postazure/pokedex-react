export default class Helpers {
  getIDfromResourceURI(uri, noun) {
    let id = uri
      .replace(`api/v1/${noun}/`, '')
      .replace(/\//g, '');
    return (id);
  }

  getColorFromType(typeText) {
    return (
      {
        normal: 'brown',
        bug: 'olive',
        fight: 'orange',
        ghost: 'violet',
        electric: 'yellow',
        flying: 'teal',
        steel: 'grey',
        psychic: 'pink',
        poison: 'purple',
        fire: 'red',
        ice: 'teal',
        ground: 'brown',
        water: 'blue',
        dragon: 'green',
        rock: 'grey',
        grass: 'green',
        dark: 'black',
        fairy: 'pink'
      }[typeText.toLowerCase()]
    )
  }
}
