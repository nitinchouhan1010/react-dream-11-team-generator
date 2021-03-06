import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import Team from "./team.json";
import { BrowserRouter as Router, Link } from "react-router-dom";
const TeamForm = () => {
  const [count, setCount] = useState(Team);
  var temp;

  useEffect(() => {
    setCount(count);
    console.log(count);
  });
  return (
    <div className="container pb-4">
      <Link
        to="/TeamDetail"
        className="btn-sm border float-right mt-3 text-black-50"
      >
        Preview
      </Link>
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
        onSubmit={(values, { setSubmitting }) => {
          temp = values;
          localStorage.setItem("dataSource", JSON.stringify(values));
          alert("Please click on Preview");
          console.log(temp.captain);
          // setTimeout(() => {
          //   alert(JSON.stringify(values));
          //   setSubmitting(false);
          // }, 400);
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
              <label htmlFor="TeamFirst" className="w-100">
                Team First
              </label>
              <input
                className="form-control mb-2 form-control-sm"
                type="text"
                name="TeamFirst"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.TeamFirst}
              />
            </div>

            <div>
              <label htmlFor="TeamSecond" className="w-100">
                Team Second
              </label>
              <input
                className="form-control mb-2 form-control-sm"
                type="text"
                name="TeamSecond"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.TeamSecond}
              />
            </div>
            <div>
              <label htmlFor="captain" className="w-100">
                Captain
              </label>
              <input
                className="form-control mb-2 form-control-sm"
                type="text"
                name="captain"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.captain}
              />
            </div>

            <div>
              <label htmlFor="vcaptain" className="w-100">
                vcaptain
              </label>
              <input
                className="form-control mb-2 form-control-sm"
                type="text"
                name="vcaptain"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.vcaptain}
              />
            </div>

            <div>
              <label htmlFor="player3" className="w-100">
                player3
              </label>
              <input
                className="form-control mb-2 form-control-sm"
                type="text"
                name="player3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player3}
              />
            </div>

            <div>
              <label htmlFor="player4" className="w-100">
                player4
              </label>
              <input
                className="form-control mb-2 form-control-sm"
                type="text"
                name="player4"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player4}
              />
            </div>

            <div>
              <label htmlFor="player5" className="w-100">
                player5
              </label>
              <input
                className="form-control mb-2 form-control-sm"
                type="text"
                name="player5"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player5}
              />
            </div>

            <div>
              <label htmlFor="player6" className="w-100">
                player6
              </label>
              <input
                className="form-control mb-2 form-control-sm"
                type="text"
                name="player6"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player6}
              />
            </div>

            <div>
              <label htmlFor="player7" className="w-100">
                player7
              </label>
              <input
                className="form-control mb-2 form-control-sm"
                type="text"
                name="player7"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player7}
              />
            </div>

            <div>
              <label htmlFor="player8" className="w-100">
                player8
              </label>
              <input
                className="form-control mb-2 form-control-sm"
                type="text"
                name="player8"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player8}
              />
            </div>

            <div>
              <label htmlFor="player9" className="w-100">
                player9
              </label>
              <input
                className="form-control mb-2 form-control-sm"
                type="text"
                name="player9"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player9}
              />
            </div>

            <div>
              <label htmlFor="player10" className="w-100">
                player10
              </label>
              <input
                className="form-control mb-2 form-control-sm"
                type="text"
                name="player10"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player10}
              />
            </div>

            <div>
              <label htmlFor="player11" className="w-100">
                player11
              </label>
              <input
                className="form-control mb-2 form-control-sm"
                type="text"
                name="player11"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.player11}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-outline-dark btn-sm"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default TeamForm;
