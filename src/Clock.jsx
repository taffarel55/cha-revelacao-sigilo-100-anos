import { useCountdown } from "./useCountDown";
import "./Clock.css";

const CardTime = ({ valueTime, description }) => {
  const getValue = () => valueTime.toString().padStart(2, "0").split("");

  return (
    <div className="card-container">
      <div className="cardTime">
        {getValue().map((item, index) => (
          <span className="itemTime" key={index}>
            {item}
          </span>
        ))}
      </div>
      <h6 className="card-container__description">{description}</h6>
    </div>
  );
};

const Clock = ({ countDownDate }) => {
  const { month, day, hour, minute, second } = useCountdown(countDownDate);

  return (
    <div className="Clock">
      <div className="ClockText">{`${month} ${
        month > 1 ? "meses" : "mês"
      }, ${day} ${day > 1 ? "dias" : "dia"} e`}</div>

      <div className="ClockCard">
        <CardTime valueTime={hour} description="horas" /> :{" "}
        <CardTime valueTime={minute} description="minutos" /> :{" "}
        <CardTime valueTime={second} description="segundos" />
      </div>
    </div>
  );
};

export default Clock;
