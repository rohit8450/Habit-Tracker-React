import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../../action";
import styles from "../../styles/home.module.css";
import ActionButton from "./ActionButton";
import Card from 'react-bootstrap/Card';

const HabitCard = (props) => {
  const { habit } = props;
  var target = 5 ; 
  var progress = 0  ; 

  for(let i= 0 ; i < 6 ; i++){
    if(habit.weekdays[i].doneStatus === "done"){
      progress++ ; 
    }
  }
  const dispatch = useDispatch();

  const handleDeleteHabit = () => {
    dispatch(deleteHabit(habit.id));
  };

  return (
  
     <div
      style={{ width: "18rem"}}
      className={styles.habitCardContainer}
    >
      {["Info"].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem", borderRadius: "20px" }}
          className=""
        >
          <Card.Header
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <ActionButton habit={habit} />
            <i
              className="fa-solid fa-trash"
              onClick={handleDeleteHabit}
              style={{ color: "red", fontSize: "20px", marginTop: "5px" }}
            ></i>
          </Card.Header>

          <Card.Body>
            <Card.Title className={styles.cardName}>
              {" "}
              {` ${habit.name}`}{" "}
            </Card.Title>
            <Card.Text className={styles.weeklyProgress}>
              Target : {target} days / week
            </Card.Text>
            <Card.Text className={styles.weeklyProgress}>
              Progress :{progress} / {target}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  
  );
};

export default HabitCard;
