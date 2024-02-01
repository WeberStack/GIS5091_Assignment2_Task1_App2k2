require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
        var map = new Map({
          basemap: "none"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,

          extent: {
            // autocasts as new Extent()
            xmin: -14579808,
            ymin: 2931819,
            xmax: -6857166,
            ymax: 6685336,
            spatialReference: 102100
          }
        });
  

var featureLayer_1 = new FeatureLayer({
  url: "https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/ACS_2016_County_Education/FeatureServer"
});
map.add(featureLayer_1);

var featureLayer_2 = new FeatureLayer({
  url: "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Point_in_Time_Count_2019/FeatureServer"
});
map.add(featureLayer_2);

});
