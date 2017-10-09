


var findAll = function(re, str){

  var array= [], a;
  while ((a = re.exec(str)) !== null) {

    array.push({
      html: a[0],
      index: re.lastIndex
    });
  }

  return array;
};


var ampify = function(iframe){
  var src = (/src=\"([^\"]+)\"/).exec(iframe)[1],
    width = (/width=\"([^\"]+)\"/).exec(iframe)[1],
    height = (/height=\"([^\"]+)\"/).exec(iframe)[1],
    path = src.split('?')[1];

  // Embedly stores the URL of a thumbnail of embed in the SRC of the iframe.
  // This decomposes that query sting to a hash.
  var query = path.split('&').reduce(function(query, arg){
    var parts = arg.split('=').map(decodeURIComponent);
    query[parts[0]] = parts[1];
    return query;
  }, {});

  // We should always use a placeholder.
  var placeholder = query.image;
  if (!placeholder){
    placeholder = 'https://cdn.embed.ly/logos/embedly-powered-large-light.png';
  }

  return [
    '<amp-iframe width=' + width,
    'height=' + height,
    'layout="responsive"',
    'frameborder="0"',
    'sandbox="allow-scripts allow-same-origin allow-popups"',
    'src="https:' + src + '">',
    '<amp-img layout="fill" src="' + placeholder + '" placeholder></amp-img>',
    '</amp-iframe>'
  ].join(' ');
};



var deal = function(html){
  var ire = (/<iframe(?:.*?)><\/iframe>/gi);

  var data = findAll(ire, html);

  var ampified = data.map(function(data){
    return ampify(data.html);
  });

  return html.split(ire).reduce(function(array, part, i){
    array.push(part);
    if (i < ampified.length) {
      array.push(ampified[i]);
    }
    return array;
  }, []).join(' ');
};


$(document).on('ready', function(){
  $('.article').html(deal(post));

});



