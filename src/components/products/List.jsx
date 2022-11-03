import React from 'react'
import { useSelector } from 'react-redux'

export const List = () => {

  const products = useSelector((state) => state.products)

  return (
    <div>
      <h3>Lista de productos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>X</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
