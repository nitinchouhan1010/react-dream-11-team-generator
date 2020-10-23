import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import Team from "./team.json";

const TeamForm = () => {
  const [count, setCount] = useState(Team);
  var temp;

  useEffect(() => {
    setCount(temp);
    console.log(count);
  });
  return (
    <div class="container">
      <Formik
        initialValues={{
          TeamFirst: "",
          TeamSecond: "",
          captain: "",
          vcaptain: "",
          player3: "",
          player4: "",
          player5: "",
          player6: "",
          player7: "",
          player8: "",
          player9: "",
          player10: "",
          player11: ""
        }}
        // validate={values => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = "Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "Invalid email address";
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          temp = values;
          console.log(temp);
          setTimeout(() => {
            alert(JSON.stringify(values));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="TeamFirst" class="w-100">
                Team First
              </label>
              <input
                type="text"
                name="TeamFirst"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.TeamFirst}
              />
            </div>

            <div>
              <label htmlFor="TeamSecond" class="w-100">
                Team Second
              </label>
              <input
                type="text"
                name="TeamSecond"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.TeamSecond}
              />
            </div>
            <div>
              <label htmlFor="captain" class="w-100">
                Captain
              </label>
              <input
                type="text"
                name="captain"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.captain}
              />
            </div>

            <div>
              <label htmlFor="vcaptain" class="w-100">
                vcaptain
              </label>
              <input
                type="text"
                name="vcaptain"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.vcaptain}
              />
            </div>

            <div>
              <label htmlFor="player3" class="w-100">
                player3
              </label>
              <input
                type="text"
                name="player3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player3}
              />
            </div>

            <div>
              <label htmlFor="player4" class="w-100">
                player4
              </label>
              <input
                type="text"
                name="player4"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player4}
              />
            </div>

            <div>
              <label htmlFor="player5" class="w-100">
                player5
              </label>
              <input
                type="text"
                name="player5"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player5}
              />
            </div>

            <div>
              <label htmlFor="player6" class="w-100">
                player6
              </label>
              <input
                type="text"
                name="player6"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player6}
              />
            </div>

            <div>
              <label htmlFor="player7" class="w-100">
                player7
              </label>
              <input
                type="text"
                name="player7"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player7}
              />
            </div>

            <div>
              <label htmlFor="player8" class="w-100">
                player8
              </label>
              <input
                type="text"
                name="player8"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player8}
              />
            </div>

            <div>
              <label htmlFor="player9" class="w-100">
                player9
              </label>
              <input
                type="text"
                name="player9"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player9}
              />
            </div>

            <div>
              <label htmlFor="player10" class="w-100">
                player10
              </label>
              <input
                type="text"
                name="player10"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player10}
              />
            </div>

            <div>
              <label htmlFor="player11" class="w-100">
                player11
              </label>
              <input
                type="text"
                name="player11"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player11}
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default TeamForm;
