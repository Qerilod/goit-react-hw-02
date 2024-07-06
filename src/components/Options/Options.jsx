import s from "./Options.module.css";

const Options = ({ onVote, onReset, totalFeedback }) => {
  return (
    <section className={s.container}>
      <button className={s.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={s.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={s.button} onClick={() => onVote("bad")}>
        Bad
      </button>
      {totalFeedback > 0 ? (
        <button className={s.button} onClick={onReset}>
          Reset
        </button>
      ) : null}
    </section>
  );
};
export default Options;
