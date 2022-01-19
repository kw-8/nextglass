export const WineImages = props => {
  let variety = props.variety.toLowerCase();
  const dryWhite = [
    "albarino",
    "gargenega",
    "grüner veltliner",
    "grigio",
    "gris",
    "trebbiano",
    "vermentino",
    "sauvignon blanc"
  ]
  const rose = ["rose", "rosé"]
  const sweetWhite = [
    "riesling",
    "gewürztraminer",
    "chenin blanc"
  ]
  const richWhite = [
    "chardonnay",
    "marsanne",
    "semillon",
    "viognier"
  ]
  const lightRed = [
    "freisa",
    "brachetto",
    "carignan",
    "counoise",
    "gamay",
    "saint laurent",
    "schiava",
    "pinot noir"
  ]
  const mediumRed = [
    "barbera",
    "chianti",
    "merlot",
    "nebbiolo",
    "sangiovese",
    "zinfandel",
    "tempranillo"
  ]
  const fullRed = [
    "anglianico",
    "cabernet sauvignon",
    "carménère",
    "bordeaux",
    "malbec",
    "dolcetto",
    "monastrell",
    "meritage",
    "pinotage",
    "syrah",
    "sirah",
    "shiraz",
    "rioja"
  ]
  const sparkling = [
    "glera",
    "prosecco",
    "cava",
    "champagne",
    "lambrusco",
    "metodo",
    "sparkling"
  ]
  const dessert = [
    "madeira",
    "port",
    "moscato",
   "grenache",
    "sherry",
    "sauterne",
    "vio santo"
  ]
  const genericWhite = [
    "white",
    "blanc",
    "bianco"
  ]
  const genericRed = [
    "red",
    "noir",
    "nero"
  ]


  let image = ""
  
  if (dryWhite.some(el => variety.includes(el))) {
    image = "../drinks.jpg"
  } else if (rose.some(el => variety.includes(el))) {
    image = "../rose.png"
  } else if (sweetWhite.some(el => variety.includes(el))) {
    image = "../white_wine_2.png"
  } else if (richWhite.some(el => variety.includes(el))) {
    image = "../white_wine.jpg"
  } else if (lightRed.some(el => variety.includes(el))) {
    image = "../light-red.jpeg"
  } else if (mediumRed.some(el => variety.includes(el))) {
    image = "../medium-red.jpg"
  } else if (fullRed.some(el => variety.includes(el))) {
    image = "../dark-red.jpg"
  } else if (sparkling.some(el => variety.includes(el))) {
    image = "../champagne.jpg"
  } else if (dessert.some(el => variety.includes(el))) {
    image = "../dessert-wine.jpg"
  } else if (genericWhite.some(el => variety.includes(el))) {
    image = "../generic-white.jpg"
  } else if (genericRed.some(el => variety.includes(el))) {
    image = "generic-red.jpg"
  } else {
    image = "../wine-variety.jpg"
  }


  return (<img src={image}/> )
}