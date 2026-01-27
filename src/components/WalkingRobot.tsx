import Robot from "@/assets/robot-walk.gif";

const WalkingRobot = () => {
  return (
    <div className="walking-robot pointer-events-none">
      <img
        src={Robot}
        alt="Friendly robot walking"
        className="robot-img"
      />
    </div>
  );
};

export default WalkingRobot;
