import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../redux/actions/productActions'

export const List = () => {

  const products = useSelector((state) => state.products)
  const dispatch = useDispatch();

  const handleDelete = (idProduct) => {
    dispatch(deleteProduct(idProduct))
  }

  const handleEdit = (idProduct) => {
    
  }

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
                <td>
                  <span onClick={() => {handleDelete(product.id)}}>❌</span>
                  <span onClick={() => {handleEdit(product.id)}}>✏️</span>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
