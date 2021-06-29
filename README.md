# TuruNet Uploader
TuruNet uploader adalah sebuah module sederhana yang dibuat untuk mempermudah pengguna saat mengupload media gambar ke turupedia.net melalui API accsess.

## Installation
Cara menginstal module TuruNet
```bash
npm i https://github.com/bangnopal/turunet-uploader
```

## Usage
```nodejs
const turunet = require('https://github.com/bangnopal/turunet-uploader')
turunet('namafile.jpg')
```

## Example Response
```nodejs
{
  status_code: 200,
  success: { message: 'image uploaded', code: 200 },
  image: {
    name: '1bdd7be333b7',
    extension: 'jpg',
    size: '1390998',
    width: '1920',
    height: '2560',
    date: '2021-06-24 01:39:51',
    date_gmt: '2021-06-23 18:39:51',
    title: '1bdd7be333b7',
    description: null,
    nsfw: '0',
    storage_mode: 'datefolder',
    md5: '5acc60b2eb672334c2c7a172f27f3364',
    source_md5: null,
    original_filename: '1bdd7be333b7.jpg',
    original_exifdata: '{"FileName":"1bdd7be333b7.jpg","FileDateTime":"1624473591","FileSize":"1390998","FileType":"2","MimeType":"image\\/jpeg","SectionsFound":"ANY_TAG, IFD0, THUMBNAIL, EXIF, GPS, INTEROP","COMPUTED":{"html":"width=\\"1920\\" height=\\"2560\\"","Height":"2560","Width":"1920","IsColor":"1","ByteOrderMotorola":"1","ApertureFNumber":"f\\/2.2","Thumbnail.FileType":"2","Thumbnail.MimeType":"image\\/jpeg"},"Make":"vivo","Model":"vivo 1606","XResolution":"72\\/1","YResolution":"72\\/1","ResolutionUnit":"2","Software":"msm8937_32-user 6.0.1 MMB29M eng.compiler.20190105.211334 release-keys","DateTime":"2021:06:13 08:01:53","YCbCrPositioning":"1","Exif_IFD_Pointer":"258","GPS_IFD_Pointer":"742","THUMBNAIL":{"Compression":"6","XResolution":"72\\/1","YResolution":"72\\/1","ResolutionUnit":"2","JPEGInterchangeFormat":"922","JPEGInterchangeFormatLength":"15621"},"ExposureTime":"10\\/600","FNumber":"220\\/100","ExposureProgram":"0","ISOSpeedRatings":"102","ExifVersion":"0220","DateTimeOriginal":"2021:06:13 08:01:53","DateTimeDigitized":"2021:06:13 08:01:53","ComponentsConfiguration":"\\u0001\\u0002\\u0003\\u0000","ShutterSpeedValue":"5906\\/1000","ApertureValue":"227\\/100","BrightnessValue":"0\\/100","MeteringMode":"2","Flash":"0","FocalLength":"295\\/100","SubSecTime":"594794","SubSecTimeOriginal":"594794","SubSecTimeDigitized":"594794","FlashPixVersion":"0100","ColorSpace":"1","ExifImageWidth":"1920","ExifImageLength":"2560","InteroperabilityOffset":"711","SensingMethod":"2","SceneType":"\\u0001","ExposureMode":"0","WhiteBalance":"0","FocalLengthIn35mmFilm":"3","SceneCaptureType":"0","GPSAltitudeRef":"220\\/100","GPSTimeStamp":["1\\/1","1\\/1","53\\/1"],"GPSDateStamp":"2021:06:13","InterOperabilityIndex":"R98","InterOperabilityVersion":"0100"}',
    views: '0',
    category_id: null,
    chain: '7',
    thumb_size: '13544',
    medium_size: '110305',
    expiration_date_gmt: null,
    likes: '0',
    is_animated: '0',
    is_approved: '1',
    file: { resource: [Object] },
    id_encoded: 'AEzc',
    filename: '1bdd7be333b7.jpg',
    mime: 'image/jpeg',
    url: 'https://turupedia.net/images/2021/06/24/1bdd7be333b7.jpg',
    url_viewer: 'https://turupedia.net/image/1bdd7be333b7.AEzc',
    url_short: 'https://turupedia.net/image/AEzc',
    image: {
      filename: '1bdd7be333b7.jpg',
      name: '1bdd7be333b7',
      mime: 'image/jpeg',
      extension: 'jpg',
      url: 'https://turupedia.net/images/2021/06/24/1bdd7be333b7.jpg',
      size: '1390998'
    },
    thumb: {
      filename: '1bdd7be333b7.th.jpg',
      name: '1bdd7be333b7.th',
      mime: 'image/jpeg',
      extension: 'jpg',
      url: 'https://turupedia.net/images/2021/06/24/1bdd7be333b7.th.jpg',
      size: '13544'
    },
    medium: {
      filename: '1bdd7be333b7.md.jpg',
      name: '1bdd7be333b7.md',
      mime: 'image/jpeg',
      extension: 'jpg',
      url: 'https://turupedia.net/images/2021/06/24/1bdd7be333b7.md.jpg',
      size: '110305'
    },
    size_formatted: '1.4 MB',
    display_url: 'https://turupedia.net/images/2021/06/24/1bdd7be333b7.md.jpg',
    display_width: '500',
    display_height: 667,
    views_label: 'views',
    likes_label: 'likes',
    how_long_ago: '1 second ago',
    date_fixed_peer: '2021-06-23 18:39:51',
    title_truncated: '1bdd7be333b7',
    title_truncated_html: '1bdd7be333b7',
    is_use_loader: false
  },
  status_txt: 'OK'
}
```

## Website
- https://www.turupedia.com
- https://www.turupedia.net
- https://www.rajinulis.my.id
- https://pb-fanatic.com

## Contributing
Mari berkontribusi di repositori ini untuk mengembangkan module ini menjadi lebih baik
