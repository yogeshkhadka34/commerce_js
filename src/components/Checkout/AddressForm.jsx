import React, { useEffect, useState } from "react";
import FormInput from "./FormInput";
import { useForm, FormProvider } from "react-hook-form";
import { Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { commerce } from "../../lib/commerce";
import Stack from "@mui/material/Stack";

const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );
  // console.log(shippingOptions);
  const options = shippingOptions.map((so) => ({
    id: so.id,
    label: `${so.description}-(${so.price.formatted_with_symbol})`,
  }));

  const fetchShippingCountries = async () => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutToken.id
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[2]);
  };

  const fetchShippingSubdivisions = async (countryCode) => {
    const { subdivisions } =
      await commerce.services.localeListShippingSubdivisions(
        checkoutToken.id,
        shippingCountry
      );
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };
  // console.log(checkoutToken);
  // console.log(shippingCountry);
  // console.log(shippingSubdivision);

  const fetchShippingOptions = async () => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutToken.id,
      {
        country: shippingCountry,
        region: shippingSubdivision,
      }
    );

    setShippingOptions(options);
    // console.log(options);
    setShippingOption(options[0].id);
  };

  // If this console is removed then error is  React Hook useEffect has a missing dependency: 'fetchShippingCountries'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

  useEffect(() => {
    if (checkoutToken) {
      fetchShippingCountries(checkoutToken);
    }
  }, [checkoutToken]);

  useEffect(() => {
    if (shippingCountry) fetchShippingSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions();
  }, [shippingSubdivision]);

  const methods = useForm();
  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <Grid container>
            <FormInput
              name="firstName"
              label="First Name"
              required
              variant="standard"
            />
            <FormInput
              name="lastName"
              label="Last Name"
              required
              variant="standard"
            />
            <FormInput
              name="address"
              label="Address"
              required
              variant="standard"
            />
            <FormInput
              name="email"
              label="E-mail"
              required
              variant="standard"
            />
            <FormInput name="city" label="City" required variant="standard" />
            <FormInput
              name="zip"
              label="Zip-code"
              required
              variant="standard"
            />
          </Grid>
          {/* Second Grid */}
          <Stack
            direction="row"
            gap={8}
            xs={12}
            md={6}
            sx={{ marginTop: "1rem", marginLeft: "1rem" }}
          >
            <Stack direction="column" spacing={1} sx={{ minWidth: "15rem" }}>
              <InputLabel>Shipping Countries</InputLabel>
              <Select
                variant="standard"
                value={shippingCountry}
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Stack>

            <Stack
              direction="column"
              spacing={1}
              sx={{ minWidth: "15rem", marginLeft: "0.5rem" }}
            >
              <InputLabel>Shipping Subdivisions</InputLabel>
              <Select
                variant="standard"
                value={shippingSubdivision}
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {subdivisions.map((subdivision) => (
                  <MenuItem key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            gap={8}
            xs={12}
            md={6}
            sx={{ marginTop: "1rem" }}
          >
            <Stack
              direction="column"
              spacing={1}
              sx={{
                minWidth: "15rem",
                maxWidt: "15rem",
                marginTop: "0.5rem",
                marginLeft: "1rem",
              }}
            >
              <InputLabel>Shipping Options</InputLabel>
              <Select
                variant="standard"
                value={shippingOption}
                onChange={(e) => setShippingOption(e.target.value)}
              >
                {options.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Stack>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
