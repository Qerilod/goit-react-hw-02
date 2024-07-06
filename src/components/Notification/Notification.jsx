import s from "./Notification.module.css";
const Notification = ({ totalFeedback }) => {
  return totalFeedback > 0 ? null : (
    <p className={s.noFeedback}>No feedback yet</p>
  );
};

const PositiveFeedback = ({ positiveFeedback }) => {
  return (
    <p className={s.positive}>
      Positive feedback percentage:{" "}
      {isNaN(positiveFeedback) ? 0 : positiveFeedback}%
    </p>
  );
};
export default Notification;
export { PositiveFeedback };
