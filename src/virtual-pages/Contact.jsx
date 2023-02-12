import '../styles/virtual-pages/Contact.css'
import{IoIosSend} from 'react-icons/io'
import contactHeaderImg from '../img/contact_icon_header.png'

export default function Contact(){
  return(
    <section className='contact'>
      <div className='contact__container'>
        <div className='contact__header'>
          <img src={contactHeaderImg} />
          <h1>¿COMO PUEDO AYUDARTE? </h1>
        </div>
        <form className='contact__form'>
          <label className='contact__label label1' for='formInputName'>Nombre</label>
          <input id='formInputName' className='contact__input input2' type='text' placeholder='Nombre Completo'/>
          
          <label className='contact__label lebel' for='formInputEmail'>Correo</label>
          <input id='formInputEmail' className='contact__input input4' type='email' placeholder='Tu Correo'/>
          
          <label className='contact__label label5' for='formInputSubject'>Asunto</label>
          <input id='formInputSubject' className='contact__input input6' type='text' placeholder='Tema a tratar'/>
          
          <label className='contact__label label7' for='formInputNumber'>Numero de celular</label>
          <input id='formInputNumber' className='contact__input input8' type='number' placeholder='Numero con lada'/>
          
          <label className='contact__label label9' for='formInputMessege'>Mensaje</label>
          <textarea id='formInputMessege' className='contact__input input10' type='textarea' placeholder='¿Como puedo ayudarte?'/>
          <button className='form__Button'>
            <IoIosSend />
            ENVIAR
            </button>
        </form>
      </div>
    </section>
  )
}