var size = 0;
var placement = 'point';
function categories_Unitidenvmnt_29(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '[\'Școala Gimnazială „Ferdinand I”\', \'Școala Gimnazială „Grigore Tocilescu”\', \'Școala Gimnazială „Ion Heliade Rădulescu”\', \'Școala Gimnazială „Principesa Margareta”\', \'Școala Gimnazială nr. 131\', \'Școala Gimnazială nr. 145\', \'Școala Gimnazială nr. 190\', \'Școala Gimnazială nr. 6\', \'Școala Gimnazială nr. 7\']':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,0,247,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'Școala Gimnazială nr. 71\', \'Școala Gimnazială nr. 77\', \'Școala Gimnazială nr. 78\', \'Școala Gimnazială nr. 79\', \'Școala Gimnazială nr. 80\', \'Școala Gimnazială nr. 81\', \'Școala Gimnazială nr. 82\', \'Școala Gimnazială nr. 84\', \'Școala Gimnazială nr. 85\', \'Școala Gimnazială nr. 86\', \'Școala Gimnazială nr. 88\', \'Școala Gimnazială nr. 92\', \'Școala Gimnazială nr. 95\', \'Școala Gimnazială nr. 96\', \'Școala Gimnazială nr. 97\', \'Școala Gimnazială nr. 99\', \'Școala Gimnazială nr. 62\', \'Școala Gimnazială nr. 66\', \'Școala Gimnazială nr. 67\', \'Școala Gimnazială nr. 192\', \'Școala Gimnazială nr. 194\', \'Școala Gimnazială nr. 195\', \'Școala Gimnazială nr. 197\', \'Școala Gimnazială nr. 2\', \'Școala Gimnazială nr. 20\', \'Școala Gimnazială nr. 200\', \'Școala Gimnazială nr. 206\', \'Școala Gimnazială nr. 24\', \'Școala Gimnazială nr. 25\', \'Școala Gimnazială nr. 27\', \'Școala Gimnazială nr. 279\', \'Școala Gimnazială nr. 28\', \'Școala Gimnazială nr. 280\', \'Școala Gimnazială nr. 307\', \'Școala Gimnazială nr. 308\', \'Școala Gimnazială nr. 309\', \'Școala Gimnazială nr. 31\', \'Școala Gimnazială nr. 311\', \'Școala Gimnazială nr. 32\', \'Școala Gimnazială nr. 39\', \'Școala Gimnazială nr. 4\', \'Școala Gimnazială nr. 40\', \'Școala Gimnazială nr. 41\', \'Școala Gimnazială nr. 46\', \'Școala Gimnazială nr. 47\', \'Școala Gimnazială nr. 49\', \'Școala Gimnazială nr. 5\', \'Școala Gimnazială nr. 51\', \'Școala Gimnazială nr. 54\', \'Școala Gimnazială nr. 55\', \'Școala Gimnazială nr. 56\', \'Școala Gimnazială nr. 59\', \'Școala Gimnazială nr. 149\', \'Școala Gimnazială nr. 150\', \'Școala Gimnazială nr. 153\', \'Școala Gimnazială nr. 156\', \'Școala Gimnazială nr. 161\', \'Școala Gimnazială nr. 162\', \'Școala Gimnazială nr. 163\', \'Școala Gimnazială nr. 165\', \'Școala Gimnazială nr. 167\', \'Școala Gimnazială nr. 168\', \'Școala Gimnazială nr. 169\', \'Școala Gimnazială nr. 178\', \'Școala Gimnazială nr. 179\', \'Școala Gimnazială nr. 181\', \'Școala Gimnazială nr. 183\', \'Școala Gimnazială nr. 184\', \'Școala Gimnazială nr. 188\', \'Școala Gimnazială nr. 189\', \'Școala Gimnazială nr. 133\', \'Școala Gimnazială nr. 134\', \'Școala Gimnazială nr. 135\', \'Școala Gimnazială nr. 136\', \'Școala Gimnazială nr. 142\', \'Școala Gimnazială nr. 143\', \'Școala Gimnazială nr. 144\', \'Școala Gimnazială nr. 103\', \'Școala Gimnazială nr. 108\', \'Școala Gimnazială nr. 112\', \'Școala Gimnazială nr. 113\', \'Școala Gimnazială nr. 115\', \'Școala Gimnazială nr. 116\', \'Școala Gimnazială nr. 117\', \'Școala Gimnazială nr. 119\', \'Școala Gimnazială nr. 124\', \'Școala Gimnazială nr. 125\', \'Școala Gimnazială nr. 126\', \'Școala Gimnazială nr. 127\', \'Școala Gimnazială nr. 128\', \'Școala Gimnazială nr. 129\', \'Școala Gimnazială nr. 13\', \'Școala Gimnazială „Regele Mihai I”\', \'Școala Gimnazială „Regina Maria”\', \'Școala Gimnazială „Șerban Vodă”\', \'Școala Gimnazială „Sfânta Treime”\', \'Școala Gimnazială „Sfântul Andrei”\', \'Școala Gimnazială „Sfântul Calinic de la Cernica”\', \'Școala Gimnazială „Sfântul Nicolae”\', \'Școala Gimnazială „Sfântul Silvestru”\', \'Școala Gimnazială „Sfinții Constantin Și Elena”\', \'Școala Gimnazială „Sfinții Voievozi”\', \'Școala Gimnazială „Titu Maiorescu”\', \'Școala Gimnazială „Tudor Arghezi”\', \'Școala Gimnazială „Uruguay”\', \'Școala Gimnazială „Vasile Alecsandri”\', \'Şcoala Gimnazială „Voievod Neagoe Basarab”\', \'Şcoala Gimnazială Cezar Bolliac\', \'Școala Gimnazială „Ion I. C. Brătianu”\', \'Școala Gimnazială „Ionel Teodoreanu”\', \'Şcoala Gimnazială „Leonardo Da Vinci”\', \'Școala Gimnazială „Liviu Rebreanu”\', \'Școala Gimnazială „Luceafărul”\', \'Școala Gimnazială „Maica Domnului”\', \'Școala Gimnazială „Maria Rosetti”\', \'Școala Gimnazială „Mărțișor”\', \'Școala Gimnazială „Mexic”\', \'Școala Gimnazială „Mihai Botez”\', \'Școala Gimnazială „Mircea Sântimbreanu”\', \'Școala Gimnazială „Nicolae Grigorescu”\', \'Şcoala Gimnazială „Nicolae Labiş”\', \'Școala Gimnazială „Nicolae Titulescu”\', \'Școala Gimnazială „Orizont”\', \'Școala Gimnazială „Petrache Poenaru”\', \'Școala Gimnazială „Petre Ghelmez”\', \'Școala Gimnazială „Petre Ispirescu”\', \'Școala Gimnazială „Pia Brătianu”\', \'Școala Gimnazială „Herăstrău”\', \'Școala Gimnazială „I. G. Duca”\', \'Școala Gimnazială „Iancului”\', \'Școala Gimnazială „Ienăchiţă Văcărescu”\', \'Școala Gimnazială „Ion Dumitru”\', \'Școala Gimnazială „General Eremia Grigorescu”\', \'Școala Gimnazială „Geo Bogza”\', \'Școala Gimnazială „George Bacovia”\', \'Școala Gimnazială „George Călinescu”\', \'Școala Gimnazială „George Topârceanu”\', \'Școala Gimnazială „Grigore Ghica Voievod”\', \'Colegiul Național „Emil Racoviță”\', \'Colegiul Național „Mihai Eminescu”\', \'Colegiul Național „Școala Centrală”\', \'Liceul Greco-Catolic "Timotei Cipariu"\', \'Liceul Tehologic „Sfântul Antim Ivireanu”\', \'Liceul Teoretic „Alexandru Vlahuță"\', \'Liceul Teoretic „Decebal”\', \'Liceul Teoretic „Dimitrie Bolintineanu”\', \'Liceul Teoretic „Eugen Lovinescu”\', \'Liceul Teoretic „Ion Barbu”\', \'Liceul Teoretic „Jean Monet"\', \'Liceul Teoretic „Lucian Blaga”\', \'Liceul Teoretic „Marin Preda”\', \'Liceul Teoretic „Nichita Stănescu”\', \'Liceul Teoretic „Nicolae Iorga"\', \'Liceul Teoretic „Ștefan Odobleja”\', \'Liceul Teoretic Bilinngv „Miguel de Cervantes"\', \'Școala Gimnazială „Adrian Păunescu”\', \'Școala Gimnazială „Alexandru Costescu”\', \'Școala Gimnazială „Alexandru Ioan Cuza”\', \'Școala Gimnazială „Avram Iancu”\', \'Şcoala Gimnazială „Barbu Delavrancea”\', \'Școala Gimnazială „Constantin Brâncuși”\', \'Școala Gimnazială „Elena Văcărescu”\', \'Școala Gimnazială „Emil Racoviță”\', \'Școala Gimnazială „Eugen Barbu”\', \'Școala Gimnazială „Federico Garcia Lorca”\']':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(40,40,40,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Unitidenvmnt_29 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Unit_înv");
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Bahnschrift\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Unitidenvmnt_29(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
