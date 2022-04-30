import Contacts from '../../components/contacts/contacts'
import ButtonBack from '../../components/button-back/button-back'

function ContactsPage(): JSX.Element {
  return (
    <div className="container">
      <ButtonBack />
      <Contacts />
    </div>
  )
}

export default ContactsPage
