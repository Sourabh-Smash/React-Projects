import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState();
  const [email, setMail] = useState();
  const [about, setAbout] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    // name = event.target[0].value;
    setName(event.target[0].value);
    setMail(event.target[1].value);
    setAbout(event.target[2].value);
    // console.log("name ", event.target[0].value);
    // console.log("email ", event.target[1].value);
    // console.log("about ", event.target[2].value);
  };
  return (
    <section className={`${styles.container} container`}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CALL"
            icon={<MdMessage fontSize="24px" />}
          />
          {/* <button onClick={onViaCallSubmit}>hello</button> */}
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutiine={true}
          text="VIA EMAIL"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="Email" name="Email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Textarea</label>
            <input name="text" rows="25" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT BUTTON" />
          </div>

          <div>{name + " " + email + " " + about}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="contact here" />
      </div>
    </section>
  );
};

export default ContactForm;
