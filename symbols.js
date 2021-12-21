const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;
const Wine = require('./models/Wine')

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

// chart for mac roman encoding errors (mojibake)
// note: Buffer.from and JSON.stringify did not work
const chars = {
  "‚Äî": "—",
  "‚Äì": "-",
  "‚Äú ": '&',
  '√Å': 'Á',
  '√Ç': 'Â',
  '√Ä': 'À',
  '√Ö': 'Å',
  '√°': 'á',
  '√¢': 'â',
  '√†': 'à',
  '√§': 'ä',
  '√•': 'å',
  '√£': 'ã',
  '√¶': 'æ',
  '√á': 'Ç',
  '√ß': 'ç',
  '√â': 'É',
  '√à': 'È',
  '√©': 'é',
  '√™': 'ê',
  '√®': 'è',
  '√´': 'ë',
  '√≠': 'í',
  '√Æ': 'î',
  '√¨': 'ì',
  '√Ø': 'ï',
  '√±': 'ñ',
  '√ì': 'Ó',
  '√î': 'Ô',
  '√í': 'Ò',
  '√ñ': 'Ö',
  '√ò': 'Ø',
  '√≥': 'ó',
  '√¥': 'ô',
  '√≤': 'ò',
  '√∂': 'ö',
  '√∞': 'ð',
  '√∏': 'ø',
  '√ü': 'ß',
  '√û': 'Þ',
  '√ú': 'Ü',
  '√∫': 'ú',
  '√ª': 'û',
  '√π': 'ù',
  '√º': 'ü',
  '√Ω': 'ý'
};

const convert = str => ( str.replace(/(√\S)|(,\W\W)/g, exp => chars[exp]) )

Wine.find()
  .then(wines => {
    wines.forEach(wine => {
      wine.title = convert(wine.title);
      wine.description = convert(wine.description);
      wine.variety = convert(wine.variety);
      wine.winery = convert(wine.winery);
      wine.save()
    })
    console.log('done')
  })


