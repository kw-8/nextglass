import React from 'react';

const ImageCredit = () => {
  const names = [
    'red_grapes_1.jpg',
    'red_grapes_2.jpg',
    'grapes_1.jpg',
    'black_grapes_1.jpg',
    'black_grapes_2.jpg',
    'red_grapes_3.jpg',
    'red_grapes_4.jpg',
    'red_grapes_5.jpg',

    '../bottles_1.jpg',
    '../bottles_2.jpg',
    '../bottles_3.jpg',
    '../bottles_4.jpg',
    '../barrels.jpg',
    '../drinks.jpg',

    '../light-red.jpeg',
    '../medium-red.jpg',
    '../dark-red.jpg',
    '../wine-variety.jpg',
    '../dessert-wine.jpg',
    '../champagne.jpg',
    '../generic-red.jpg',
    '../generic-white.jpg'
  ]
  const links = [
    'https://www.flickr.com/photos/calliope/105360353',
    'https://www.flickr.com/photos/andrenuhrich/384830625',
    'https://www.flickr.com/photos/robert_stok/1818240907',
    'https://www.flickr.com/photos/whitefield_d/7827438256',
    'https://www.flickr.com/photos/tsphotographies/6045537131',
    'https://www.flickr.com/photos/quinnanya/11126783444',
    'https://www.flickr.com/photos/maryshattock/15195451596',
    'https://www.flickr.com/photos/13523064@N03/5350405669',

    'https://www.flickr.com/photos/104013316@N06/11547832586',
    'https://www.flickr.com/photos/criminalintent/15415817454/',
    'https://www.flickr.com/photos/infomastern/28077933944',
    'https://www.flickr.com/photos/nizamosman/4310990993',
    'https://www.flickr.com/photos/futureshape/5224997498',
    'https://www.flickr.com/photos/haynes/1003014064',

    'https://www.brightcellars.com/blog/wp-content/uploads/2020/06/Red-wine-summer-pool-1000x600.jpg',
    'https://stanneswinery.com.au/the-history-of-merlot-red-wine/',
    'https://www.flickr.com/photos/quinnanya/5901472786',
    'https://www.flickr.com/photos/shadesta/7276532472',
    'https://www.flickr.com/photos/149561324@N03/27819129658',
    'https://www.flickr.com/photos/zeeyolqpictures/45405409804',
    'https://www.flickr.com/photos/30997751@N07/28695241343',
    'https://www.flickr.com/photos/njj001/10598663226'
  ]
  return (
    <div className='image-credit-container'>
      <h2>Image Credits</h2>
      <div className='image-credit-links'>
        {
          links.map((link, i) =>
            <p>
              <a href={link}>
                <img src={`/grapes/${names[i]}`} />
              </a>
            </p>
          )
        }
      </div>
    </div>
  )
}

export default ImageCredit;