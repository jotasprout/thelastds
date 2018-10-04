const apiRoot = "http://ws.audioscrobbler.com/2.0/";

const myAPIkey = "5766e13c0e8bf8295089720eb9bc2f22";

const davidBowieMBID = "5441c29d-3602-4898-b1a1-b77fa23b8e50";
const iggyPopMBID = "f37b3f31-b1f8-4b88-8cb5-b34f709b17d7";
const iggyStoogesMBID = "1253e5e9-eaa7-4ce6-81b8-09725e8cee43";
const stoogesMBID = "794c6bf2-3241-416f-9b8f-24e2d84a1c4b";
const oneBadPigMBID = "f88dd1a1-8e46-4b89-84af-edeaa479e55a";

let artistMBID = oneBadPigMBID;
let albumMBID;
let trackMBID;

const artistGetInfo = apiRoot + "?method=artist.getinfo&api_key=" + myAPIkey + "&mbid=" + artistMBID + "&format=json";
const albumsByArtistGetInfo = apiRoot + "?method=artist.gettopalbums&api_key=" + myAPIkey + "&mbid=" + artistMBID + "&limit=80&format=json";
const albumGetInfo = apiRoot + "?method=album.getinfo&api_key=" + myAPIkey + "&mbid=" + albumMBID + "&format=json";
const trackGetInfo = apiRoot + "?method=track.getinfo&api_key=" + myAPIkey + "&mbid=" + trackMBID + "&format=json";

function fetchArtist () {
	fetch(artistGetInfo)
	.then (function (response) {
		console.log(response.json());
	});
}

// fetchArtist();

function fetchAlbumsByArtist () {
	fetch(albumsByArtistGetInfo)
	.then (function (response) {
		console.log(response.json());
	});	
	
}

fetchAlbumsByArtist();