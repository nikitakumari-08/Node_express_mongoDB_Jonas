const fs = require("fs");
const { resolve } = require("path");
const superagent = require ("superagent");


const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject ('I could not find the file')
            resolve(data);
        });

    });
};



const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject ('Could not write file')
                resolve ('success');
        });

    });
};


const getDogPic = async() => {
    try {
    const data = await readFilePro(`${__dirname}/dog.txt`)
     console.log(`Breed: ${data}`);


     const res1Pro =  superagent .get
     (`https://dog.ceo/api/breed/${data}/images/random`
    );

    const res2Pro =  superagent .get
     (`https://dog.ceo/api/breed/${data}/images/random`
     );
     
     const res3Pro =  superagent .get
     (`https://dog.ceo/api/breed/${data}/images/random`
     );   

     const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
     const imgs = all.map(el => el.body.message)
     console.log(imgs);


     await writeFilePro('dog-ing.txt', res.body.message);
     console.log('Random dog image saved to file!');

    } catch (err){
        console.log(err);
    }
    return '2: READY';
};
(async () => {
    try {
        console.log('1.Will get dog pics!');
        const x = await  getDogPic();
        console.log(x);
        console.log('3: Done getting dog pics!');
    } catch(err) {
    console.log('ERROR');
        }
})();

/*
console.log('1.Will get dog pics!');
getDogsPics()
.then(x => {
console.log = getDogPic();
console.log(x);
console.log('3: Done getting dog pics!');

})
.catch(err => {
    console.log('ERROR');
});
*/
/*
readFilePro(`${__dirname}/dog.txt`)
.then(data => {
    console.log(`Breed: ${data}`);
     return superagent .get(`https://dog.ceo/api/breed/${data}/images/random`)
})
    .then(res => {
        console.log(res.body.messages);
        return writeFilePro('dog-ing.txt', res.body.message)
         
    })
        .then(()  = {
            console.log('Random dog image saved to file!');
        })
    .catch(err => {
        console.log(err.message);
    }); */
