const MOVIES_URL = "https://movies-dbase.herokuapp.com/movies";



export const handleRatingChange = (rating, index, id) => {
    return new Promise((resolve) => {
        fetch(`${MOVIES_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({rating: rating})
        }).then( response => {
                resolve(response);
            }
        )
    });
}

export const get = (url) => {
    return new Promise((resolve) => {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                resolve(response)
            })
        }
    );
  };