
//获得可视区高度
let viewHeight = document.documentElement.clientHeight;
    //getBoundingClientRect该方法返回一个矩形对象，包含四个属性：left top right bottom
    //分别表示元素各边与页面上边和左边的距离
function checkImgs () {
    const imgs = document.getElementsByTagName("img");
    Array.from(imgs).forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight) {
           
                el.src = el.dataset.original;
            
        }
    })
   
}
window.onscroll = checkImgs;
window.onload = checkImgs;