import {useState} from 'react'

const Manual = () => {

  const formFields = {
    firstName: '',
    lastName: '',
  }

  const [formData, setFormData] = useState(formFields)


  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <div className='my-4'>
          <label htmlFor='FirstName'>First Name</label>
          <input type='text' onChange={handleChange} value={formData.firstName} className='block border-2 rounded-md ' name='firstname' placeholder='First Name' />
        </div>
        <div className='form-group'>
          <label htmlFor='LastName'>Last Name</label>
          <input type='text' onChange={handleChange} value={formData.lastName} className='block border-2 rounded-md' name='lastName' placeholder='Last Name' />
        </div>
        <button className='border-2 bg-blue-500 my-2 py-1 px-3 rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default Manual