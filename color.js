export async function setColor(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.src = url;
    image.onload = () => {
      const temCanvas = document.createElement('canvas');
      temCanvas.width = image.width;
      temCanvas.height = image.height;
      const tmpCtx = temCanvas.getContext('2d');

      tmpCtx.drawImage(
        image,
        0, 0,
        image.width, image.height
      );

      resolve({
        colorCtx: tmpCtx,
        width: image.width,
        height: image.height
      })
    }
  });
}