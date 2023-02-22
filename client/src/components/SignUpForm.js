import React, { useState } from "react";
import Button from "../styles/Button"; 
import Error from "../styles/Error";
import Input from "../styles/Input";
import FormField from "../styles/FormField";
import Label from "../styles/Label";

function SignUpForm({ onLogin }) {
  const [first, setFirstName] = useState("");
  const [last, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [house, setHouse] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first,
        last,
        username,
        password,
        password_confirmation: passwordConfirmation,
        house,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((wizard) => onLogin(wizard));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
        <FormField>
        <Label htmlFor="first">First Name</Label>
        <Input
          type="text"
          id="first"
          autoComplete="off"
          value={first}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormField>
      <FormField>
      <Label htmlFor="username">Last Name</Label>
        <Input
          type="text"
          id="last"
          autoComplete="off"
          value={last}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="house">Hogwarts House</Label>
        <Input
          type="text"
          id="house"
          value={house}
          onChange={(e) => setHouse(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password Confirmation</Label>
        <Input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

export default SignUpForm;