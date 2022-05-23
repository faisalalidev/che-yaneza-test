import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <form action="/api/info" method="post">
    <label for="first_name">First Name:</label>
    <input
      type="text"
      id="first_name"
      name="first_name"
      required
      minlength="3"
      maxlength="25"
    />
    <br></br>
    <label for="last_name">Last Name:</label>
    <input type="text" id="last_name" name="last_name" required   minlength="3"
      maxlength="25"/>
    <br></br>
    <label for="email">email:</label>
    <input type="text" id="email" name="email" required   minlength="3"
      maxlength="50" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' />

    <br></br>
    <label for="message">Message:</label>
    <textarea type="textarea" id="message" name="message"  maxlength="500" required />
    <br></br>
    <button type="submit">Submit</button>
  </form>
  )
}
