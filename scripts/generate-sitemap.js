const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const dot = require('dot');
const fs = require('fs');

const args = process.argv.slice(2);
let url = '';
let pingGoogle = false;

const VALID_ARGS = [
  '--dev',
  '--prod',
  '-pg'
];

// checking for arguments
if (!args.length) {
  console.error('Please provide an argument! Must use --dev, --prod, or -pg (-pg is optional).');
  return;
} else if (args.length > 2) {
  console.error('Too many arguments provided. Must use --dev, --prod, or -pg (-pg is optional).');
  return;
} 
args.forEach(argv => {
  if (!VALID_ARGS.includes(argv)) {
    console.error('Invalid argument provided. Must use --dev, --prod, or -pg (-pg is optional).');
    return;
  } else if (argv === VALID_ARGS[0]) {
    // do something when set to dev argument
  } else if (argv === VALID_ARGS[1]) {
    // do something when set to prod argument
  } else if (argv === VALID_ARGS[2]) {
    pingGoogle = true;
  }
});

const templateSource = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
{{~it.urls :value:index}}
  <url>
    <loc>{{=value}}</loc>
    <lastmod>{{=it.lastModDate}}</lastmod>
  </url>
{{~}}
</urlset>
`;

const data = {
  urls: [
    'https://www.zuudoo.com/'
  ],
  lastModDate: new Date().toISOString()
};

// configure template settings
dot.templateSettings = {
  evaluate:    /\{\{([\s\S]+?)\}\}/g,
  interpolate: /\{\{=([\s\S]+?)\}\}/g,
  iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
  varname: 'it',
  strip: false
};

// compile template function
const templateFn = dot.template(templateSource);
const templateText = templateFn(data);

// create sitemap.xml file
fs.writeFile(__dirname + '/../src/sitemap.xml', templateText, (err) => {
  if (err) {
    return console.error(`Failed to generate sitemap. Error Message: ${err.message}`);
  }
  console.log('Sitemap generated!');
});

// ping Google to crawl our new sitemap
if (pingGoogle) {
  const http = new XMLHttpRequest();
  const googleUrl = "http://www.google.com/ping?sitemap=";
  const sitemapUrl = encodeURI("https://www.zuudoo.com/sitemap.xml");
  const url = googleUrl + sitemapUrl;
  http.onreadystatechange = () => {
    if (http.readyState === 4 && http.status === 200) {
      console.log('Google has been pinged!');
    } else if (http.readyState === 4 && http.status !== 200) {
      console.log(`Pinging Google failed. Status: ${http.status} - Message: ${http.statusText}`);
    }
  }
  http.open("GET", url);
  http.send(); 
}
