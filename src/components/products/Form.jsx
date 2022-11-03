import React from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../../hooks/useForm'
import { addProduct } from '../../redux/actions/productActions'
import { v4 as uuidv4 } from 'uuid';

const Form = () => {

  const [dataForm, handleChangeInput, reset] = useForm({
    name: '',
    price: '',
    quantity: ''
  })

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({
      ...dataForm,
      id: uuidv4()
    }))
    reset()
  }

  return (
    <div>
      <h3>Agregar Producto</h3>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          maxWidth: 400
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder='Nombre'
          name='name'
          value={dataForm.name}
          onChange={handleChangeInput}
        />
        <input
          type="number"
          placeholder='Precio'
          name='price'
          value={dataForm.price}
          onChange={handleChangeInput}
        />
        <input
          type="number"
          placeholder='Cantidad'
          name='quantity'
          value={dataForm.quantity}
          onChange={handleChangeInput}
        />

        <button type='submit'>Guardar</button>
      </form>
    </div>
  )
}

export default Form