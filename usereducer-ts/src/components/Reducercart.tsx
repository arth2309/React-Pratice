import { Fragment, useReducer, useMemo, useState } from "react";
import { Formik, Field, Form } from "formik";

type CartItem = {
  id : number
  name: string;
  amount: string;
};

type CartAction = {
  type: "add";
  payload: CartItem;
};

type BillAmount = {
  billamount: number;
};

type BillAmountAction = {
  type: "billamount";
  payload: number;
};

const intialstate: CartItem[] = [];

const reducer = (state: any, action: CartAction) => {
  if (action.type === "add") {
    {
      return [...state, action.payload];
    }
  }
};

const intialbill: BillAmount = {
  billamount: 0,
};

const BillAmountReducer = (state: BillAmount, action: BillAmountAction) => {
  if (action.type === "billamount") {
    return { billamount: state.billamount + action.payload };
  } else {
    return state;
  }
};

const gstAdder = (value: number) => {
  return (value * 1.18).toFixed(2);
};

const Reducercart = () => {
 

  const [state, dispatch] = useReducer(reducer, intialstate);
  const [billstate, billdispatch] = useReducer(BillAmountReducer, intialbill);

  const [id,setId] = useState<number>(0);

 

 
  const submitHandler = (values: CartItem) => {
    dispatch({ type: "add", payload: values });
    billdispatch({ type: "billamount", payload: parseInt(values.amount) });
    setId((id) => id + 1);
    console.log(id);
    console.log(values);
  };

  const intialvalues: CartItem = {
    id : id + 1,
    name: "",
    amount: "",
  };


  return (
    <Fragment>
      <Formik initialValues={intialvalues} onSubmit={submitHandler}>
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Field name="name" type="text" />
          <Field name="amount" type="number" />
          <button type="submit">Add to Cart</button>
        </Form>
      </Formik>
      {state?.map((item) => (
        <div key={Math.random()}>
          name :{item.name} amount : {item.amount} + 18% GST
        </div>
      ))}
      Total bill : {gstAdder(billstate.billamount)} Rs
    </Fragment>
  );
};

export default Reducercart;
