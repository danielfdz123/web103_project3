const API_URL = '/api/locations';

export const getAllLocations = async () => {
  	const response = await fetch(API_URL);

  	if (!response.ok) 
	{
    	throw new Error('Failed to fetch locations');
  	}

  	const data = await response.json();
  	return data;
};

export const getLocationById = async (id) => {
  	const response = await fetch(`${API_URL}/${id}`);

  	if (!response.ok) 
	{
    	throw new Error('Failed to fetch location');
  	}
  	const data = await response.json();
  	return data;
};

export default { getAllLocations, getLocationById }