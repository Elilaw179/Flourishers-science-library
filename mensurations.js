document.getElementById('shape-select').addEventListener('change', function () {
    const shape = this.value;
    const inputFields = document.getElementById('input-fields');
    inputFields.innerHTML = ''; 

    switch (shape) {
      case 'triangle':
        inputFields.innerHTML = `
          <input id="base" type="number" placeholder="Base (b)">
          <input id="height" type="number" placeholder="Height (h)">
        `;
        break;
      case 'rectangle':
        inputFields.innerHTML = `
          <input id="length" type="number" placeholder="Length (l)">
          <input id="width" type="number" placeholder="Width (w)">
        `;
        break;
      case 'square-area':
        inputFields.innerHTML = `
          <input id="side" type="number" placeholder="Side (a)">
        `;
        break;
      case 'parallelogram':
        inputFields.innerHTML = `
          <input id="base" type="number" placeholder="Base (b)">
          <input id="height" type="number" placeholder="Height (h)">
        `;
        break;
      case 'trapezium':
        inputFields.innerHTML = `
          <input id="base1" type="number" placeholder="Base 1 (a)">
          <input id="base2" type="number" placeholder="Base 2 (b)">
          <input id="height" type="number" placeholder="Height (h)">
        `;
        break;
      case 'circle-area':
        inputFields.innerHTML = `
          <input id="radius" type="number" placeholder="Radius (r)">
        `;
        break;
      case 'circle-circumference':
        inputFields.innerHTML = `
          <input id="radius" type="number" placeholder="Radius (r)">
        `;
        break;
      case 'rectangle-perimeter':
        inputFields.innerHTML = `
          <input id="length" type="number" placeholder="Length (l)">
          <input id="width" type="number" placeholder="Width (w)">
        `;
        break;
      case 'square-perimeter':
        inputFields.innerHTML = `
          <input id="side" type="number" placeholder="Side (a)">
        `;
        break;
    }
  });

  document.getElementById('calculate-btn').addEventListener('click', function () {
    const shape = document.getElementById('shape-select').value;
    let result = 0;

    switch (shape) {
      case 'triangle':
        const baseT = parseFloat(document.getElementById('base').value);
        const heightT = parseFloat(document.getElementById('height').value);
        result = 0.5 * baseT * heightT;
        break;
      case 'rectangle':
        const lengthR = parseFloat(document.getElementById('length').value);
        const widthR = parseFloat(document.getElementById('width').value);
        result = lengthR * widthR;
        break;
      case 'square-area':
        const sideS = parseFloat(document.getElementById('side').value);
        result = sideS * sideS;
        break;
      case 'parallelogram':
        const baseP = parseFloat(document.getElementById('base').value);
        const heightP = parseFloat(document.getElementById('height').value);
        result = baseP * heightP;
        break;
      case 'trapezium':
        const base1 = parseFloat(document.getElementById('base1').value);
        const base2 = parseFloat(document.getElementById('base2').value);
        const heightTr = parseFloat(document.getElementById('height').value);
        result = 0.5 * (base1 + base2) * heightTr;
        break;
      case 'circle-area':
        const radiusA = parseFloat(document.getElementById('radius').value);
        result = Math.PI * radiusA * radiusA;
        break;
      case 'circle-circumference':
        const radiusC = parseFloat(document.getElementById('radius').value);
        result = 2 * Math.PI * radiusC;
        break;
      case 'rectangle-perimeter':
        const lengthP = parseFloat(document.getElementById('length').value);
        const widthP = parseFloat(document.getElementById('width').value);
        result = 2 * (lengthP + widthP);
        break;
      case 'square-perimeter':
        const sideP = parseFloat(document.getElementById('side').value);
        result = 4 * sideP;
        break;
    }

    document.getElementById('result').textContent = `Result: ${result}`;
  });