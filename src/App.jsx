import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [FeedbackList, setFeedbackList] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("Voting"));
    if (savedData) {
      return savedData;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const totalFeedback =
    FeedbackList.good + FeedbackList.neutral + FeedbackList.bad;
  const positiveFeedback = Math.round(
    (FeedbackList.good / totalFeedback) * 100
  );
  const OptionsVote = (option) => {
    setFeedbackList((prev) => ({ ...prev, [option]: prev[option] + 1 }));
  };
  const resetFeedback = () => {
    setFeedbackList({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("Voting", JSON.stringify(FeedbackList));
  }, [FeedbackList]);
  return (
    <div>
      <Description />
      <Options
        onVote={OptionsVote}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      <Notification totalFeedback={totalFeedback} />
      {totalFeedback > 0 && (
        <Feedback
          feedbackList={FeedbackList}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
}
export default App;
