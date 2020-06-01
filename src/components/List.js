import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../App.js'; 

import '../styles/List.css';

export default function List(props) {

    const { axios } = useContext(AuthContext)(); 
    const [wholesale, setWholeSale] = useState([{}]); 
    const category = props.category.toLowerCase(); 
    const title = props.category; 

    useEffect(() => {

      async function getWholeSale () { 
        await axios.get(`https://sautimarket.herokuapp.com/data/${category}`) 
        .then(response => {
            console.log(response.data); 
            setWholeSale(response.data[`${category}_data`]);
        })
        .catch(error => {
            console.log(error); 
        })
    }

        getWholeSale(); 
    }, [])

  return (
    <div className="App">
      <ProductTable
        products={wholesale} category={title}
      />
    </div>
  );
}

const ProductTable = (props) => {

  const { items, requestSort, sortConfig } = useSortableData(props.products);
  
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>{props.category} Products</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('country')}
              className={getClassNamesFor('country')}
            >
              Country
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('marketplace')}
              className={getClassNamesFor('marketplace')}
            >
              Marketplace
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('product')}
              className={getClassNamesFor('product')}
            >
              Product
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('price')}
              className={getClassNamesFor('price')}
            >
              Price
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('category')}
              className={getClassNamesFor('category')}
            >
              Category
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('phase')}
              className={getClassNamesFor('phase')}
            >
              Phase
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.country}</td>
            <td>{item.marketplace}</td>
            <td>{item.product}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>{item.phase}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};
