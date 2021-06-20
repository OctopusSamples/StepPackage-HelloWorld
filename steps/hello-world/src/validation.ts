import {ConvertibleInputPathToValue, Validate, ValidateInputs} from "@octopusdeploy/step-api";
import HelloWorldStepInputs from "./inputs";
import { ValueValidator } from "@octopusdeploy/step-validation-api/src/index";

const validateInputs: ValidateInputs<HelloWorldStepInputs> = (inputs, validate) => {
    return validateName(inputs.name, validate);
};
export default validateInputs;

function validateName(input: ConvertibleInputPathToValue<string>, validate: Validate): ValueValidator[] {
    return [validate(input, (input2) => {
        if (input2 === "") return "Name can not be empty"
    })]
}