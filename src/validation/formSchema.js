import * as Yup from "yup";

const formSchema = Yup.object().shape({
    size: Yup
        .string()
        .oneOf(['small', 'medium', 'large'], "Please select a size")
        .required("Must choose a size."),
    // sauce: Yup
    //     .array()
    //     .min([1], "Please select at least one sauce.")
    //     .required("Please select at least one sauce."),
    // cheese: Yup
    //     .array()
    //     .min([1], "Please select at least one cheese.")
    //     .required("Please select at least one cheese."),
    // instructions: Yup
    //     .string()
    //     .min(10, "Please leave a more detailed instruction.")

})

export default formSchema;
