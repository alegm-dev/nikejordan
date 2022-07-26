import { useState } from "react";
import { TextField, Grid } from "@mui/material";
import Button from "../../../../../StyledDefault/Button";
import { FormContainer } from "./Styled/FormContainer";
import { SendOrder } from "../SendOrder/SendOrder";

export const FormOrder = ({ showForm, handlerForm }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState(false);

  const [buyer, setBuyer] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setBuyer({
      ...buyer,
      [field]: value
    });
  };

  const validateForm = (e) => {
    e.preventDefault();
    setOrder(!order);
  };

  return !order ? (
    <FormContainer showForm={showForm}>
      <h3>Información de contacto</h3>
      <div className="box-form">
        <form onSubmit={validateForm}>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                id="outlined-basic"
                label="Nombre"
                name="name"
                variant="outlined"
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                id="outlined-basic"
                label="Apellido"
                name="lastName"
                variant="outlined"
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="tel"
                id="outlined-basic"
                label="Telefono"
                name="phone"
                variant="outlined"
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="email"
                id="outlined-basic"
                label="E-mail"
                name="email"
                variant="outlined"
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <Button
                type="sbumit"
                className="btn-submit"
                onChange={handleChange}
                required
              >
                ENVIAR
              </Button>
            </Grid>
          </Grid>
          <h4>
            Por favor complete el formulario con sus datos para terminar la
            compra.
          </h4>
        </form>
      </div>
      <div className="box-footer">
        <Button onClick={handlerForm}>VOLVER</Button>
      </div>
    </FormContainer>
  ) : (
    <SendOrder
      buyer={buyer}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
    />
  );
};
