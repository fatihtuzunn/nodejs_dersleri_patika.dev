function getData(data) {
    return new Promise((resolve, reject) => {
        console.log(`Veriler alınmaya çalışılıyor...`);
        if (data) {
            resolve(`Veriler alındı.`)
        } else {
            reject(`Veriler alınamadı.`)
        }
    })
};

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log(`Veriler düzenleniyor...`);
        if (receivedData) {
            resolve(`Veriler düzenlendi.`)
        } else {
            reject(`Veriler düzenlenemedi.`)
        }
    })
};


/*
getData(true)
    .then(result => {
        console.log(result);
        return cleanData(true)
    }).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })

 Async-await promise karşılanmasının başka bir
yazım şeklidir
 */
async function processData() {
    try {// Hata yakalamak için try - bloğu kullanılıyor.catch 
      const receivedData = await getData(true); // await verilerin tamamıyla alındığından emin oluyor
      console.log(receivedData);
      const cleanedData = await cleanData(false);
      console.log(cleanedData); // await verilerin temizlendiğinden emin oluyor
    } catch (error) {
      console.log(error);
    }
  }
  