import {createSlice} from '@reduxjs/toolkit'

const initialData =()=>   {

    const item = window.localStorage.getItem('adminSignUp')
    
    return item ? JSON.parse(item) : {
            currentStep: 0,
            
            Name: '',
            Lastname: '',
            dob: '',
            gender: '',
            Email: '',
            Phone: '',
            localgovernment: '',
            state: '',
            nationality: '',
            address: '',
            password: '',
        }
    
    }

    export const slice = createSlice({
        name: 'adminSignUp',
        initialState: {
            adminSign: initialData()
        },
        reducers: {
            handleNextStep: (state, action)=> {
                state.adminSign = {...state.adminSign, ...action.payload}
                state.adminSign.currentStep++
                localStorage.setItem("adminSignUp", JSON.stringify(state.adminSign))
            },
            handlePreviousStep: (state, action)=> {
                state.adminSign.currentStep--
            },
        }
    })
    export default slice.reducer    
    export const {handleNextStep, handlePreviousStep} = slice.actions