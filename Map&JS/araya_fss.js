var defaultCoor = [116.3, -1.3]; // dekat muara toyu

var mapserver = 'http://localhost/cgi-bin/mapserv.exe';

var layerCollection = {

    0 : new ol.layer.Tile({
        title : 'FSS',
        source : new ol.source.TileWMS({
            serverType : 'mapserver',
            url : mapserver,
            params : { 
                MAP : 'C:/ms4w/apps/araya/map_old/araya_fss.map',
                FORMAT : 'image/png',
                VERSION : '1.3.0',
                TRANSPARENT : true,
                LAYERS : 'ARAYAADM',
                // TILED : true
            },
            projection : 'EPSG:900913',
        }),
        visible : false
    }),

    1 : new ol.layer.Tile({
        title : 'FSS_HEVE',
        source : new ol.source.TileWMS({
            serverType : 'mapserver',
            url : mapserver,
            params : { 
                MAP : 'C:/ms4w/apps/araya/map_old/araya_fss.map',
                FORMAT : 'image/png',
                VERSION : '1.3.0',
                TRANSPARENT : true,
                LAYERS : 'ARAYAADM_HEVE',
                // TILED : true
            },
            projection : 'EPSG:900913',
        }),
        visible : false
    }),

    2 : new ol.layer.Tile({
        title : 'FSS_AMAN',
        source : new ol.source.TileWMS({
            serverType : 'mapserver',
            url : mapserver,
            params : { 
                MAP : 'C:/ms4w/apps/araya/map_old/araya_fss.map',
                FORMAT : 'image/png',
                VERSION : '1.3.0',
                TRANSPARENT : true,
                LAYERS : 'ARAYAADM_AMAN',
                // TILED : true
            },
            projection : 'EPSG:900913',
        }),
        visible : false
    }),

    3 : new ol.layer.Tile({
        title : 'FSS_ACRA',
        source : new ol.source.TileWMS({
            serverType : 'mapserver',
            url : mapserver,
            params : { 
                MAP : 'C:/ms4w/apps/araya/map_old/araya_fss.map',
                FORMAT : 'image/png',
                VERSION : '1.3.0',
                TRANSPARENT : true,
                LAYERS : 'ARAYAADM_ACRA',
                // TILED : true
            },
            projection : 'EPSG:900913',
        }),
        visible : false
    }),

    4 : new ol.layer.Tile({
        title : 'FSS_EPEL',
        source : new ol.source.TileWMS({
            serverType : 'mapserver',
            url : mapserver,
            params : { 
                MAP : 'C:/ms4w/apps/araya/map_old/araya_fss.map',
                FORMAT : 'image/png',
                VERSION : '1.3.0',
                TRANSPARENT : true,
                LAYERS : 'ARAYAADM_EPEL',
                // TILED : true
            },
            projection : 'EPSG:900913',
        }),
        visible : false
    }),

    5 : new ol.layer.Tile({
        title : 'RKT2018',
        source : new ol.source.TileWMS({
            serverType : 'mapserver',
            url : mapserver,
            params : { 
                MAP : 'C:/ms4w/apps/araya/map_old/araya_fss.map',
                FORMAT : 'image/png',
                VERSION : '1.3.0',
                TRANSPARENT : true,
                LAYERS : 'fss_rkt2018',
                TILED : true
            },
            projection : 'EPSG:900913',
        }),
        visible : false
    }),

    6 : new ol.layer.Tile({
        title : 'Roads of FSS',
        source : new ol.source.TileWMS({
            serverType : 'mapserver',
            url : mapserver,
            params : { 
                MAP : 'C:/ms4w/apps/araya/map_old/araya_fss.map',
                FORMAT : 'image/png',
                VERSION : '1.3.0',
                TRANSPARENT : true,
                LAYERS : 'fss_roads',
                TILED : true
            },
            projection : 'EPSG:900913',
        }),
        visible : false
    }), 

   


 };
