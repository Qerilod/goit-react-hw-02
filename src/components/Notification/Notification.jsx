import s from "./Notification.module.css";
const Notification = ({ totalFeedback }) => {
  return totalFeedback > 0 ? null : (
    <p className={s.noFeedback}>No feedback yet</p>
  );
};

export default Notification;
