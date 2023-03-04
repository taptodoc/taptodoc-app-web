import "./YourQuery.css";

const YourQuery = ({ onClose }) => {
  return (
    <div className="your-query">
      <input className="message" type="text" />
      <input className="subject" type="text" required />
      <div className="subject1">Subject</div>
      <div className="message1">Message</div>
      <button className="send-bg" />
      <div className="send">Send</div>
      <img className="send-icon" alt="" src="../sendicon.svg" />
      <div className="your-query1">Your Query</div>
      <img className="close-icon" alt="" src="../closeicon.svg" />
    </div>
  );
};

export default YourQuery;
