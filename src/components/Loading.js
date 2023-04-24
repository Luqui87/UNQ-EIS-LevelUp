import loading_icon from '../resources/loading.gif'

export const Loading = () => {
  return (
    <img
      src={loading_icon}
      alt='cargando'
      style={{ maxWidth: '20em', margin: '0 auto', display: 'block' }}
    />
  )
}

export default Loading
