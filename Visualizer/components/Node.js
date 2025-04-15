// components/Node.js
export class Node {
    constructor(label) {
      this.label = label;
      this.element = document.createElement('div');
      this.element.className = 'node';
      this.element.innerText = label;
      this.element.style.position = 'absolute';
      this.element.style.left = '100px';
      this.element.style.top = '100px';
      this.element.style.padding = '10px';
      this.element.style.border = '2px solid #000';
      this.element.style.backgroundColor = '#fff';
      this.makeDraggable();
    }
  
    makeDraggable() {
      let offsetX = 0, offsetY = 0;
      this.element.addEventListener('mousedown', (e) => {
        offsetX = e.offsetX;
        offsetY = e.offsetY;
  
        const move = (event) => {
          this.element.style.left = event.pageX - offsetX + 'px';
          this.element.style.top = event.pageY - offsetY + 'px';
        };
  
        const up = () => {
          document.removeEventListener('mousemove', move);
          document.removeEventListener('mouseup', up);
        };
  
        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', up);
      });
    }
  }
  