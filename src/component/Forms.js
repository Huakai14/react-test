import React,{ useState,useEffect } from 'react'
import { useForm,Controller  } from 'react-hook-form'
import PhoneInput,{ isValidPhoneNumber } from 'react-phone-number-input'
import TopSection from './TopSection';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fullName',headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'Gender', headerName: 'Gender', width: 130 },
  { field: 'mobile', headerName:'MOBILE PHONE',type: 'number',width: 150,},
  { field: 'nationality', headerName: 'Nationality', width: 130 },
];

const rows = [
  { id: 1, Gender: 'male', firstName: 'Jon',lastName: 'Jon', mobile: 56,nationality:'thai' },
  { id: 2, Gender: 'male', firstName: 'Cersei',lastName: 'Jon', mobile: 42 ,nationality:'thai'},
  { id: 3, Gender: 'female', firstName: 'Jaime',lastName: 'Jon', mobile: 45,nationality:'thai' },
  { id: 4, Gender: 'female', firstName: 'Arya',lastName: 'Jon', mobile: 16,nationality:'thai' },
  { id: 5, Gender: 'female', firstName: 'Daenerys',lastName: 'Jon', mobile: null,nationality:'thai' },
  { id: 6, Gender: 'female', firstName: null,lastName: 'Jon', mobile: 150,nationality:'thai' },
  { id: 7, Gender: 'female', firstName: 'Ferrara',lastName: 'Jon', mobile: 44,nationality:'thai' },
  { id: 8, Gender: 'male', firstName: 'Rossini',lastName: 'Jon', mobile: 36,nationality:'thai' },
  { id: 9, Gender: 'male', firstName: 'Harvey',lastName: 'Jon', mobile: 65,nationality:'thai' },
];

function Forms() {
  const [items, setItems] = useState([]);
  const {register,reset,formState: { errors },handleSubmit,control} = useForm();
  const onSubmit = (data) => console.log(data);
  useEffect(() => {
      localStorage.setItem('items', JSON.stringify(items));
    }, [items]);
  return (
    <>
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
                {errors?.Gender?.type === "required" && <p></p>}
                <input {...register("Gender",{required: true,})} />
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
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
    </>
  )
}

export default Forms