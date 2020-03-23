function loadImage(src) {
    let promise = new Promise(function(resolve, reject){
        let img = document.createElement('img')
        img.onload = function(){
            resolve(img);
        }
        img.onerror = function() {
            reject('image load fail')
        }
        img.src = src;
    });
    return promise
}
let src = 'https://image.shutterstock.com/z/stock-photo-chinese-coronavirus-covid-under-the-microscope-d-illustration-1643947495.jpg';
let result = loadImage(src);

result.then(function(imag){
    alert(`width: ${image.width}`)
    return imag
}).then(function(img) {
    alert(`height: ${img.height}`)
}).catch(function(ex) {
    alert(ex)
})