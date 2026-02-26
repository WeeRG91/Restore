// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, type CounterState } from "./counterReducer";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/stores/store";
import { decrement, increment } from "./counterReducer";

function ContactPage() {
  // const data = useSelector((state: CounterState) => state.data);
  // const dispatch = useDispatch();

  const {data} = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch();

  return (
    <>
      <Typography variant="h2">Test Redux Store</Typography>
      <Typography variant="h5">The data is: {data}</Typography>

      <ButtonGroup>
        <Button color="error" onClick={() => dispatch(decrement(1))}>
          Decrement
        </Button>
        <Button color="secondary" onClick={() => dispatch(increment(1))}>
          Increment
        </Button>
        <Button color="primary" onClick={() => dispatch(increment(5))}>
          Increment by 5
        </Button>
      </ButtonGroup>
    </>
  );
}

export default ContactPage;
