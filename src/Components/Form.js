import { useForm } from "react-hook-form";
import { formKaydet } from "../Reducer/Action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Form() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      CompanyName: "",
      Expectations: "",
      Salary: 0,
    },
  });
  function onSubmit(data) {
    dispatch(formKaydet(data));
    toast.success("thank you for your message");
    setTimeout(() => {
      history.push("/");
    }, 3000);
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Form_list">
          <div className="Label_Input">
            <label htmlFor="CompanyName">Company</label>
            <input
              id="CompanyName"
              type="text"
              {...register("CompanyName", {
                required: "Please fill your company name",
              })}
            />
          </div>
          <div>
            {errors.CompanyName && (
              <p className="Error">{errors.CompanyName.message}</p>
            )}
          </div>
          <div className="Label_Input">
            <label htmlFor="Expects">Expectations</label>
            <input
              id="Expects"
              type="text"
              {...register("Expectations", {
                required: "Please fill your expectations",
              })}
            />
          </div>
          <div>
            {errors.Expectations && (
              <p className="Error">{errors.Expectations.message}</p>
            )}
          </div>
          <div className="Label_Input">
            <label htmlFor="Salary">Salary</label>
            <input
              id="Salary"
              type="number"
              {...register("Salary", {
                min: {
                  value: 20000,
                  message: "My demand as salary min 20000TL",
                },
              })}
            />
          </div>
          <div>
            {errors.Salary && <p className="Error">{errors.Salary.message}</p>}
          </div>
          <div className="Button">
            <button type="submit" disabled={!isValid}>
              SEND IT
            </button>
            <Link to="/">
              <button type="button">MAIN PAGE</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
