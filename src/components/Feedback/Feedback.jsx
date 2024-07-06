import s from "./Feedback.module.css";
const Feedback = ({ feedbackList }) => {
  return (
    <section>
      <ul className={s.list}>
        <li className={s.listGood}>good: {feedbackList.good}</li>
        <li className={s.listNeutral}>neutral: {feedbackList.neutral}</li>
        <li className={s.listBad}>bad: {feedbackList.bad}</li>
      </ul>
    </section>
  );
};

export default Feedback;
