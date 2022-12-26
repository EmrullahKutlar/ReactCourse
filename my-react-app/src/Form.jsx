import { useForm } from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'

export const Form = () => {

  const schema= yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'),null],"Password doesn't match").required()
  })
  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver:yupResolver(schema)
  });

  const onSubmit=(data)=>{
    console.log(data);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12   d-flex justify-content-center mt-5">
          <div className="col-12 col-md-8">
            <form  className="w-100 " onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                className="form-control"
                placeholder="FullName*"
                {...register("fullName")}
              />
              {errors.fullName && <p className="text-danger ">{errors.fullName?.message}</p>}
                
              <input type="email" className="form-control" placeholder="Email"  {...register("email")}/>
              {errors.email && <p className="text-danger ">{errors.email?.message}</p>}
              <input type="number" className="form-control" placeholder="Age" {...register("age")} />
              {errors.age && <p className="text-danger ">{errors.age?.message}</p>}
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                {...register("password")}
              />
               {errors.password && <p className="text-danger ">{errors.password?.message}</p>}
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
               {errors.confirmPassword && <p className="text-danger ">{errors.confirmPassword?.message}</p>}
              <input type="submit" className="btn btn-outline-success " />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
