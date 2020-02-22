var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
var request = require('request');

var requestSettings = {
  method: 'GET',
  url: 'https://github.com/Eigo-Mt-Fuji/aedmap/blob/master/7000020473821-02222020050256.zip?raw=true',
  encoding: null
};
request(requestSettings, function (error, response, body) {
  console.log("read to data");
  //正しくデータを読み込めたら
  if (!error && response.statusCode == 200) {
    //GTFSのデータ構造については、https://developers.google.com/transit/gtfs-realtime/reference#VehicleDescriptorを参照
    var feed = GtfsRealtimeBindings.FeedMessage.decode(body);
    feed.entity.forEach(function(entity) {
      if (entity.vehicle) {
        //コンソールにデータを表示
        console.log(entity.vehicle.vehicle.id);
        console.log(entity.vehicle.position);
      }
    });
  }
});


