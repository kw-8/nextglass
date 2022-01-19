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
    '../drinks.jpg'
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
    'https://www.flickr.com/photos/haynes/1003014064'
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
      <p>Pictures we have used are from Flickr under commercial license.</p>
    </div>
  )
}

export default ImageCredit;