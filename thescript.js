fetch('array.json')

  .then(response => response.json())

  .then(data => {
    let eggsCost = 0;
    let pancakesCost = 0;
    let baconCost = 0;
    const container = document.createElement('div');
    container.id = 'menuContainer';


    data.forEach(menu => {

      const menuItem = document.createElement('div');
      menuItem.className = 'menu';
      menuItem.innerHTML = `<p>${menu.name}: $${menu.cost} dollars</p>`;
      console.log(`${menu.name}: $${menu.cost} dollars`);

      container.appendChild(menuItem)

      document.body.appendChild(container);

      if (menu.name.toLowerCase() === 'eggs') {
        eggsCost = menu.cost;
      } else if (menu.name.toLowerCase() === 'pancakes') {
        pancakesCost = menu.cost;
      }
        else if (menu.name.toLowerCase() === 'bacon') {
        baconCost = menu.cost;
      }
    });
    const comboItem = document.createElement ('div');
    comboItem.className = 'combo'
    comboItem.innerHTML = `<p>If you got eggs and pancakes it would cost $${eggsCost + pancakesCost} dollars.</p>
                           <p>If you got the bacon and eggs it would cost $${baconCost+ eggsCost} dollars.</p>
                           <p>If you got the pancakes and bacon it would cost $${pancakesCost + baconCost} dollars.</p>`
    console.log(`If you got eggs and pancakes it would cost $${eggsCost + pancakesCost} dollars.`);
    console.log(`If you got the bacon and eggs it would cost $${baconCost+ eggsCost} dollars.`);
    console.log(`If you got the pancakes and bacon it would cost $${pancakesCost + baconCost} dollars.`);
    document.body.appendChild(comboItem)

  })


  .catch(error => {
        console.error(error);
    });

