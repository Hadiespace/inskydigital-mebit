const mapElement = document.querySelector('#map');

const init = () => {
	const map = new ymaps.Map('map', {
		center: [mapElement.dataset.lat, mapElement.dataset.lng],
		zoom: 16,
	});

	const placemark = new ymaps.Placemark([mapElement.dataset.lat, mapElement.dataset.lng], {}, {
		iconLayout: 'default#image',
		iconImageHref: './images/map-pin.svg',
		iconImageSize: [44, 44],
		iconImageOffset: [-22, -22],
	});

	map.behaviors.disable('scrollZoom');
	map.geoObjects.add(placemark);
};

export const createMap = () => mapElement && ymaps.ready(init);
