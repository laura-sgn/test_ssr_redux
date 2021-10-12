import axios from 'axios'

function logError(errorResponse) {
	const response = errorResponse.response;

	if (response && response.data && response.data.error) {
		console.error(`HTTP Error: ${response.data.error}`);
	} else {
		console.error('Error: ', errorResponse);
	}
}

function unwrapData(response) {
	return response.data;
}

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';

export async function getNotes() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6')
    return response.data
  } catch (err) {
    logError(err)
  }
}