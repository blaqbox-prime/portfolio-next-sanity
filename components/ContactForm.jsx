import { Box, Heading,  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button, } from '@chakra-ui/react'
import React, {useState} from 'react'

function ContactForm() {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleClick = () => {
    fetch('/api/sendMessage',{
      method: 'POST',
      body: JSON.stringify({name:name, message:message, email:email})
    }).then(response => {
      setName('');
      setMessage('');
    }).catch(err => {
      setError('Failed to send message. Please try again later');
    })
  }

  return (
    <Box mb={'6rem'} id='contact'>
      <Heading>Get In Touch</Heading>
      <FormControl mt={3}>
  <FormLabel>Name</FormLabel>
  <Input type='text' onChange={(e) => setName(e.target.value)} value={name}/>
</FormControl>

<FormControl mt={3}>
  <FormLabel>Email</FormLabel>
  <Input type='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
</FormControl>

<FormControl mt={3}>
  <FormLabel>Message</FormLabel>
  <Textarea onChange={(e) => setMessage(e.target.value)} value={message}></Textarea>
</FormControl>

<FormControl>
<Button mt={6} onClick={() => handleClick()}>Send Message</Button>
<FormErrorMessage>
  {error ?? error}
</FormErrorMessage>
</FormControl>
    </Box>
  )
}

export default ContactForm