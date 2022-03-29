
//const getImagenPromesa = () => new Promise(resolve => resolve())
// getImagenPromesa().then( console.log);

const getImagen = async() => {

  try {
    const apiKey = 'zYS6GtIsYT721JtemsEdaaqSbDda3D6m';
    const resp = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
  } catch (error) {
    // error
    console.error(error)
  }
}


getImagen();
