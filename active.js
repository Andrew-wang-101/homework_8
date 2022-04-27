

function Action() {
     var layerClass = ".top-layer";
     var layers = document.querySelectorAll(layerClass);
     for (const layer of layers) {
       layer.classList.toggle("active");
     }
  }
