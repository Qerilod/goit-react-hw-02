import s from "./Notification.module.css";
const Notification = ({ totalFeedback }) => {
  return totalFeedback === 0 ? (
    <p className={s.noFeedback}>No feedback yet</p>
  ) : null;
};

export default Notification;
