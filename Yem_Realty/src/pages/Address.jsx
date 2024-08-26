import React, { useEffect, useState } from 'react';
import { handleNextStep, handlePreviousStep } from '../redux/admin';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Select from 'react-select';
import { MdErrorOutline } from 'react-icons/md';

const Address = () => {
  let dispatch = useDispatch();
  const store = useSelector((state) => state.adminReducer.adminSign);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    if (store) {
      setValue('localgovernment', store.localgovernment);
      setValue('address', store.address);
      setValue('nationality', store.nationality);
      setValue('state', store.state);
    }
    fetch(
      'https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code'
    )
      .then((response) => response.json())
      .then((data) => {
        const formattedCountries = data.countries.map((country) => ({
          label: country.label,
          value: country.value,
        }));
        setCountries(formattedCountries);
        setSelectedCountry(
          formattedCountries.find(
            (country) => country.value === data.userSelectValue
          )
        );
      });
  }, []);

  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  const Schema = yup.object().shape({
    localgovernment: yup.string().required(
      <span className="flex">
        <span className="mt-1 me-1">
          <MdErrorOutline />
        </span>{' '}
        <span>Field is required</span>
      </span>
    ),
    state: yup.string().required(
      <span className="flex">
        <span className="mt-1 me-1">
          <MdErrorOutline />
        </span>{' '}
        <span>Field is required</span>
      </span>
    ),
    nationality: yup.string().required(
      <span className="flex">
        <span className="mt-1 me-1">
          <MdErrorOutline />
        </span>{' '}
        <span>Kindly Select a Country</span>
      </span>
    ),
    address: yup.string().required(
      <span className="flex">
        <span className="mt-1 me-1">
          <MdErrorOutline />
        </span>{' '}
        <span>Field is required</span>
      </span>
    ),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setValue('nationality', selectedOption.label); // Update the form value with the country name
  };

  const onSubmit = (data) => {
    let form = { ...store, ...data };
    dispatch(handleNextStep(form));
  };

  return (
    <>
      <div className="lg:w-[300px] md:w-[300px] w-[250px]">
        <h1 className="text-xl font-bold text-center text-red-700">Address</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2">
            <label className="font-bold" htmlFor="">
              Local Government Area
            </label>
            <input
              {...register('localgovernment')}
              type="text"
              className={`border border-black h-[40px] font-bold rounded w-full my-1`}
            />
            <p className="text-red-600">{errors.localgovernment?.message}</p>
          </div>
          <div className="my-2">
            <label className="font-bold" htmlFor="">
              State
            </label>
            <input
              {...register('state')}
              type="text"
              className={`border border-black h-[40px] font-bold rounded w-full my-1`}
            />
            <p className="text-red-600">{errors.state?.message}</p>
          </div>
          <div className="my-2">
            <label htmlFor="">Nationality</label>
            <Select
              options={countries}
              value={selectedCountry}
              onChange={handleCountryChange}
              className={`border border-black h-[40px] my-1 rounded w-full`}
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
            />
            <p className="text-red-600">{errors.nationality?.message}</p>
          </div>
          <div className="my-2">
            <label className="font-bold" htmlFor="">
              Address
            </label>
            <input
              {...register('address')}
              type="text"
              className={`border border-black h-[40px] my-1 rounded w-full`}
            />
            <p className="text-red-600">{errors.address?.message}</p>
          </div>
          <button
            onClick={() => dispatch(handlePreviousStep())}
            className="bg-red-700 text-white rounded p-2"
          >
            Previous
          </button>
          <button type="submit" className="float-right bg-red-700 text-white rounded p-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Address;
