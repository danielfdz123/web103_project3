const API_URL = '/api/events';

export const getAllEvents = async () => {
  	const response = await fetch(API_URL);

  	if (!response.ok)
	{
    	throw new Error('Failed to fetch events');
  	}

  	const data = await response.json();
  	return data;
};

const getEventById = async (id) => {
  	const response = await fetch(`${API_URL}/${id}`)
  	const data = await response.json()
  	return data
}

const getEventsByLocation = async (locationId) => {
  	const response = await fetch(`${API_URL}/location/${locationId}`)
  	const data = await response.json()
  	return data
}

export default { getAllEvents,  getEventById, getEventsByLocation }
