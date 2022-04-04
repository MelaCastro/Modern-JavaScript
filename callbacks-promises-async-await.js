// CALLBACKS, PROMISES AND ASYNC/AWAIT

//ASINCRONO y SINCRONO

// CALLBACKS: Es una function que se pasa como parametro de otra funcion y no se sabe cuando se va a ejecutar
const URL = 'https://fakestoreapi.com/products/1'
const CATEGORY_URL = 'https://fakestoreapi.com/category'
function unfetch(url, cb) {
  fetch(url)
    .then(response => response.json())
    .then(data => cb(null, data))
  	.catch(err => cb(err))
}

unfetch(URL, function (error, data) {
  if (error) {
    console.log('ERROR 1')
    return
  }
  
  unfetch(`${CATEGORY_URL}/1`, (err, data) => {
    unfetch('', (err, data) => {
      unfetch('', (err, data) => {
        unfetch('', (err, data) => {
      
        })
      })
    })
  })
})

// PROMISES: Promises

function unfetch (url) {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject(`URL INVALIDAD ${url}`)
    }

    setTimeout(() => {
      resolve({ name: 'Iphone 13 Pro', category: 1 })
    }, 2000)
  })
}

unfetch('/products/13-pro')
	.then(response => {
    unfetch(`/category/${response.category}`)
    .then(response => {
      console.log('CATEGORIA')
    })
    .catch(error => console.log('ERROR:', error))
	})
	.catch(error => console.log('ERROR:', error))

// ASYC/AWAIT

async function getAll () {
  try {
    const responseOne = await unfetch('asdasd')
    const responseTwo = await unfetch('adasd')
    console.log(1, responseOne)
    console.log(2, responseTwo)
  } catch (error) {
    console.log(error)
  }
}

getAll() // 2ms