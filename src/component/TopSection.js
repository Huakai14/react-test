import React,{ useState,useEffect } from 'react'
import { useForm,Controller  } from 'react-hook-form'
import PhoneInput,{ isValidPhoneNumber } from 'react-phone-number-input'

function TopSection() {
    const [items, setItems] = useState([]);
    const {register,reset,formState: { errors },handleSubmit,control} = useForm();
    const onSubmit = (data) => console.log(data);
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
      }, [items]);
  return (
    <div className = "topsec">
        <h2>Registration</h2>
        <div className = "container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className = "register">
                <label htmlFor='title'>title:</label>
                <select {...register("title")}>
                    <option value="mr">mr</option>
                    <option value="mrs">mrs</option>
                    <option value="miss">miss</option>
                </select>
                <label htmlFor='firstName'>First Name:</label>
                {errors?.firstName?.type === "required" && <p></p>}
                <input {...register("firstName",{required: true,})} />
                <label>Last Name:</label>
                {errors?.lastName?.type === "required" && <p></p>}
                <input {...register("lastName",{required: true,})} />
            </div>
            <div className='register'>
                <label htmlFor="birthday">Birthday:</label>
                {errors?.birthday?.type === "required" && <p></p>}
                <input type="date"{...register("birthday",{required: true,})} />
                <label htmlFor="nationality">Nationality:</label>
                <select {...register("nationality")}>
                    <option value="thai">thai</option>
                    <option value="usa">usa</option>
                    <option value="japan">japan</option>
                </select>
            </div>
            <div className='register'>
                <label htmlFor="citizenID">CitizenID:</label>
                {errors?.citizenID?.type === "required" && <p></p>}
                <input {...register("citizenID",{required: true,})} />
            </div>
            <div className='register'>
                <label htmlFor="gender">Gender:</label>
                <label htmlFor="male">
                        <input
                            {...register("gender")}
                            type="radio"
                            name="gender"
                            value="male"
                            id="male"
                        />
                        male
                </label>
                <label htmlFor="female">
                        <input
                            {...register("gender")}
                            type="radio"
                            name="gender"
                            value="female"
                            id="female"
                        />
                        female
                </label>
                <label htmlFor="unisex">
                        <input
                            {...register("gender")}
                            type="radio"
                            name="gender"
                            value="unisex"
                            id="unisex"
                        />
                        unisex
                </label>
            </div>
            <div className='register'>
                <label htmlFor="mobile">Mobile Phone:</label>
                <Controller
                name="mobile"
                control={control}
                rules={{
                    validate: (value) => isValidPhoneNumber(value)
                }}
                render={({ field: { onChange, value } }) => (
                    <PhoneInput
                    value={value}
                    onChange={onChange}
                    defaultCountry="TH"
                    id="mobile"
                    />
                )}
                />
                {errors["mobile"] && (
                <p className="error-message">Invalid Phone</p>
                )}
            </div>
            <div className='register'>
                <label htmlFor="passport">Passport No:</label>
                {errors?.passport?.type === "required" && <p></p>}
                <input {...register("passport",{required: true,})} />
            </div>
            <div className='register'>
                <label htmlFor="salary">Expected Salary:</label>
                <input {...register("salary",{required: true,})} />
                THB
                <button type="submit">Submit</button>
            </div>
            
        </form>
        </div>
    </div>
  )
}

export default TopSection