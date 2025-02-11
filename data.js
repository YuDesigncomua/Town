var APP_DATA = {
  "scenes": [
    {
      "id": "0-bedroom_panno",
      "name": "Bedroom_Panno",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -3.1291699300805043,
        "pitch": -0.01683301084665345,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -1.0577882153414109,
          "pitch": 0.13774673622627454,
          "rotation": 0,
          "target": "1-bedroom_panno_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom_panno_2",
      "name": "Bedroom_Panno_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.576998592709348,
        "pitch": 0.024999132256287027,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 2.7168611862318555,
          "pitch": 0.10577550568599747,
          "rotation": 0,
          "target": "0-bedroom_panno"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
