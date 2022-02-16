import React, { useEffect } from 'react';
import styled from 'styled-components';

const Map = ({ address }) => {
  useEffect(() => {
    const { kakao } = window;

    let mapContainer = document.getElementById('map'),
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        draggable: false,
        zoomable: false,
        disableDoubleClickZoom: true,
        level: 3,
      };

    let map = new kakao.maps.Map(mapContainer, mapOption);

    let geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        let marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        marker.setMap(map);
        map.setCenter(coords);
      }
    });
  }, [address]);

  return (
    <div>
      <MapImg id="map" />
    </div>
  );
};

const MapImg = styled.div`
  width: 100%;
  height: 250px;
  z-index: 0;
`;

export default Map;
