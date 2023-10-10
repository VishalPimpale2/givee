import *  as  Yup from "yup";
export const billingSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("please enter your name"),
    cardEnd: Yup.string().matches( /^[0-9]{16}$/ ,'invalide card number').required("please enter your card number"),
    exp: Yup.string().required("please enter your exp date"),
    cvv: Yup.string().required("please enter your cvv")
})


// .string()
// .test('test-number', // this is used internally by yup
// 'Credit Card number is invalid', //validation message
//  value => valid.number(value).isValid) // return true false based on validation
// .required()

// cardNumber: Yup.string()
// .label('Card number')
// .max(16)
// .required(),
// cvc: Yup.string()
// .label('CVC')
// .min(3)
// .max(4)
// .required(),
// nameOnCard: Yup.string()
// .label('Name on card')
// .required(),
// expiryMonth: Yup.string()
// .label('Expiry month')
// .min(2)
// .max(2)
// .required(),
// expiryYear: Yup.string()
// .label('Expiry year')
// .min(4)
// .max(4)
// .required(),