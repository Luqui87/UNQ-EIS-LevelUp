import { useParams } from 'react-router-dom'

export const PDFView = () => {
  const { title } = useParams()
  const pdf = localStorage.getItem('pdf')
  return (
    <center>
      <h1>{title}</h1>
      <embed src={pdf} width='720' height='1280' type='application/pdf' />
    </center>
  )
}

export default PDFView
