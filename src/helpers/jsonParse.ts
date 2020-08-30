export default function jsonParse(data) {
	data = JSON.stringify(data);
	data = JSON.parse(data);

	return data;
}
